<template>
  <div class="bg_lightGrey" v-if="!this.$apollo.loading">
    <!-- hero section -->
    <section class="hero relative flex align_center">
      <img
        src="~static/img/services/elipse_top.svg"
        class="absolute deco"
        alt="elipse top"
        id="elipseTop"
      />
      <img
        width="auto"
        height="auto"
        src="~static/img/services/path_top.svg"
        class="deco absolute"
        alt="path"
        id="pathLeft"
      />
      <img
        src="~static/img/services/elipse_bottom.svg"
        class="deco absolute"
        alt="elipse bottom"
        id="elipseBottom"
      />
      <div class="flex container align_center relative fill_height hero_content">
        <div class="desc w-50">
          <h1
            class="hero_text mb-3 text_white"
            v-html="deepFind(this.serviceBySlug, 'titleDisplay')"
          ></h1>
          <p class="my-5 text_white" v-html="deepFind(this.serviceBySlug, 'hero.description')"></p>
        </div>
        <div class="image flex1 flex align_center center">
          <img
            width="auto"
            height="auto"
            :src="api_url+deepFind(this.serviceBySlug, 'hero.image.url')"
            alt
          />
        </div>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Cycle section -->
    <section class="cycle">
      <div class="sub_services bg_white py-5 flex column container relative">
        <div class="intro w-50">
          <div class="top_part flex align_center end pr-5 mb-2">
            <h2 class="mr-3" v-tr>we provide</h2>
            <div class="separator bg_primary relative"></div>
          </div>
          <div class="title_part pr-5">
            <h1 class="txt_right" v-html="deepFind(this.serviceBySlug, 'cycle.title')"></h1>
            <p class="txt_right" v-html="deepFind(this.serviceBySlug, 'cycle.description')"></p>
          </div>
          <p
            class="h4 notice text_white bg_primary txt_right py-2 px-5 mt-4"
            v-html="deepFind(this.serviceBySlug, 'cycle.notice')"
          ></p>
        </div>
        <div class="body flex flex2 pa-5 wrap">
          <subService
            class="sub_cat my-3 pa-3"
            :sub="sub"
            v-for="(sub, index) in deepFind(this.serviceBySlug, 'cycle.subCategory')"
            :key="index"
          ></subService>
        </div>
        <div class="footer mx-5">
          <p v-html="deepFind(this.serviceBySlug, 'cycle.footer')"></p>
        </div>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Technology stack section -->
    <section class="tech_stack container">
      <div class="tech_desc">
        <h1 v-html="deepFind(this.serviceBySlug, 'techStack.title')"></h1>
        <p v-html="deepFind(this.serviceBySlug, 'techStack.description')"></p>
      </div>
      <div class="tech_content mt-5 flex align_center space_between wrap">
        <serviceTech
          :stack="stack"
          v-for="(stack, index) in deepFind(this.serviceBySlug, 'techStack.stacks')"
          :key="index"
          class="bg_white w-45 py-4 px-3 mb-3"
        ></serviceTech>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Technologies Section -->
    <section
      v-if="deepFind(serviceBySlug, 'technologies.length')"
      class="technologies container small_container flex align_center wrap"
    >
      <h2 class="flex1 fill_width txt_center mr-4" v-tr>Technologies</h2>
      <VueSlickCarousel v-bind="slickSettings" class="flex2 tech_list">
        <div
          class="tech bg_lightGrey flex align_center center ml-4"
          v-for="(tech, index) in deepFind(serviceBySlug, 'technologies')"
          :key="index"
          :title="tech.name"
        >
          <img width="auto" height="auto" :src="api_url+tech.image.url" :alt="tech.name" />
        </div>
      </VueSlickCarousel>
    </section>
    <!-- Our process -->
    <section class="our_process bg_white py-5">
      <div class="container">
        <div class="c_head txt_center">
          <h1>{{deepFind(this.serviceBySlug, 'process.title')}}</h1>
          <p>{{deepFind(this.serviceBySlug, 'process.description')}}</p>
        </div>
        <fStepper :steps="deepFind(this.serviceBySlug, 'process.steps')"></fStepper>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- why Ftm -->
    <section class="why_us bg_lightGrey py-5">
      <div class="container">
        <div class="c_head">
          <h2 v-tr>WHY-FTM?</h2>
          <h1 v-html="deepFind(this.serviceBySlug, 'advantages.title')"></h1>
          <p v-html="deepFind(this.serviceBySlug, 'advantages.description')"></p>
        </div>
        <!-- Show only on desktop -->
        <div class="advantages my-4 flex wrap center desktop">
          <advantage
            :advantage="advantage"
            v-for="(advantage, index) in deepFind(this.serviceBySlug, 'advantages.list')"
            :key="index"
            class="advantage mr-3 mt-3"
          ></advantage>
        </div>
        <!-- *********************************** -->
        <!-- Show only on mobile -->
        <VueSlickCarousel
          ref="advantageSlick"
          @afterChange="afterAdvantageChange"
          v-bind="advantagesSlickSettings"
          v-if="deepFind(this.serviceBySlug, 'advantages.list.length')"
          class="advantages my-4 flex wrap center mobile"
        >
          <externalAdvantage
            :advantage="advantage"
            v-for="(advantage, index) in deepFind(this.serviceBySlug, 'advantages.list')"
            :key="index"
            class="advantage mr-3 mt-3"
            :selected="selectedAdv==index"
          ></externalAdvantage>

          <template #customPaging>
            <div class="custom-dot my-2"></div>
          </template>
        </VueSlickCarousel>
        <!-- *********************************** -->
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Packages Section -->
    <section class="packages flex column">
      <div class="container flex align_center fill_height flex2">
        <div class="package flex space_between">
          <div class="pack_standards py-5 w-45 flex column space_between">
            <div class="standards_head">
              <h1
                class="hero_text text_white desktop"
              >{{deepFind(serviceBySlug, 'packages.0.standards.title')}}</h1>
              <p class="text_white">{{deepFind(serviceBySlug, 'packages.0.standards.description')}}</p>
            </div>
            <div class="standards_list">
              <div
                class="flex"
                v-for="(standard, index) in deepFind(serviceBySlug, 'packages.0.standards.standardsList')"
                :key="index"
              >
                <img width="auto" height="auto" src="~static/img/icons/tick.svg" alt="tick" />
                <p class="h4 text_white ml-3">{{standard.text}}</p>
              </div>
            </div>
            <div class="standards_footer">
              <fBtn link :to="localePath('/contact')" class="talk_btn">
                <h3 class="text_white">Let's talk</h3>
              </fBtn>
            </div>
          </div>
          <div class="pack_details w-35">
            <h1
              class="hero_text text_white pb-3 txt_center mobile"
            >{{deepFind(serviceBySlug, 'packages.0.standards.title')}}</h1>
            <div class="pack_holder pa-3 flex column">
              <div class="pack_head flex align_center pb-2">
                <img width="auto" height="auto" src="~static/img/icons/packBadge.svg" alt="tick" />
                <h2 class="ml-3 text_white">{{deepFind(serviceBySlug, 'packages.0.details.title')}}</h2>
              </div>
              <div class="pack_body flex1 py-5">
                <p
                  class="h4 text_white my-3"
                  v-html="deepFind(serviceBySlug, 'packages.0.details.descriptionHtml')"
                ></p>

                <div class="features_list py-2 px-3 bg_white mt-5 scrollable">
                  <p
                    class="h4"
                    v-for="(feature, index) in deepFind(serviceBySlug, 'packages.0.features')"
                    :key="index"
                    v-html="feature.text"
                  ></p>
                </div>
              </div>
              <div class="pack_footer">
                <div class="more_details flex space_between align_center">
                  <p
                    class="h4 text_white"
                    v-html="deepFind(serviceBySlug, 'packages.0.details.delivery')"
                  ></p>
                  <p
                    class="h4 text_white"
                    v-html="deepFind(serviceBySlug, 'packages.0.details.revisions')"
                  ></p>
                </div>
                <fBtn
                  link
                  external
                  to="https://fb.com/book/FictionToMission/"
                  class="fill_width mt-4 mb-3 d_block bg_white flex align_center center text_text1"
                >
                  <h3>
                    (
                    <span v-html="deepFind(serviceBySlug, 'packages.0.details.price')"></span>) Continue
                  </h3>
                </fBtn>
                <router-link tag="div" :to="localePath('/contact')" class="a text_white txt_center">
                  <u v-tr>Do you have any special requirements?</u>
                </router-link>
              </div>
            </div>
            <nuxt-link
              :to="localePath('/projects')"
              tag="h3"
              class="mt-3 text_white pointer txt_right"
              v-tr
            >View Samples</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Faq's section -->
    <section class="faqs py-5 bg_white">
      <div class="container" itemtype="https://schema.org/FAQPage">
        <h1 class="txt_right mb-4" v-tr>Frequently Asked Questions</h1>
        <faq
          class="faq bg_lightGrey pa-2 my-4"
          :faq="faq"
          v-for="(faq, index) in deepFind(serviceBySlug, 'faqs')"
          :key="index"
          :expanded="expanded==index"
          @expand="expanded==index?expanded=null:expanded=index"
        ></faq>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Related Services -->
    <section
      class="related_services bg_white py-4"
      v-if=" deepFind(serviceBySlug, 'services.length')"
    >
      <div class="container">
        <div class="c_head">
          <h1 class="mb-2" v-tr>We offer you more</h1>
          <h2 v-tr>We can help you in many other ways</h2>
        </div>
        <div class="flex align_center wrap space_between py-3 my-3">
          <serviceCard
            v-for="(service, index) in deepFind(serviceBySlug, 'services')"
            :key="index"
            class="service_card pointer pa-2 my-2"
            :size="114"
            :title="service.titleDisplay"
            :desc="service.description"
            :icon="service.icon.url"
            :iconHover="service.iconHover.url"
            :slug="service.slug"
            :alwaysActive="true"
          ></serviceCard>
        </div>
      </div>
    </section>
    <!-- ********************************* -->
  </div>
  <div v-else class="bg_lightGrey loading_page flex align_center center">
    <div class="load_spinner open_spinner"></div>
  </div>
