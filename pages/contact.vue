<template>
  <div>
    <!-- hero section -->
    <section class="hero relative">
      <div class="flex container align_center relative fill_height">
        <div class="image flex1 flex align_center start">
          <img width="auto" height="auto" src="~static/img/contact/hero.svg" alt="hero" />
        </div>
        <div class="desc w-50 flex column center">
          <h1 class="hero_text mb-3">{{$t('contact.hero.heroText1')}}</h1>
          <div class="flex align_center">
            <div class="separator bg_primary relative mr-3"></div>
            <h1 class="text_right">{{$t('contact.hero.heroText2')}}</h1>
          </div>
        </div>
      </div>
      <div class="hero_content">
        <div class="container flex end align_center fill_height">
          <div class="w-50">
            <h1 class="text_white txt_right">{{$t('contact.hero.h1')}}</h1>
            <p class="text_white txt_right">{{$t('contact.hero.p')}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact form -->
    <section class="bg_lightGrey">
      <div class="contact_form container bg_white relative">
        <div class="c_head w-50">
          <h1>{{$t('contact.form.h1')}}</h1>
          <p>{{$t('contact.form.p')}}</p>
        </div>
        <div class="c_body flex">
          <div class="form_contact w-50">
            <div class="cellule">
              <h2>{{$t('contact.form.coord.contact')}}</h2>
              <h3 class="mt-2 text_primary">
                <a href="mailto:contact@fiction-to-mission.com" class="text_primary">contact@fiction-to-mission.com</a>
              </h3>
            </div>
            <div class="cellule mt-2">
              <h2>{{$t('contact.form.coord.address')}}</h2>
              <h3 class="mt-2 text_primary">
                <a href="https://g.page/fictiontomission?share" class="text_primary" target="_blank"
                  rel="noopener noreferrer">
                  St. Hédi Nouira,Sfax El Jadida,
                  <br />imm Fourat 3ème étage App. N°306,
                  <br />Sfax, 3027, Tunisia.
                </a>
              </h3>
            </div>
            <div class="cellule mt-2">
              <h2>{{$t('contact.form.coord.phone')}}</h2>
              <h3 class="mt-2 text_primary">
                <a class="text_primary" href="tel:+216 92 24 33 33">(+216) 92 10 13 33</a>
                <br />
                <a class="text_primary" href="tel:+216 92 24 33 33">(+216) 92 24 33 33</a>
              </h3>
            </div>
          </div>
          <form class="w-50" @submit.prevent>
            <base-input v-model="form.name" iType="text" data-field="input" class="my-2"
              :label="$t('contact.form.name.label')" required :placeholder="$t('contact.form.name.placeholder')"
              :error="errors.name" @errorField="errors.name=$event;" ref="name"></base-input>
            <base-input v-model="form.email" iType="email" class="my-2" :label="$t('contact.form.email.label')" required
              placeholder="email@company.com" data-field="input" :error="errors.email" @errorField="errors.email=$event"
              ref="email"></base-input>
            <base-input v-model="form.company" iType="text" data-field="input" class="my-2"
              :label="$t('contact.form.company.label')" required :placeholder="$t('contact.form.company.placeholder')"
              :error="errors.company" @errorField="errors.company=$event" ref="company"></base-input>
            <base-input v-model="form.phone" iType="number" class="my-2" :label="$t('contact.form.phone.label')" required
              :placeholder="$t('contact.form.phone.placeholder')" data-field="input" :error="errors.phone"
              @errorField="errors.phone=$event" ref="phone"></base-input>
            <base-input v-model="form.budget" iType="text" class="my-2" :label="$t('contact.form.budget.label')" required
              :placeholder="$t('contact.form.budget.placeholder')" data-field="input" :error="errors.budget"
              @errorField="errors.budget=$event" ref="budget"></base-input>
            <base-input v-model="form.job" class="my-2" data-field="select" :options="positions"
              :label="$t('contact.form.job.label')" placeholder="Please select" :error="errors.job"
              @errorField="errors.job=$event" ref="job"></base-input>

            <base-input v-model="form.deadline" class="my-2" data-field="input" :label="$t('contact.form.deadline.label')"
              iType="datetime-local" :placeholder="$t('contact.form.deadline.placeholder')" :error="errors.deadline"
              @errorField="errors.deadline=$event" ref="deadline"></base-input>
            <base-input v-model="form.industry" class="my-2" data-field="select" :options="industries"
              :label="$t('contact.form.industry.label')" placeholder="Please select" :error="errors.industry"
              @errorField="errors.industry=$event" ref="industry"></base-input>
            <base-input v-model="form.subject" iType="textarea" class="my-2" :label="$t('contact.form.subject.label')"
              required :placeholder="$t('contact.form.subject.placeholder')" data-field="textarea" :error="errors.subject"
              @errorField="errors.subject=$event" ref="subject"></base-input>
            <div class="flex align_center center mt-2" v-if="checkForm">
              <h4 class="text_primary">Please check required fields</h4>
            </div>
            <div class="flex align_center end mt-4">
              <fBtn :loading="loading" @click.native="submitForm" class="call_to_action bg_primary f_link text_white">
                <h3 class="text_white px-5 w-40">{{$t('contact.form.btn')}}</h3>
              </fBtn>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import createMessage from "~/apollo/mutations/contact/contact";
export default {
  head() {
    return {
      title: this.$t("Contact us"),
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Fiction to mission is based in Sfax, Tunisia. Our in-house team is made up of creative professionals that work closely with more than 50 creatives all around the globe to create out-of-the-box multimedia content, customized for your needs."
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Tunisia,sfax"
        }
      ]
    };
  },
  data() {
    return {
      checkForm: false,
      loading: false,
      form: {
        name: "",
        email: "",
        job: "",
        budget: "",
        deadline: "",
        industry: "",
        subject: "",
        company: "",
        phone: ""
      },
      errors: {
        name: "",
        email: "",
        job: "",
        budget: "",
        deadline: "",
        industry: "",
        subject: "",
        company: "",
        phone: "",
        total: 6
      },
      industries: [
        { text: this.$t("contact.form.industry.industries.select"), val: "" },
        {
          text: this.$t("contact.form.industry.industries.accounting"),
          val: "Accounting and Finance"
        },
        {
          text: this.$t("contact.form.industry.industries.admin"),
          val: "Administrative and Clerical"
        },
        {
          text: this.$t("contact.form.industry.industries.construction"),
          val: "Construction"
        },
        {
          text: this.$t("contact.form.industry.industries.creative"),
          val: "Creative and Design"
        },
        {
          text: this.$t("contact.form.industry.industries.customer"),
          val: "Customer Service"
        },
        {
          text: this.$t("contact.form.industry.industries.education"),
          val: "Education"
        },
        {
          text: this.$t("contact.form.industry.industries.energy"),
          val: "Energy and Utilities"
        },
        {
          text: this.$t("contact.form.industry.industries.engineer"),
          val: "Engineering"
        },
        {
          text: this.$t("contact.form.industry.industries.financial"),
          val: "Financial Services"
        },
        {
          text: this.$t("contact.form.industry.industries.health"),
          val: "Healthcare"
        },
        {
          text: this.$t("contact.form.industry.industries.hospitality"),
          val: "Hospitality"
        },
        { text: this.$t("contact.form.industry.industries.it"), val: "IT" },
        {
          text: this.$t("contact.form.industry.industries.labor"),
          val: "Labor"
        },
        {
          text: this.$t("contact.form.industry.industries.legal"),
          val: "Legal"
        },
        {
          text: this.$t("contact.form.industry.industries.maintenance"),
          val: "Maintenance and Repair"
        },
        {
          text: this.$t("contact.form.industry.industries.management"),
          val: "Management"
        },
        {
          text: this.$t("contact.form.industry.industries.manufactur"),
          val: "Manufacturing and Industrial"
        },
        {
          text: this.$t("contact.form.industry.industries.marketing"),
          val: "Marketing and Advertising"
        },
        { text: this.$t("contact.form.industry.industries.pharma"), val: "" },
        {
          text: this.$t("contact.form.industry.industries.production"),
          val: "Production Animation Agency"
        },
        {
          text: this.$t("contact.form.industry.industries.professional"),
          val: "Professional"
        },
        {
          text: this.$t("contact.form.industry.industries.restau"),
          val: "Restaurant and Food Service"
        },
        {
          text: this.$t("contact.form.industry.industries.retail"),
          val: "Retail"
        },
        {
          text: this.$t("contact.form.industry.industries.saas"),
          val: "SaaS"
        },
        {
          text: this.$t("contact.form.industry.industries.sales"),
          val: "Sales"
        },
        {
          text: this.$t("contact.form.industry.industries.security"),
          val: "Security"
        },
        {
          text: this.$t("contact.form.industry.industries.telecom"),
          val: "Telecommunications"
        },
        {
          text: this.$t("contact.form.industry.industries.transport"),
          val: "Transportation"
        },
        {
          text: this.$t("contact.form.industry.industries.warehouse"),
          val: "Warehouse"
        }
      ],
      positions: [
        { text: this.$t("contact.form.job.positions.select"), val: "" },
        { text: this.$t("contact.form.job.positions.ceo"), val: "CEO" },
        {
          text: this.$t("contact.form.job.positions.marketing"),
          val: "Marketing"
        },
        {
          text: this.$t("contact.form.job.positions.operations"),
          val: "Operations"
        },
        {
          text: this.$t("contact.form.job.positions.financial"),
          val: "Financial"
        },
        {
          text: this.$t("contact.form.job.positions.production"),
          val: "Production"
        },
        {
          text: this.$t("contact.form.job.positions.otherMarketing"),
          val: "Other Marketing Position"
        },
        { text: this.$t("contact.form.job.positions.student"), val: "Student" },
        { text: this.$t("contact.form.job.positions.other"), val: "Other" }
      ]
    };
  },
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async submitForm() {
      if (this.verifyForm()) {
        try {
          const token = await this.$recaptcha.execute("login");
          console.log("ReCaptcha token:", token);
          this.$apollo.mutate({
            mutation: createMessage,
            variables: {
              ...this.form
            },
            update: (cache, { data: { message } }) => {
              // Read the data from our cache for this query.
              // eslint-disable-next-line
              console.log(message);
            }
          });
          this.emptyErrors();
          this.emptyForm();
          this.checkForm = false;
        } catch (error) {
          console.log("Login error:", error);
        }
      } else {
        this.checkForm = true;
      }
    },
    emptyErrors() {
      this.errors = {
        name: "",
        email: "",
        job: "",
        budget: "",
        deadline: "",
        industry: "",
        subject: "",
        company: "",
        phone: "",
        total: 6
      };
    },

    emptyForm() {
      this.form = {
        name: "",
        email: "",
        job: "",
        budget: "",
        deadline: "",
        industry: "",
        subject: "",
        company: "",
        phone: ""
      };
    },

    verifyForm() {
      let verifier = 1;
      Object.keys(this.$refs).map(refKey => {
        let ref = this.$refs[refKey];
        verifier = verifier * ref.verifyAndEmit(this.form[refKey]);
      });
      return verifier;
    }
  }
};
</script>
<style lang="scss" scoped>
//*********Contact form************ */
.hero {
  min-height: 100vh;

  .desc {
    align-items: end;
  }

  .separator {
    height: 4px;
    width: 1.5rem;
    border-radius: 15px;
  }

  .image {
    position: relative;
    bottom: -5rem;
    perspective: 800px;

    img {
      animation: bounce 3s infinite ease-in-out;
    }
  }

  .hero_content {
    height: 27.5rem;
    width: 100%;
    background: linear-gradient(-90deg,
        rgba(51, 51, 51, 1) 0%,
        rgba(135, 84, 84, 1) 100%);
  }

  @media (max-width: 1024px) {
    &>.container {
      flex-wrap: wrap;

      .image {
        justify-content: center;
        bottom: 0rem;

        img {
          animation: bounce 3s infinite ease-in-out;
          max-height: 30rem;
        }
      }

      .desc {
        width: 100% !important;
        margin-top: 2rem;
        margin-bottom: 2rem;
        align-items: center;
      }
    }

    .hero_content {
      .container {
        justify-content: center;

        .w-50 {
          width: 100% !important;

          h1,
          p {
            text-align: center;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .image {
      img {
        max-width: 20rem;
      }
    }
  }
}

//********************* */
//*********Contact form************ */
.contact_form {
  min-height: 100vh;
  border-radius: 9px;
  top: -5rem;
  padding: 5rem;

  .c_head {
    margin-bottom: 4rem;

    p {
      line-height: 1.5;
    }
  }

  @media (max-width: 1024px) {
    .c_head {
      width: 100% !important;
    }

    .c_body {
      flex-wrap: wrap;

      .form_contact {
        width: 100% !important;

        .cellule {
          text-align: center;
        }
      }

      form {
        width: 100% !important;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
}

//********************* */
@keyframes bounce {
  0% {
    transform: translateY(-5px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-5px);
  }
}
</style>