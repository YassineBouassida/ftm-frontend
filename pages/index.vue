<template>
  <div class="home" v-if="!this.$apollo.loading">
    <!-- Hero section -->
    <section class="hero_container">
      <div class="hero flex container align_center">
        <div class="desc">
          <h1 class="hero_text mb-3 desktop">
            {{$t('home.hero.heroText1')}}
            <br />
            {{$t('home.hero.heroText2')}}
            <br />
            {{$t('home.hero.heroText3')}}
          </h1>
          <p class="my-5">{{$t('home.hero.h3')}}</p>
          <h2 class="my-5">{{$t('home.hero.h2')}}</h2>
          <div class="flex ml-5 call_to_action_container">
            <fBtn
              link
              external
              to="https://fb.com/book/FictionToMission/"
              class="w-60 call_to_action bg_primary flex align_center center f_link text_white"
            >
              <h3 class="text_white">{{$t('home.hero.btn')}}</h3>
            </fBtn>
          </div>
        </div>
        <div>
          <h1 class="hero_text mb-3 mobile">
            {{$t('home.hero.heroText1')}}
            <br />
            {{$t('home.hero.heroText2')}}
          </h1>
          <hero class="image"></hero>
        </div>
      </div>
    </section>

    <!-- Services section -->
    <section class="services bg_white" id="services">
      <div class="container flex column">
        <div class="c_head txt_center">
          <h1>{{$t('home.services.h1')}}</h1>
          <p>{{$t('home.services.p')}}</p>
        </div>
        <fServicesCarousel :services="services" v-if="deepFind(services,'length')"></fServicesCarousel>
      </div>
    </section>

    <!-- About us section -->
    <section class="about bg_lightGrey">
      <div class="container">
        <div class="c_head txt_center">
          <h1>{{$t('home.about.h1')}}</h1>
          <p>{{$t('home.about.p')}}</p>
        </div>
        <div class="about_table flex">
          <div class="w-50 p1">
            <div class="flex h-50">
              <div class="w-50 h-100 p11 part bg_primary">
                <fiveStars class="part_svg"></fiveStars>
              </div>
              <div class="w-50 h-100 p12 part bg_white pa-3 tablette_and_down">
                <div class="text">
                  <h2>{{$t('home.about.research.h2')}}</h2>
                  <p class="subheading">{{$t('home.about.research.p')}}</p>
                </div>
              </div>
              <!-- Only on small mobiles -->
              <div class="w-50 h-100 p13 part bg_white pa-3 tablette_and_up">
                <div class="text">
                  <h2>{{$t('home.about.exp.h2')}}</h2>
                  <p class="subheading">{{$t('home.about.exp.p')}}</p>
                </div>
              </div>
              <!-- ********************* -->
            </div>
            <div class="flex h-50">
              <div class="w-50 h-100 p13 part bg_white pa-3 tablette_and_down">
                <div class="text">
                  <h2>{{$t('home.about.exp.h2')}}</h2>
                  <p class="subheading">{{$t('home.about.exp.p')}}</p>
                </div>
              </div>
              <!-- Only on small mobiles -->
              <div class="w-50 h-100 p12 part bg_white pa-3 tablette_and_up">
                <div class="text">
                  <h2>{{$t('home.about.research.h2')}}</h2>
                  <p class="subheading">{{$t('home.about.research.p')}}</p>
                </div>
              </div>
              <!-- ********************* -->
              <div class="w-50 h-100 p14 part bg_text1">
                <book class="part_svg"></book>
              </div>
            </div>
          </div>
          <div class="w-50 p2">
            <div class="fill_width h-80 p21 part bg_primary">
              <presenter class="part_svg"></presenter>
            </div>
            <div class="fill_width p22 h-20 part bg_white pa-3">
              <p class="subheading">{{$t('home.about.act.p')}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Cases section -->
    <section class="cases bg_white">
      <div class="container flex column small_container">
        <div class="c_head txt_center">
          <h1>{{$t('home.cases.h1')}}</h1>
          <p>{{$t('home.cases.p')}}</p>
        </div>
        <!-- First Case  -->

        <div class="case txt_right flex1 flex align_center space_between" id="case1">
          <div class="text_side mr-4">
            <div class="desc">
              <h2 class="text_primary mb-3">{{$t('home.cases.not.h2')}}</h2>
              <p class="h4">{{$t('home.cases.not.p')}}</p>
            </div>
            <div class="desktop notice bg_lightGrey pa-3 flex align_center">
              <p class="subheading pr-4">{{$t('home.cases.not.notice')}}</p>
              <img width="auto" height="auto" src="~static/img/notice.png" alt="notice" />
            </div>
          </div>
          <div>
            <img
              width="auto"
              height="auto"
              src="~static/img/case1.png"
              alt="no website"
              class="fill_width img"
            />
          </div>
        </div>
        <!-- Second Case  -->
        <div class="case flex flex2 txt_left align_center center" id="case2">
          <div>
            <img
              width="auto"
              height="auto"
              src="~static/img/case2.png"
              alt="no website"
              class="fill_width img"
            />
          </div>
          <div class="text_side ml-4">
            <div class="desc">
              <h2 class="text_primary mb-3">{{$t('home.cases.yes.h2')}}</h2>
              <p class="h4">{{$t('home.cases.yes.p')}}</p>
            </div>
            <div class="desktop notice bg_lightGrey pa-3 flex align_center">
              <img width="auto" height="auto" src="~static/img/notice.png" alt="notice" />
              <p class="subheading pl-4">{{$t('home.cases.yes.notice')}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How we do it section -->
    <section class="howItWorks bg_lightGrey">
      <div class="container">
        <div class="c_head txt_center">
          <h2>{{$t('home.how.h2')}}</h2>
          <h1 class="my-4">{{deepFind(pages,'0.Section.0.title')}}</h1>
          <p>{{deepFind(pages,'0.Section.0.description')}}</p>
        </div>
        <fStepper
          :steps="deepFind(pages,'0.Section.0.steps')"
          v-if="deepFind(pages,'0.Section.0.steps')"
        ></fStepper>
      </div>
    </section>
    <!-- Idea To Solution -->
    <section class="ideaToSolution relative flex column">
      <ideaToSolution class="absolute background_img"></ideaToSolution>
      <div class="spark container relative flex2">
        <div class="w-50 absolute itsDesc">
          <h1 class="text_white mb-4">{{$t('home.spark.h1')}}</h1>
          <h2 class="text_white mb-3">{{$t('home.spark.h2')}}</h2>
          <p class="h4 text_white">{{$t('home.spark.p')}}</p>
        </div>
        <div class="absolute features flex column align_center">
          <div
            class="flex column align_center"
            v-if="i==selectedIdea"
            v-for="(idea, i) in ideas"
            :key="i"
          >
            <img width="auto" height="auto" src="~static/img/key.png" alt="key" />
            <h3 class="text_white my-2 mt-4">{{idea.title}}</h3>
            <p class="h4 px-2 text_white txt_center my-2">{{idea.desc}}</p>
          </div>
          <div class="indicators flex align_center center mt-3">
            <span
              :class="{active:selectedIdea==index}"
              class="mr-2 pointer"
              v-for="(indicator, index) in ideas"
              :key="index"
              @click="selectedIdea=index"
            ></span>
          </div>
        </div>
      </div>
    </section>
    <!-- Technologies Section -->
    <section class="technologies container small_container flex align_center wrap">
      <h2 class="flex1 fill_width txt_center mr-4">{{$t('home.tech.h2')}}</h2>
      <VueSlickCarousel
        v-bind="slickSettings"
        v-if="deepFind(technologies,'length')"
        class="flex2 tech_list"
      >
        <div
          class="tech bg_lightGrey flex align_center center ml-4"
          v-for="(tech, index) in technologies"
          :key="index"
          :title="tech.title"
        >
          <img
            width="auto"
            height="auto"
            :src="require(`~/static/img/icons/techs/${tech.icon}`)"
            :alt="tech.title"
          />
        </div>
      </VueSlickCarousel>
    </section>
    <!-- Projects Section -->
    <section
      v-if="deepFind(cases,'length')"
      class="projects bg_lightGrey relative flex"
      id="projects"
    >
      <div class="vertical_name flex align_baseline">
        <h1 class="text_white">{{$t('home.portfolio.big')}}</h1>
      </div>
      <div class="projects_body">
        <div class="project_head w-50 mb-5">
          <h1>{{$t('home.portfolio.h1')}}</h1>
          <p class="px-2">{{$t('home.portfolio.p')}}</p>
        </div>
        <fProjects ref="projects" @projectChanged="selectedProject=$event" :projects="cases"></fProjects>
        <div class="project_footer flex mt-2">
          <div class="empty flex2"></div>
          <div class="mr-5 footer_desc flex align_center space_between flex1">
            <h3>{{$t('home.portfolio.testi.h3')}}</h3>
            <div class="indicators flex align_center center">
              <span
                @click="changeProjectSlick(index)"
                :class="{active:selectedProject==index}"
                class="mr-2 pointer"
                v-for="(project, index) in cases"
                :key="index"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="bg_lightGrey loading_page flex align_center center">
    <div class="load_spinner open_spinner"></div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import servicesQuery from "~/apollo/queries/home/services";
import pageQuery from "~/apollo/queries/page/page";
import casesQuery from "~/apollo/queries/page/cases";

export default {
  name: "homePage",
  components: { VueSlickCarousel },

  head() {
    return {
      title: this.deepFind(this.pages, "0.seo.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.deepFind(this.pages, "0.seo.description")
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.deepFind(this.pages, "0.seo.keywords")
        }
      ]
    };
  },
  apollo: {
    services: {
      fetchPolicy: "no-cache",
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
    },
    pages: {
      fetchPolicy: "no-cache",
      prefetch: true,
      query: pageQuery,
      variables() {
        return { slug: "home", locale: this.$i18n.locale };
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
    },
    cases: {
      prefetch: true,
      query: casesQuery,
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
  },
  data() {
    return {
      selectedTab: 0,
      activeStep: 0,
      selectedIdea: 0,
      selectedProject: 0,

      ideas: [
        {
          title: this.$t("turnKey"),
          desc: this.$t(
            "Ready-to-go, full package solutions which are easily deployed or implemented in your business. They are quickly built and they meet most of your needs with lower risks."
          )
        },
        {
          title: this.$t("From scratch"),
          desc: this.$t(
            "Personalized solution for your business through new technologies just to provide a cohesive solution to a your problem."
          )
        }
      ],
      technologies: [
        { title: "Angular", icon: "angular.svg" },
        { title: "CSS", icon: "css.svg" },
        { title: "Flutter", icon: "flutter.svg" },
        { title: "HTML", icon: "html.svg" },
        { title: "Javascript", icon: "javascript.svg" },
        { title: "Laravel", icon: "laravel.svg" },
        { title: "Node js", icon: "nodejs.svg" },
        { title: "PHP", icon: "php.svg" },
        { title: "React js", icon: "react.svg" },
        { title: "Vue js", icon: "vuejs.svg" }
      ],
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

      projects: [1, 2, 3]
    };
  },
  methods: {
    beforeServiceSlideChange(old, newVal) {
      this.activeStep = newVal;
    },

    changeProjectSlick(index) {
      this.$refs["projects"].$refs["projectSlick"].goTo(index);
    }
  },
  mounted() {
    // console.log(this.services);
    // console.log(this.pages);
    // console.log(this.$i18n.localeProperties.dir);

    setTimeout(() => {
      this.projects = [{ id: 1 }, { id: 2 }, { id: 3 }];
    }, 2000);
  }
};
</script>
<style lang="scss" scoped>
.small_container {
  @media (min-width: 1641px) {
    padding-right: 7.5rem;
    padding-left: 7.5rem;
  }
}
section {
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (max-width: 1024px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
.tablette_and_down {
  @media (max-width: 767px) {
    display: none !important;
  }
}
.tablette_and_up {
  @media (min-width: 767px) {
    display: none !important;
  }
}
//**Hero */
.hero_container {
  padding-top: 0rem;
  padding-bottom: 0rem;
  background: linear-gradient(#fff 0%, #f2f2f2 100%);
  .hero {
    max-height: 1000px;
    @media (max-height: 900px) {
      min-height: 600px;
      height: calc(100vh - 80px);
    }
    min-height: calc(100vh - 80px);
    .image {
      flex: 2 1 0;
      &::v-deep svg {
        width: 100%;
      }
    }
    .desc {
      min-width: 500px;
      flex: 1 0 0;
      @media (max-width: 1640px) {
        min-width: 430px;
        h1 {
          font-size: 2.5rem;
        }
        @media (max-width: 480px) {
          min-width: auto;
        }
      }
    }
    .call_to_action {
      min-width: 75%;
      margin-top: 5rem;
    }
    @media (max-width: 1024px) {
      max-height: auto;
      height: auto;
      min-height: calc(100vh - 60px);
      flex-wrap: wrap;
      flex-direction: column-reverse;
      & > div {
        width: 100%;
        flex: auto !important;
      }
      h1.mobile {
        font-size: 2.5rem;
        text-align: center;
      }
      .image {
        &::v-deep svg {
          height: auto;
        }
      }
      .desc {
        text-align: center;
        p,
        h2 {
          margin: 1rem 0 !important;
        }
      }
      .call_to_action_container {
        justify-content: center;
        margin-left: 0 !important;
        .call_to_action {
          margin-top: 1rem;
        }
      }
    }
    @media (max-width: 767px) {
      min-height: auto;
    }
  }
  @media (max-width: 1024px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

//**Cases */
.cases {
  min-height: auto;

  .c_head {
    width: 50rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 6rem;
  }

  .case {
    .img {
      max-width: 540px;
    }
    & > div {
      flex: 1 1 0;
    }
    .notice {
      margin-top: 5rem;
      border-radius: 12px;
    }
  }
  @media (max-width: 1024px) {
    min-height: auto;
    .c_head {
      width: 90%;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 2rem;
    }
    .text_side {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    #case1 {
      .text_side {
        margin-right: 1rem !important;
      }
    }
    #case2 {
      .text_side {
        margin-left: 1rem !important;
      }
    }
  }
  @media (max-width: 767px) {
    min-height: 100vh;
    .case {
      flex-wrap: wrap;
      & > div {
        flex: auto;
        text-align: center !important;
        margin-bottom: 2rem;
      }
      h2 {
        color: map-get($map: $colors, $key: text1) !important;
      }
      &#case1 {
        flex-direction: column-reverse;
      }
    }
    #case1 {
      .text_side {
        margin-right: 0rem !important;
      }
    }
    #case2 {
      .text_side {
        margin-left: 0rem !important;
      }
    }
  }
}
// About Us part
.about {
  min-height: 100vh;
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
  .c_head {
    width: 50rem;
    margin: auto;
    margin-bottom: 6rem;
  }
  .about_table {
    height: 520px;
    .w-50,
    .h-50 {
      transition: 0.5s all;
    }
  }
  .part {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .part_svg {
    width: 90%;
    &::v-deep svg {
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    .c_head {
      width: 90%;
      margin: auto;
      margin-bottom: 2rem;
    }
    .about_table {
      height: auto;
      flex-wrap: wrap;
      .p1,
      .p2 {
        width: 100% !important;
      }
    }
  }
  @media (max-width: 767px) {
    .part {
      width: 100% !important;
    }
    .about_table {
      flex-direction: column;
      .p1,
      .p2 {
        margin-bottom: 1rem;
        & > .flex {
          margin-top: 1rem;

          flex-wrap: wrap;
        }
      }
    }
  }
}
// Service part
.services {
  min-height: 100vh;
  @media (min-height: 1080px) {
    min-height: 1080px;
  }

  @media (max-width: 1024px) {
    min-height: auto;
  }
}
//How it works part
.howItWorks {
  min-height: auto;
  @media (min-height: 1080px) {
    min-height: auto;
  }
  .c_head {
    width: 50rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 3rem;
  }

  .step {
    position: relative;
    display: flex !important;
    .circle_deco {
      background: transparent;
      position: absolute;
      top: 5%;
      right: 5%;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      border: 3px solid map-get($map: $colors, $key: primary);
    }
  }
  .separator {
    height: 4px;
    width: 1.5rem;
    border-radius: 15px;
  }
  .fixing_step {
    width: 5rem;
    height: 5rem;
    margin-left: 0.8rem;
  }
  .step_btn {
    @media (max-width: 1640px) {
      width: 5rem;
      height: 5rem;
    }
    width: 8.75rem;
    height: 8.75rem;
    border-radius: 50%;
    img {
      max-width: 70%;
      max-height: 50%;
    }
  }

  .steps_body {
    max-width: 1080px;
    margin-right: auto;
    margin-left: auto;
    .step_content {
      border-radius: 5px;
      .divider {
        height: 1px;
        margin-right: -24px;
        margin-left: -24px;
      }
      .tab {
        width: 16.25rem;
      }
      .tommpon {
        border-radius: 50%;
        width: 5.875rem;
        height: 5.875rem;
        flex-shrink: 0;
      }
    }
  }
  @media (max-width: 1024px) {
    .c_head {
      width: 90%;
      margin: auto;
      margin-bottom: 2rem;
    }
    .step_btn {
      width: 7rem;
      height: 7rem;
      box-shadow: none;
    }
    .custom-arrow {
      top: calc(50% - 1.5rem);
      z-index: 99999;
      &.next_arrow {
        right: calc(50% - 8.5rem);
      }
      &.prev_arrow {
        left: calc(50% - 8.5rem);
      }
    }
  }
  @media (max-width: 767px) {
    .skills_toolbar {
      flex-wrap: wrap;
      .tab {
        width: 100% !important;
        margin-bottom: 0.5rem;
      }
    }
    .tommpon {
      display: none !important;
    }
  }
}
//Idea to solution part
.ideaToSolution {
  .background_img {
    top: -40%;
    left: -10%;
    height: 140%;
    min-width: 120%;
  }
  overflow: hidden;
  min-height: 100vh;
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
  background: linear-gradient(#333 15.1%, #875454 100%);
  background-position: center center !important;
  background-size: cover !important;
  .features {
    width: 45rem;
    left: calc(50% - 22.5rem);
    bottom: 6rem;
    @media (max-height: 850px) {
      bottom: 2rem;
      @media (max-width: 1200px) {
        bottom: 0rem;
        img {
          height: 6rem;
        }
      }
    }
    .indicators span {
      height: 0.875rem;
      width: 0.875rem;
      border-radius: 50%;
      border: 1px solid map-get($map: $colors, $key: white);
      &.active {
        background: map-get($map: $colors, $key: white);
      }
    }
  }
  @media (max-width: 767px) {
    background: linear-gradient(#333 15.1%, #875454 100%);
    .itsDesc {
      width: calc(100% - 2rem) !important;
    }
    .features {
      width: 100%;
      margin: auto;
      left: 0;
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
//projects part
.projects {
  min-height: 620px;

  padding-right: 8.75rem;
  @media (max-width: 1640px) {
    padding-bottom: 4rem;
  }
  .vertical_name {
    align-items: end;
    width: 8.75rem;
    h1 {
      @media (max-height: 950px) {
        font-size: 5.25rem;
      }
      font-size: 5.75rem;
      transform: rotate(-90deg);
      width: 100%;

      display: flex;
      width: 100%;
    }
  }
  .projects_body {
    width: calc(100% - 8.75rem);
    flex: auto;
  }
  .projects_list {
    overflow: hidden;
  }
  ::v-deep .slick-list {
    width: 100%;
  }
  .project_footer {
    position: relative;
    top: 2rem;
    .empty {
      max-width: 60rem;
    }
    .footer_desc {
      min-width: 600px;
    }
    .indicators span {
      display: block;
      height: 0.875rem;
      width: 0.875rem;
      border-radius: 50%;
      border: 1px solid map-get($map: $colors, $key: white);
      background: map-get($map: $colors, $key: white);
      &.active {
        background: map-get($map: $colors, $key: primary);
      }
    }
  }
  @media (max-width: 1200px) {
    .vertical_name {
      position: relative;
      bottom: 100px;
    }

    .project_footer {
      top: -80px;
      padding: 0 1.5rem;
      .empty {
        display: none !important;
      }
      .footer_desc {
        min-width: 100%;
        flex: 0;

        margin-right: 0% !important
        ;
      }
    }
  }
  @media (max-width: 767px) {
    padding-right: calc(50% - 220px);
    padding-left: calc(50% - 220px);

    .vertical_name {
      display: none !important;
    }
    .project_head {
      width: 100% !important;
      text-align: center;
    }

    .project_footer {
      top: -40px;
    }
  }
}
.rtl {
  #case1 {
    .text_side {
      margin-left: 1.5rem !important;
    }
  }
  #case2 {
    .text_side {
      margin-right: 1.5rem !important;
    }
  }
  .projects {
    padding-left: 8.75rem;
    padding-right: 0;
    .vertical_name {
      align-items: center;
    }
  }
}
</style>
