<template>
  <div>
    <!-- Hero section part -->
    <section class="hero bg_primary">
      <div class="container flex column px-0 fill_height">
        <div class="flex align_center space_between hero_container">
          <div class="text_head">
            <h1 class="hero_text text_white">
              <span v-tr>OUR SERVICES</span>
              <br />
              <span class="flex align_baseline">
                <div class="separator bg_text1 mr-3"></div>
                <span v-tr>EFFECTIVELY</span>
              </span>
            </h1>
            <p
              class="text_white"
              v-tr
            >We offer a spectrum of services that helps you grow your business and enhance your online presence.</p>
          </div>
          <div class="w-50 image flex end">
            <img width="auto" height="auto" src="~static/img/services/services.png" alt="hero" />
          </div>
        </div>
        <div class="why_us bg_white flex center flex2">
          <div class="container w-90 flex column align_center">
            <div class="mb-4 c_head py-5 flex column align_end w-100">
              <h1 v-tr class="w-50 txt_right">WHY WORK WITH US</h1>
              <p
                class="w-50 txt_right"
                v-tr
              >In order to maximize their benefits, clients from the entire world collaborate with us because of our</p>
            </div>
            <div class="voices flex align_center space_between w-90">
              <div class="flex align_center column">
                <div class="voice flex align_center center">
                  <img
                    width="auto"
                    height="auto"
                    src="~/static/img/services/precession.png"
                    alt="precession"
                  />
                </div>
                <h2 class="text_primary mt-3" v-tr>PRECESSION</h2>
              </div>
              <div class="flex align_center column">
                <div class="voice flex align_center center">
                  <img
                    width="auto"
                    height="auto"
                    src="~static/img/services/management.png"
                    alt="precession"
                  />
                </div>
                <h2 class="text_primary mt-3" v-tr>TEAM-MANAGEMENT</h2>
              </div>
              <div class="flex align_center column">
                <div class="voice flex align_center center">
                  <img
                    width="auto"
                    height="auto"
                    src="~static/img/services/perfection.png"
                    alt="precession"
                  />
                </div>
                <h2 class="text_primary mt-3" v-tr>PERFECTION</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Promises section part -->
    <section class="promises pt-5 px-0 container bg_white">
      <div class="flex column align_center mb-5">
        <div class="c_head w-90 mb-5">
          <h1 v-tr>Our Promise</h1>
          <p
            v-tr
          >We embrace the challenges and create innovative ideas. We will always provide web strategies and solutions that will drive business results. We are here to listen and give the utmost of our capabilities.</p>
          <h2>
            <span v-tr>Here is some information about</span>
            <span class="text_primary">FTM</span>
            <span v-tr>in numbers:</span>
          </h2>
        </div>
      </div>
      <div class="promises_list flex center">
        <div class="fill_height w-90 flex align_center space_between">
          <div class="promise flex align_center">
            <h1 class="hero_text text_white mr-3">5</h1>
            <h1 class="text_white">
              YEARS OF
              <br />EXPERIENCE
            </h1>
          </div>
          <div class="promise flex align_center">
            <h1 class="hero_text text_white mr-3">1K</h1>
            <h1 class="text_white">
              PROJECTS
              <br />COMPLETED
            </h1>
          </div>
          <div class="promise flex align_center">
            <h1 class="hero_text text_white mr-3">2M</h1>
            <h1 class="text_white">
              CUPS OF
              <br />COFFEE
            </h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Brands section part -->
    <section class="brands container bg_white">
      <div class="py-5">
        <div class="c_head my-5">
          <h1 class="txt_center" v-tr>Industry experience</h1>
          <p
            class="txt_center"
            v-tr
          >FTM’s clients range in size, fields and countries. But we love designing for smaller companies and facilitating their successful navigation in a competitive multi-national marketplace. Check out some of the fileds we’ve had the pleasure of working in:</p>
        </div>
        <div class="brands_list flex align_center wrap space_between">
          <div
            class="brand_item flex column align_center end"
            v-for="(brand, index) in brands"
            :key="index"
          >
            <img
              class="mb-3"
              :src="require(`~/static/img/icons/brands/${brand.image}`)"
              :alt="brand.text"
            />
            <h2 class="txt_center">{{brand.text}}</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Services section part -->
    <section class="services bg_white container">
      <div class="c_head flex end mb-5">
        <div class="w-50">
          <h1 class="txt_right" v-tr>THIS IS OUR KNOWLEDGE</h1>
          <p
            v-tr
            class="txt_right"
          >Here are the main services we offer, depending on your needs, goals and aspirations.</p>
        </div>
      </div>
      <div class="c_body">
        <div class="services_list flex space_between wrap">
          <div class="service w-25 my-4" v-for="(service, key) in services" :key="key">
            <router-link
              :to="`services/${deepFind(service, 'slug')}`"
              tag="h2"
              class="text_primary txt_center pointer title_link"
            >{{deepFind(service, 'titleDisplay')}}</router-link>
            <h4
              v-for="(stack, index) in subDivisions(service)"
              :key="index"
              class="txt_center my-3"
            >
              <span v-if="index<3">{{stack.title}}</span>
            </h4>
            <router-link
              :to="`services/${deepFind(service, 'slug')}`"
              tag="u"
              class="text_primary t-11 w-100 d_block txt_center pointer"
              v-tr
            >Read more</router-link>
          </div>
        </div>
      </div>
      <div class="c_footer flex end mb-5">
        <div class="w-70">
          <h1 class="txt_right" v-tr>AND MUCH-MORE</h1>
          <p
            class="txt_right"
            v-tr
          >Still looking for something else? NO WORRIES, we’ve got you. Getting in touch with us, explaining your needs and goals and trusting us is all you need to do.</p>
        </div>
      </div>
    </section>
    <!-- services footer -->
    <contact-bloc></contact-bloc>
  </div>
