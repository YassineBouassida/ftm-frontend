<template>
  <div v-if="!this.$apollo.loading">
    <!-- hero section  -->
    <section class="hero">
      <div class="container">
        <h1 class="text_white txt_center">{{$t('samples.h1')}}</h1>
        <h2 class="text_white txt_center" >{{$t('samples.h2')}}</h2>
      </div>
    </section>
    <!-- Projects list section  -->
    <section class="projects_list bg_white py-5">
      <div class="container">
        <div class="c_head">
          <h1 >{{$t('samples.projectList.h1')}}</h1>
          <p
            
          >{{$t('samples.projectList.p')}}</p>
        </div>
        <div class="c_body flex wrap fill_width space_between">
          <div
            :style="{backgroundImage:`url(${api_url+deepFind(projects,`${index}.header.cover.url`)})`}"
            class="project_case elevate_1 pointer pair relative my-1"
            v-for="(item, index) in projects.length"
            :key="index"
            :class="{pair:parinage[index]==0,impair:parinage[index]==1,'mr-2':index % 2==0}"
          >
            <div class="overlay pa-4 flex column space_between fill_height">
              <div class="c_head">
                <h2 class="flex align_center space_between text_white pb-2">
                  <span>{{deepFind(projects,`${index}.header.title`)}}</span>
                  <span class="t-10">{{deepFind(projects,`${index}.header.finish_date`)}}</span>
                </h2>
                <h3 class="text_white">
                  <span
                    class="mr-2"
                    v-for="(industry, index) in deepFind(projects,`${index}.header.industries`)"
                    :key="index"
                  >{{industry.name}}{{index==deepFind(projects,`${index}.header.industries.length`)-1?'':','}}</span>
                </h3>
              </div>
              <div class="c_footer">
                <router-link
                  tag="h3"
                  :to="localePath(`/projects/${deepFind(projects,`${index}.slug`)}`)"
                  class="text_white txt_center"
                >{{$t('samples.projectList.view')}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Features list section  -->
    <section class="feature_list bg_white py-5">
      <div class="container">
        <div class="separator_line mb-5"></div>
        <div class="flex align_center space_between mb-5 boxes">
          <div class="flex column center align_center w-40">
            <div class="icon_box bg_redLight flex align_center center">
              <img width="auto" height="auto" src="~/static/img/icons/projects/time.png" alt="time icon" />
            </div>
            <h2 class="txt_center my-4" >{{$t('samples.features.time.h1')}}</h2>
            <p
              class="txt_center my-0"
              
            >{{$t('samples.features.time.p')}}</p>
          </div>
          <div class="flex column center align_center w-40">
            <div class="icon_box bg_redLight flex align_center center">
              <img width="auto" height="auto" src="~/static/img/icons/projects/globe.png" alt="time icon" />
            </div>
            <h2 class="txt_center my-4" >{{$t('samples.features.lang.h1')}}</h2>
            <p
              
              class="txt_center my-0"
            >{{$t('samples.features.lang.p')}}</p>
          </div>
        </div>
        <div class="features_footer flex center">
          <p class="txt_center w-70" >
            {{$t('samples.features.lang.footer')}}
          </p>
        </div>
      </div>
    </section>
    <!-- services footer -->
    <contact-bloc class="my-4"></contact-bloc>
  </div>
  <div v-else class="bg_lightGrey loading_page flex align_center center">
    <div class="load_spinner open_spinner"></div>
  </div>
</template>
<script>
import projectQuery from "~/apollo/queries/project/projects";

export default {
  apollo: {
    projects: {
      prefetch: true,
      query: projectQuery,
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
      array: [1, 2, 3, 4, 5, 6, 7],
      parinage: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(y) {}
  }
};
</script>
<style lang="scss" scoped>
// hero section
.hero {
  min-height: calc(100vh - 80px);
  background-image: url("~static/img/projects/projects_hero.png");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .container {
    padding-top: 8rem;
  }
  @media (max-width: 1024px) {
    min-height: calc(100vh - 60px);
  }
}
//project list section
.projects_list {
  .project_case {
    transition: 0.5s all;
    &.pair {
      width: calc(65% - 4px);
    }
    &.impair {
      width: calc(35% - 4px);
    }
    overflow: hidden;

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 33.5rem;
    border-radius: 5px;
    .overlay {
      opacity: 0;
      position: relative;

      transition: 0.5s all;
      * {
        position: relative;
        z-index: 1;
      }
      &::after {
        border-radius: 5px;
        background: linear-gradient(rgba(85, 85, 85, 0.4) 0%, #010101 100%);

        z-index: 0;
      }
    }
    &:hover {
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.16);
      .overlay {
        opacity: 1;
        position: relative;
      }
    }
  }
  @media (max-width: 1640px) {
    .project_case {
      height: 20rem;
    }
  }
  @media (max-width: 1024px) {
    .project_case {
      &.pair {
        width: calc(50% - 4px);
      }
      &.impair {
        width: calc(50% - 4px);
      }
    }
  }
  @media (max-width: 767px) {
    .project_case {
      margin-right: 0 !important;
      &.pair {
        width: 100%;
      }
      &.impair {
        width: 100%;
      }
    }
  }
}
//Feature list
.feature_list {
  .separator_line {
    height: 20px;
    width: 100%;
    background: linear-gradient(#333 15.06%, #875454 100%);
  }
  .icon_box {
    width: 16.25rem;
    height: 16.25rem;
    border-radius: 16px;
  }
  .features_footer {
    border-top: 1px solid map-get($map: $colors, $key: text2);
  }
  @media (max-width: 660px) {
    .boxes {
      flex-wrap: wrap;
      & > .w-40 {
        width: 100% !important;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>