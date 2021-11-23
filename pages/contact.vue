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
          <h1>Our offices</h1>
          <p>Fiction to mission is based in Sfax, Tunisia. Our in-house team is made up of creative professionals that work closely with more than 50 creatives all around the globe to create out-of-the-box multimedia content, customized for your needs.</p>
        </div>
        <div class="c_body flex">
          <div class="form_contact w-50">
            <div class="cellule">
              <h2>Contact us</h2>
              <h3 class="mt-2 text_primary">
                <a
                  href="mailto:contact@fictiontomission.com"
                  class="text_primary"
                >contact@fictiontomission.com</a>
              </h3>
            </div>
            <div class="cellule mt-2">
              <h2>Address</h2>
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
              <h2>Phone</h2>
              <h3 class="mt-2 text_primary">
                <a class="text_primary" href="tel:+216 92 24 33 33">(+216) 92 10 13 33</a>
                <br />
                <a class="text_primary" href="tel:+216 92 24 33 33">(+216) 92 24 33 33</a>
              </h3>
            </div>
          </div>
          <form class="w-50">
            <base-input
              v-model="form.name"
              iType="text"
              data-field="input"
              class="my-2"
              label="Name"
              required
              placeholder="Full name"
            ></base-input>
            <base-input
              v-model="form.email"
              iType="email"
              class="my-2"
              label="Email"
              required
              placeholder="Compagny's email"
              data-field="input"
            ></base-input>
            <base-input
              v-model="form.job"
              class="my-2"
              data-field="select"
              :options="industries"
              label="Job position"
              required
              placeholder="Please select"
            ></base-input>
            <base-input
              v-model="form.budget"
              iType="text"
              class="my-2"
              label="Budget"
              required
              placeholder="Estimated budget"
              data-field="input"
            ></base-input>
            <base-input
              v-model="form.deadline"
              class="my-2"
              data-field="input"
              label="Deadline"
              iType="datetime-local"
              required
              placeholder="12/31/1996"
            ></base-input>
            <base-input
              v-model="form.industry"
              class="my-2"
              data-field="select"
              :options="industries"
              label="Industry"
              required
              placeholder="Please select"
            ></base-input>
            <base-input
              v-model="form.subject"
              iType="textarea"
              class="my-2"
              label="Subject"
              required
              placeholder="Full name"
              data-field="textarea"
            ></base-input>
            <div class="flex align_center end mt-4">
              <fBtn @click.native="submitForm" class="call_to_action bg_primary f_link text_white">
                <h3 class="text_white px-5 w-40">Submit</h3>
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
      title: this.$t('Contact us'),
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
      form: {
        name: "",
        email: "",
        job: "",
        budget: "",
        deadline: "",
        industry: "",
        subject: ""
      },
      industries: [
        { text: "Please select", val: "" },
        { text: "Agriculture, forestry and fishing", val: "" },
        { text: "Mining and quarrying", val: "" },
        { text: "Manufacturing", val: "" },
        {
          text: "Electricity, gas, steam and air conditioning supply",
          val: ""
        },
        {
          text:
            "Water supply; sewerage, waste management and remediation activities",
          val: ""
        },
        { text: "Construction", val: "" },
        {
          text:
            "Wholesale and retail trade; repair of motor vehicles and motorcycles",
          val: ""
        },
        { text: "Transportation and storage", val: "" },
        { text: "Accommodation and food service activities", val: "" },
        { text: "Information and communication", val: "" },
        { text: "Financial and insurance activities", val: "" },
        { text: "Real estate activities", val: "" },
        { text: "Professional, scientific and technical activities", val: "" },
        { text: "Administrative and support service activities", val: "" },
        {
          text: "Public administration and defence; compulsory social security",
          val: ""
        },
        { text: "Education", val: "" },
        { text: "Human health and social work activities", val: "" },
        { text: "Arts, entertainment and recreation", val: "" },
        { text: "Other service activities", val: "" },
        {
          text:
            "Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use",
          val: ""
        },
        {
          text: "Activities of extraterritorial organizations and bodies",
          val: ""
        }
      ]
    };
  },
  methods: {
    submitForm() {
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