</template>
<script>
import servicesQuery from "~/apollo/queries/home/services";

export default {
  name: "servicesPage",
  data() {
    return {
      brands: [
        { image: "consultancy.svg", text: this.$t("Consultancy") },
        { image: "e-commerce.svg", text: this.$t("E-commerce") },
        { image: "education.svg", text: this.$t("Education") },
        { image: "fintech.svg", text: this.$t("Fintech") },
        { image: "healthcare.svg", text: this.$t("Health care") },
        { image: "it-service.svg", text: this.$t("IT services") },
        { image: "realestate.svg", text: this.$t("Real estate") },
        { image: "retail.svg", text: this.$t("Retail") },
        { image: "socialmedia.svg", text: this.$t("Social media") },
        { image: "start-up.svg", text: this.$t("Start-ups") }
      ]
    };
  },
  methods: {
    subDivisions(service) {
      if (
        this.deepFind(service, "techStack.stacks") &&
        this.deepFind(service, "techStack.showAsSubdivisions")
      ) {
        return this.deepFind(service, "techStack.stacks");
      } else if (
        this.deepFind(service, "cycle.subCategory") &&
        this.deepFind(service, "cycle.showAsSubdivisions")
      ) {
        return this.deepFind(service, "cycle.subCategory");
      } else {
        return null;
      }
    }
  },
  head() {
    return {
      title: "Services",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Your business needs to look professional & coherent so it can be perceived as serious as it deserves, this means clearly more opportunities & higher revenue."
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "precession,team-management,perfection"
        }
      ]
    };
  },
  apollo: {
    services: {
      prefetch: true,
      query: servicesQuery,
      variables() {
        return { locale: this.$i18n.locale };
      },
      watchLoading: function(isLoading) {
        this.$nextTick(() => {
          if (this.$nuxt && this.$nuxt.$loading) {
            isLoading
              ? this.$nuxt.$loading.start()
              : this.$nuxt.$loading.finish();
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.rtl {
  .hero {
    .c_head {
      align-items: flex-start;
    }
  }
  .promise {
    h1 {
      text-align: end;
    }
  }
  .services {
    .c_head {
      justify-content: start;
    }
  }
  .c_footer {
    justify-content: start;
  }
}
.hero {
  height: calc(100vh - 80px);
  min-height: 1000px;
  .separator {
    height: 10px;
    width: 3.5rem;
    border-radius: 15px;
  }
  .image {
    max-height: 28.75rem;
    img {
      max-height: 28.75rem;
      width: 100%;
    }
  }
  .why_us {
    border-radius: 9px 9px 0 0;
    .voice {
      width: 12.625rem;
      height: 12.625rem;
      border-radius: 50%;
      border: 1px solid map-get($map: $colors, $key: primary);
      img {
        max-width: 90%;
        max-height: 90%;
      }
    }
  }

  @media (max-width: 1024px) {
    height: calc(100vh - 200px);
    min-height: 817px;
    .why_us {
      .voice {
        width: 10.625rem;
        height: 10.625rem;
      }
    }
  }
  @media (max-width: 767px) {
    height: auto;
    min-height: 817px;
    .hero_container {
      flex-wrap: wrap;
      justify-content: center;
      .image,
      .hero_text {
        width: 100% !important;
      }
      .text_head {
        text-align: center;
      }
      .hero_text {
        text-align: center;

        br {
          display: none;
        }
        span {
          text-align: center;
          justify-content: center;
        }
        .separator {
          display: none;
        }
      }
    }
    .c_head {
      h1,
      p {
        text-align: center;
      }

      .w-50 {
        width: 100% !important;
      }
    }
    .why_us {
      .voices {
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 2rem;
        & > .flex {
          margin-bottom: 1.5rem;
          width: 100%;
        }
        .voice {
          width: 8rem;
          height: 8rem;
        }
      }
    }
  }
  @media (max-width: 480px) {
  }
}
//Promises section
.promises {
  .promises_list {
    height: 7.5rem;
    background: linear-gradient(#333 15.06%, #875454 100%);
    .promise {
      .hero_text {
        font-size: 5.125rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .promises_list {
      .promise {
        .hero_text {
          font-size: 4rem;
        }
        h1 {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .c_head {
      text-align: center;
    }
    .promises_list {
      .promise {
        .hero_text {
          font-size: 2.5rem;
          margin-right: 0.3rem !important;
        }
        h1 {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .promises_list {
      .promise {
        .hero_text {
          font-size: 1.9rem;
          margin-right: 0.3rem !important;
        }
        h1 {
          font-size: 0.8rem;
        }
      }
    }
  }
}
//Brands
.brands {
  .brands_list {
    min-height: 500px;
    justify-content: center;
    .brand_item {
      width: 300px;
      height: 120px;
      margin: 1rem 0;
      @media (max-width: 1640px) {
        width: 215px;
      }
      @media (max-width: 1200px) {
        width: 190px;
        img {
          max-width: 60px;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      @media (max-width: 1024px) {
        width: 160px;
        img {
          max-width: 50px;
        }
        h2 {
          font-size: 1.2rem;
        }
      }
      @media (max-width: 870px) {
        width: 140px;
      }
    }
  }
}
.services {
  @media (max-width: 1024px) {
    .c_head {
      .w-50 {
        width: 70% !important;
      }
    }
    .c_body {
      .services_list {
        flex-wrap: wrap;
        justify-content: center;
        .service {
          width: 33% !important;
          min-width: 250px;
        }
      }
    }
    .c_footer {
      .w-70 {
        width: 100% !important;
      }
    }
  }
  @media (max-width: 767px) {
    .c_head {
      .w-50 {
        width: 100% !important;
        h1,
        p {
          text-align: center !important;
        }
      }
    }
    .c_footer {
      .w-70 {
        width: 100% !important;
        h1,
        p {
          text-align: center !important;
        }
      }
    }
  }
}
</style>