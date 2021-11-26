<template>
  <div>
    <!-- hero section -->
    <section class="hero relative">
      <div class="flex container align_center relative fill_height">
        <div class="image flex1 flex align_center start">
          <img src="~static/img/contact/hero.svg" alt />
        </div>
        <div class="desc w-50 flex column center">
          <h1 class="hero_text mb-3">CONTACT US</h1>
          <div class="flex align_center">
            <div class="separator bg_primary relative mr-3"></div>
            <h1 class="text_right">FILL-NEEDS</h1>
          </div>
        </div>
      </div>
      <div class="hero_content">
        <div class="container flex end align_center fill_height">
          <div class="w-50">
            <h1 class="text_white txt_right">Tell us about your project</h1>
            <p class="text_white txt_right">
              We want to know what you’re up to. Tell us a bit about your project needs (timeline, budget, etc) so
              we can create a workflow that makes sense to your company needs.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact form -->
    <section class="bg_lightGrey">
      <div class="contact_form container bg_white relative">
        <div class="c_head w-50">
          <h1 v-tr>Our offices</h1>
          <p
            v-tr
          >Fiction to mission is based in Sfax, Tunisia. Our in-house team is made up of creative professionals that work closely with more than 50 creatives all around the globe to create out-of-the-box multimedia content, customized for your needs.</p>
        </div>
        <div class="c_body flex">
          <div class="form_contact w-50">
            <div class="cellule">
              <h2 v-tr>Contact us</h2>
              <h3 class="mt-2 text_primary">
                <a
                  href="mailto:contact@fictiontomission.com"
                  class="text_primary"
                >contact@fictiontomission.com</a>
              </h3>
            </div>
            <div class="cellule mt-2">
              <h2 v-tr>Address</h2>
              <h3 class="mt-2 text_primary">
                <a
                  href="https://g.page/fictiontomission?share"
                  class="text_primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Hédi Nouira,Sfax El Jadida,
                  <br />imm Fourat 3ème étage App. N°306,
                  <br />Sfax, 3027, Tunisia.
                </a>
              </h3>
            </div>
            <div class="cellule mt-2">
              <h2 v-tr>Phone</h2>
              <h3 class="mt-2 text_primary">
                <a class="text_primary" href="tel:+216 92 24 33 33">(+216) 92 10 13 33</a>
                <br />
                <a class="text_primary" href="tel:+216 92 24 33 33">(+216) 92 24 33 33</a>
              </h3>
            </div>
          </div>
          <form class="w-50" @submit.prevent>
            <base-input
              v-model="form.name"
              iType="text"
              data-field="input"
              class="my-2"
              :label="$t('Name')"
              required
              :placeholder="$t('Full name')"
              :error="errors.name"
              @errorField="errors.name=$event;"
              ref="name"
            ></base-input>
            <base-input
              v-model="form.email"
              iType="email"
              class="my-2"
              label="Email"
              required
              placeholder="email@company.com"
              data-field="input"
              :error="errors.email"
              @errorField="errors.email=$event"
              ref="email"
            ></base-input>
            <base-input
              v-model="form.company"
              iType="text"
              data-field="input"
              class="my-2"
              :label="$t('Company')"
              required
              :placeholder="$t('Company name')"
              :error="errors.company"
              @errorField="errors.company=$event"
              ref="company"
            ></base-input>
            <base-input
              v-model="form.phone"
              iType="number"
              class="my-2"
              :label="$t('Phone number')"
              required
              :placeholder="$t('+216 99 999 999 ')"
              data-field="input"
              :error="errors.phone"
              @errorField="errors.phone=$event"
              ref="phone"
            ></base-input>
            <base-input
              v-model="form.budget"
              iType="text"
              class="my-2"
              :label="$t('Budget')"
              required
              :placeholder="$t('Estimated budget')"
              data-field="input"
              :error="errors.budget"
              @errorField="errors.budget=$event"
              ref="budget"
            ></base-input>
            <base-input
              v-model="form.job"
              class="my-2"
              data-field="select"
              :options="positions"
              :label="$t('Job position')"
              placeholder="Please select"
              :error="errors.job"
              @errorField="errors.job=$event"
              ref="job"
            ></base-input>

            <base-input
              v-model="form.deadline"
              class="my-2"
              data-field="input"
              :label="$t('Deadline')"
              iType="datetime-local"
              placeholder="12/31/1996"
              :error="errors.deadline"
              @errorField="errors.deadline=$event"
              ref="deadline"
            ></base-input>
            <base-input
              v-model="form.industry"
              class="my-2"
              data-field="select"
              :options="industries"
              :label="$t('Industry')"
              placeholder="Please select"
              :error="errors.industry"
              @errorField="errors.industry=$event"
              ref="industry"
            ></base-input>
            <base-input
              v-model="form.subject"
              iType="textarea"
              class="my-2"
              :label="$t('Subject')"
              required
              :placeholder="$t('Your message')"
              data-field="textarea"
              :error="errors.subject"
              @errorField="errors.subject=$event"
              ref="subject"
            ></base-input>
            <div class="flex align_center center mt-2" v-if="checkForm">
              <h4 class="text_primary" v-tr>Please check required fields</h4>
            </div>
            <div class="flex align_center end mt-4">
              <fBtn @click.native="submitForm" class="call_to_action bg_primary f_link text_white">
                <h3 class="text_white px-5 w-40" v-tr>Submit</h3>
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
        { text: this.$t("Please select"), val: "" },
        {
          text: this.$t("Accounting and Finance"),
          val: "Accounting and Finance"
        },
        {
          text: this.$t("Administrative and Clerical"),
          val: "Administrative and Clerical"
        },
        { text: this.$t("Construction"), val: "Construction" },
        {
          text: this.$t("Creative and Design"),
          val: "Creative and Design"
        },
        {
          text: this.$t("Customer Service"),
          val: "Customer Service"
        },
        { text: this.$t("Education"), val: "Education" },
        {
          text: this.$t("Energy and Utilities"),
          val: "Energy and Utilities"
        },
        { text: this.$t("Engineering"), val: "Engineering" },
        { text: this.$t("Financial Services"), val: "Financial Services" },
        { text: this.$t("Healthcare"), val: "Healthcare" },
        { text: this.$t("Hospitality"), val: "Hospitality" },
        { text: this.$t("IT"), val: "IT" },
        { text: this.$t("Labor"), val: "Labor" },
        { text: this.$t("Legal"), val: "Legal" },
        {
          text: this.$t("Maintenance and Repair"),
          val: "Maintenance and Repair"
        },
        { text: this.$t("Management"), val: "Management" },
        {
          text: this.$t("Manufacturing and Industrial"),
          val: "Manufacturing and Industrial"
        },
        {
          text: this.$t("Marketing and Advertising"),
          val: "Marketing and Advertising"
        },
        { text: this.$t("Pharmaceutical and Research"), val: "" },
        {
          text: this.$t("Production Animation Agency"),
          val: "Production Animation Agency"
        },
        {
          text: this.$t("Professional"),
          val: "Professional"
        },
        {
          text: this.$t("Restaurant and Food Service"),
          val: "Restaurant and Food Service"
        },
        {
          text: this.$t("Retail"),
          val: "Retail"
        },
        {
          text: this.$t("SaaS"),
          val: "SaaS"
        },
        {
          text: this.$t("Sales"),
          val: "Sales"
        },
        {
          text: this.$t("Security"),
          val: "Security"
        },
        {
          text: this.$t("Telecommunications"),
          val: "Telecommunications"
        },
        {
          text: this.$t("Transportation"),
          val: "Transportation"
        },
        {
          text: this.$t("Warehouse"),
          val: "Warehouse"
        }
      ],
      positions: [
        { text: this.$t("Please select"), val: "" },
        { text: this.$t("CEO / C-Level / VP"), val: "CEO" },
        {
          text: this.$t("Marketing Manager / Marketing Director"),
          val: "Marketing"
        },
        { text: this.$t("Operations Manager"), val: "Operations" },
        { text: this.$t("Financial Manager"), val: "Financial" },
        { text: this.$t("Production Manager"), val: "Production" },
        {
          text: this.$t("Other Marketing Position"),
          val: "Other Marketing Position"
        },
        { text: this.$t("Student"), val: "Student" },
        { text: this.$t("Other"), val: "Other" }
      ]
    };
  },

  methods: {
    submitForm() {
      if (this.verifyForm()) {
        // this.$apollo.mutate({
        //   mutation: createMessage,
        //   variables: {
        //     ...this.form
        //   },
        //   update: (cache, { data: { message } }) => {
        //     // Read the data from our cache for this query.
        //     // eslint-disable-next-line
        //     console.log(message);
        //   }
        // });
        this.checkForm = false;
      } else {
        this.checkForm = true;
      }
    },
    verifyForm() {
      console.log(Object.keys(this.$refs));
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
    background: linear-gradient(
      -90deg,
      rgba(51, 51, 51, 1) 0%,
      rgba(135, 84, 84, 1) 100%
    );
  }
  @media (max-width: 1024px) {
    & > .container {
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