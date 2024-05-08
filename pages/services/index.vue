<template>
  <div>
    <!-- Hero section part -->
    <section class="hero bg_primary">
      <div class="container flex column px-0 fill_height">
        <div class="flex align_center space_between hero_container">
          <div class="text_head">
            <h1 class="hero_text text_white">
              <span>{{$t('services.hero.heroText1')}}</span>
              <br />
              <span class="flex align_baseline">
                <div class="separator bg_text1 mr-3"></div>
                <span>{{$t('services.hero.heroText2')}}</span>
              </span>
            </h1>
            <p class="text_white">{{$t('services.hero.p')}}</p>
          </div>
          <div class="w-50 image flex end">
            <img width="auto" height="auto" src="~static/img/services/services.png" alt="hero" />
          </div>
        </div>
        <div class="why_us bg_white flex center flex2">
          <div class="container w-90 flex column align_center">
            <div class="mb-4 c_head py-5 flex column align_start w-100">
              <h1 class="w-50 txt_left">{{$t('services.whyUs.h1')}}</h1>
              <p class="w-50 txt_left">{{$t('services.whyUs.p')}}</p>
            </div>
            <div class="voices flex align_center space_between w-90">
              <div class="flex align_center column">
                <div class="voice flex align_center center">
                  <img
                    width="auto"
                    height="auto"
                    src="~/static/img/services/precession.png"
                    :alt="$t('services.whyUs.precission')"
                  />
                </div>
                <h2 class="text_primary mt-3">{{$t('services.whyUs.precission')}}</h2>
              </div>
              <div class="flex align_center column">
                <div class="voice flex align_center center">
                  <img
                    width="auto"
                    height="auto"
                    src="~static/img/services/management.png"
                    :alt="$t('services.whyUs.team')"
                  />
                </div>
                <h2 class="text_primary mt-3">{{$t('services.whyUs.team')}}</h2>
              </div>
              <div class="flex align_center column">
                <div class="voice flex align_center center">
                  <img
                    width="auto"
                    height="auto"
                    src="~static/img/services/perfection.png"
                    :alt="$t('services.whyUs.perfection')"
                  />
                </div>
                <h2 class="text_primary mt-3">{{$t('services.whyUs.perfection')}}</h2>
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
          <h1>{{$t('services.promises.h1')}}</h1>
          <p>{{$t('services.promises.p')}}</p>
          <h2>
            <span>{{$t('services.promises.h3_1')}}</span>
            <span class="text_primary">{{$t('services.promises.h3_2')}}</span>
            <span>{{$t('services.promises.h3_3')}}</span>
          </h2>
        </div>
      </div>
      <div class="promises_list flex center">
        <div class="fill_height w-90 flex align_center space_between">
          <div class="promise flex align_center">
            <h1 class="hero_text text_white mr-3">5</h1>
            <h1 class="text_white" v-html="$t('services.promises.years')"></h1>
          </div>
          <div class="promise flex align_center">
            <h1 class="hero_text text_white mr-3">1K</h1>
            <h1 class="text_white" v-html="$t('services.promises.projects')"></h1>
          </div>
          <div class="promise flex align_center">
            <h1 class="hero_text text_white mr-3">2M</h1>
            <h1 class="text_white" v-html="$t('services.promises.cups')"></h1>
          </div>
        </div>
      </div>
    </section>
    <!-- Services section part -->
    <section class="services bg_white container py-5 flex center px-0">
      <div class="w-90">
        <div class="c_head flex start mb-5">
          <div class="w-50">
            <h1 class="txt_left">{{$t('services.knowledge.h1')}}</h1>
            <p class="txt_left">{{$t('services.knowledge.p')}}</p>
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
              >{{$t('services.knowledge.readMore')}}</router-link>
            </div>
          </div>
        </div>
        <div class="c_footer flex start my-3">
          <div class="w-70">
            <h1 class="txt_left">{{$t('services.knowledge.footer.h1')}}</h1>
            <p class="txt_left">{{$t('services.knowledge.footer.p')}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Brands section part -->
    <section class="brands container bg_white mb-5 flex center px-0">
      <div class="py-2 w-90">
        <div class="c_head my-5">
          <h1>{{$t('services.industries.h1')}}</h1>
          <p>{{$t('services.industries.p')}}</p>
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
        {
          image: "consultancy.svg",
          text: this.$t("services.industries.list.consultancy")
        },
        {
          image: "e-commerce.svg",
          text: this.$t("services.industries.list.ecomerce")
        },
        {
          image: "education.svg",
          text: this.$t("services.industries.list.educ")
        },
        {
          image: "fintech.svg",
          text: this.$t("services.industries.list.fintech")
        },
        {
          image: "healthcare.svg",
          text: this.$t("services.industries.list.health")
        },
        {
          image: "it-service.svg",
          text: this.$t("services.industries.list.it")
        },
        {
          image: "realestate.svg",
          text: this.$t("services.industries.list.realestate")
        },
        {
          image: "retail.svg",
          text: this.$t("services.industries.list.retail")
        },
        {
          image: "socialmedia.svg",
          text: this.$t("services.industries.list.social")
        },
        {
          image: "start-up.svg",
          text: this.$t("services.industries.list.startup")
        }
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
      prefetch: false,
      fetchPolicy: "cache-first",
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
  @media (max-width: 767px) {
    .c_head {
      h1,
      p {
        text-align: center;
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