</template>
<script>
import externalAdvantage from "~/components/ui/advantage";
import VueSlickCarousel from "vue-slick-carousel";
import serviceQuery from "~/apollo/queries/service/services";

export default {
  head() {
    return {
      title: this.deepFind(this.serviceBySlug, "titleDisplay"),
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json"
        },
        {
          innerHTML: JSON.stringify(this.structuredProductData),
          type: "application/ld+json"
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.deepFind(this.serviceBySlug, "description")
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.deepFind(this.serviceBySlug, "keywords")
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            this.api_url + this.deepFind(this.serviceBySlug, "hero.image.url")
        }
      ]
    };
  },
  components: { VueSlickCarousel, externalAdvantage },

  computed: {
    serviceBySlug() {
      return this.deepFind(this.services, "0");
    },
    structuredData() {
      let mainEntity = [];
      let faqs = this.deepFind(this.serviceBySlug, "faqs");
      if (faqs) {
        mainEntity = faqs.map(faq => {
          return {
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          };
        });
      }
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: mainEntity
      };
    },
    structuredProductData() {
      return {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: this.deepFind(this.serviceBySlug, "titleDisplay"),
        image:
          this.api_url + this.deepFind(this.serviceBySlug, "hero.image.url"),
        description: this.deepFind(this.serviceBySlug, "hero.description"),
        brand: "FTM"
      };
    }
  },
  data() {
    return {
      expanded: null,
      selectedAdv: 0,
      slickSettings: {
        dots: true,
        infinite: true,

        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1640,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false
            }
          }
        ]
      },
      advantagesSlickSettings: {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]
      }
    };
  },
  apollo: {
    services: {
      prefetch: true,
      query: serviceQuery,
      variables() {
        return { slug: this.$route.params.name, locale: this.$i18n.locale };
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
  },
  methods: {
    afterAdvantageChange(newVal) {
      this.selectedAdv = newVal;
    }
  }
};
</script>
<style lang="scss" scoped>
.rtl {
  .cycle {
    .sub_services {
      .intro {
        align-self: flex-start;
        .top_part {
          justify-content: start;
        }
      }
    }
  }
}
//hero part
.hero {
  min-height: 40rem;
  overflow: hidden;
  background: linear-gradient(
    -90deg,
    rgba(51, 51, 51, 1) 0%,
    rgba(135, 84, 84, 1) 100%
  );
  .deco {
    z-index: 1;
  }
  #pathLeft {
    left: calc((100% - 2130px) / 2);
    top: -160px;
  }
  #elipseTop {
    right: calc((100% - 1920px) / 2);
    top: -110%;
    animation: bounce 3s infinite ease-in-out;
  }
  #elipseBottom {
    left: calc((100% - 1920px) / 2);
    bottom: -90%;
  }
  .hero_content {
    z-index: 2;
  }
  .image {
    perspective: 800px;
    img {
      animation: bounce 3s infinite ease-in-out;
    }
  }
  @media (max-width: 1641px) {
    #pathLeft {
      left: calc((100% - 1780px) / 2);
      top: -300px;
    }
    #elipseBottom {
      left: calc((100% - 1700px) / 2);
      bottom: -100%;
    }
    #elipseTop {
      right: calc((100% - 1780px) / 2);
      top: -120%;
    }
  }
  @media (max-width: 1024px) {
    #pathLeft {
      width: 600px;
      height: auto;
      left: calc((100% - 960px) / 2);
      top: -90px;
    }
    #elipseBottom {
      width: 500px;
      height: auto;

      left: calc((100% - 850px) / 2);
      bottom: -40%;
    }
    #elipseTop {
      right: calc((100% - 1150px) / 2);
      top: -56%;
      width: 500px;
      height: auto;
    }
    .desc {
      width: 70% !important;
    }
    .hero_text {
      font-size: 2.6rem;
    }
    .image {
      flex: auto;
      img {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    min-height: 65rem;
    #pathLeft {
      width: 400px;
      height: auto;
      left: calc((100% - 690px) / 2);
      top: -70px;
    }
    #elipseBottom {
      width: 500px;
      height: auto;

      left: calc((100% - 500px) / 2);
      bottom: -20%;
    }
    #elipseTop {
      right: calc((100% - 1020px) / 2);
      top: -27%;
      width: 500px;
      height: auto;
    }
    .hero_content {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      .desc {
        width: 100% !important;
      }
      .hero_text {
        text-align: center;
        font-size: 1.8rem;
        .br {
          display: none;
        }
      }
      p {
        margin: 1rem 0 !important;
        text-align: center;
      }
      .image {
        flex: auto;
        img {
          max-width: 100%;
        }
      }
    }
  }
  @media (max-width: 480px) {
    @media (max-height: 640px) {
      min-height: 640px;
    }
    min-height: 100vh;
    .image {
      flex: auto;
      img {
        max-width: 90% !important;
      }
    }
  }
}
//*************** */
//Process
.cycle {
  min-height: 100vh;
  .separator {
    height: 4px;
    width: 1.5rem;
    border-radius: 15px;
  }
  .sub_services {
    z-index: 3;
    top: -6rem;
    border-radius: 1rem;
    .intro {
      align-self: flex-end;
      .notice {
        margin-right: -1rem;
      }
    }
    .body {
      .sub_cat {
        max-width: 33%;
        height: auto;
      }
    }
  }
  @media (max-width: 1200px) {
    .intro {
      width: 70% !important;
    }
  }
  @media (max-width: 1024px) {
    .intro {
      width: 80% !important;
    }
    .body {
      justify-content: center;
      .sub_cat {
        max-width: 50% !important;
        justify-content: center;
      }
    }
  }
  @media (max-width: 767px) {
    .intro {
      width: 100% !important;
      .top_part {
        flex-direction: row-reverse;
        h2 {
          margin-left: 1rem;
        }
      }
      .title_part {
        padding: 0 !important;
        h1 {
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
      .notice {
        text-align: center;
      }
    }
    .body {
      justify-content: center;
      text-align: center;
      padding: 1.5rem !important;
      .sub_cat {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !important;
        margin-bottom: 1rem;
        max-width: 100% !important;
      }
    }
    .footer {
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    .notice {
      margin-right: 0 !important;
      padding: 1rem !important;
    }
    .body {
      padding: 1rem !important;
      .sub_cat {
        max-width: 100%;
        height: auto;
      }
    }
    .footer {
      margin: 0 !important;
    }
  }
}
//Tech stack part

.tech_stack {
  margin-bottom: 6rem;

  .tech_content {
    .tech_card {
      border-radius: 5px;
      .tech_image {
        img {
          margin: 0 5%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .tech_card {
      width: 100% !important;
    }
  }
}
//Technologies Part
.technologies {
  min-height: 300px;
  .tech_list {
    overflow: hidden;
    .tech {
      height: 9rem !important;
      width: 9rem !important;
      display: flex !important;
      border-radius: 50%;
      flex-shrink: 0;
      img {
        max-width: 80%;
        max-height: 50%;
      }
    }
  }
  @media (max-width: 1640px) {
    min-height: 220px;
    .tech_list {
      .tech {
        height: 7rem !important;
        width: 7rem !important;
      }
    }
  }
  @media (max-width: 767px) {
    &h2 {
      flex: 2;
    }
    .tech_list {
      flex: auto;
    }
  }
}
//********************* */
//Our process part

.our_process {
  min-height: 48.75rem;
}
//********************* */
//Why FTM
.why_us {
  min-height: auto;
  .advantage {
    height: 13.75rem;
    width: 32.23%;
    border-radius: 5px;
  }
  .custom-arrow {
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !important;
    background: map-get($map: $colors, $key: white);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    &::before {
      display: none !important;
    }
    &.next_arrow {
      right: -3.4rem;
      @media (max-width: 480px) {
        right: calc(5% - 1.4rem);
      }
    }
    &.prev_arrow {
      left: -3.4rem;
      @media (max-width: 480px) {
        left: calc(5% - 1.4rem);
      }
    }
  }
  .custom-dot {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 3px solid map-get($map: $colors, $key: white);
  }
  .slick-active {
    .custom-dot {
      background: map-get($map: $colors, $key: primary);
    }
  }
  @media (max-width: 1641px) {
    .advantage {
      width: 48%;
    }
  }
  @media (max-width: 1024px) {
    min-height: auto;
    .advantage {
      width: 98%;
    }
  }
  @media (max-width: 767px) {
    .advantage {
      height: 22rem;
    }
  }
  @media (max-width: 480px) {
    .c_head {
      h1 {
        font-size: 1.6rem !important;
      }
    }
  }
}
//********************* */
//Packages part
.packages {
  padding-top: 3rem;
  padding-bottom: 3rem;
  min-height: 100vh;
  background: linear-gradient(#333 15.06%, #875454 100%);
  .package {
    width: 100%;
    .talk_btn {
      background: transparent;
      border: 1px solid map-get($map: $colors, $key: white);
      min-width: 16.25rem;
    }
    .pack_holder {
      border: 1px solid map-get($map: $colors, $key: white);
      border-radius: 1rem;
      .pack_head {
        border-bottom: 1px solid map-get($map: $colors, $key: white);
      }
    }
    .features_list {
      overflow-y: auto;
      max-height: 200px;
    }
  }
  @media (max-width: 1200px) {
    .pack_standards {
      width: 52% !important;
    }
    .pack_details {
      width: 45% !important;
    }
  }
  @media (max-width: 1024px) {
    .package {
      flex-wrap: wrap;
      .pack_standards {
        order: 2;
        width: 100% !important;
        text-align: center;
        .hero_text {
          font-size: 2.8rem;
        }
        .standards_list {
          .flex {
          }
        }
        .talk_btn {
          width: 100%;
          margin-top: 1.5rem;
        }
      }
      .pack_details {
        width: 100% !important;
      }
    }
  }
}
//********************* */
//Faqs part
.faqs {
  padding-top: 5rem !important;
  min-height: 50vh;
  .faq {
    &.expanded {
      .expand_arrow {
        background: map-get($map: $colors, $key: white) !important;

        .arrow {
          transform: rotate(0deg);
        }
      }
    }
    border-radius: 7px;
    .expand_arrow {
      border-radius: 5px;
      .arrow {
        transition: 0.5s all;
        transform: rotate(180deg);
      }
    }
    .answer {
      transition: 0.5s all;
      min-height: 6rem;
    }
  }
}
//********************** */
//related Services
.related_services {
  padding-bottom: 5rem !important;
  .service_card {
    @media (max-width: 1641px) {
      width: 370px;
    }
    @media (max-width: 1024px) {
      transition: none;
      margin: 1rem auto;
      max-width: 450px;
      min-height: 450px;
    }
    @media (max-width: 767px) {
      max-width: 390px;
    }
    @media (max-width: 480px) {
      max-width: 90%;
      min-height: 300px;
    }
    width: 32.23%;
    height: 340px;
    border-radius: 5px;
    transition: 0.5s all;
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
@keyframes smothRotation {
  0% {
    transform: rotateZ(5deg);
  }
  50% {
    transform: rotateZ(-2deg);
  }
  100% {
    transform: rotateZ(5deg);
  }
}
</style>