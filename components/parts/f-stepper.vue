<template>
  <div class="steps">
    <!-- ***************Only on desktop************** -->
    <div class="desktop steps_head flex center">
      <div
        class="flex pointer step align_center center"
        v-for="(step, index) in steps"
        :key="index"
        @click="activeStep=index"
        :class="{flex0:index==steps.length-1}"
      >
        <div class="step_btn elevate_2 bg_white flex align_center center relative">
          <div class="circle_deco" v-show="activeStep==index"></div>
          <img
            :src="activeStep!=index? api_url+deepFind(step, 'icon.url'):api_url+deepFind(step, 'iconHover.url')"
            :alt="step.title"
          />
        </div>
        <div
          class="separator bg_primary relative"
          :style="{visibility:index==7?'hidden':'visible'}"
          v-if="index!=steps.length-1"
        ></div>
      </div>
    </div>
    <!-- ***************************** -->
    <div class="steps_body mt-5">
      <h3 class="txt_right mb-2" v-tr>A cocktail of skills !</h3>
      <div class="step_content elevate_1 bg_white pa-4">
        <!-- ***************Only on desktop************** -->
        <VueSlickCarousel
          v-bind="slickSettings"
          v-if="deepFind(steps,'length')"
          @beforeChange="beforeSlideChange"
          class="mobile"
        >
          <div
            class="flex pointer step align_center space_around"
            v-for="(step, index) in steps"
            :key="index"
          >
            <div class="step_btn elevate_2 bg_white flex align_center center relative">
              <div class="circle_deco"></div>
              <img width="auto" height="auto" :src="api_url+deepFind(step, 'iconHover.url')" :alt="step.title" />
            </div>
          </div>
          <template #customPaging>
            <div class="custom-dot my-2"></div>
          </template>
        </VueSlickCarousel>
        <!-- ***************************** -->
        <h2 class="text_primary">{{activeStep+1}}. {{steps[activeStep].title}}</h2>
        <p v-html="steps[activeStep].description"></p>
        <div class="divider my-4 bg_text2"></div>
        <div class="skills">
          <div class="skills_toolbar flex">
            <h3
              @click="selectedTab=i"
              v-for="(skill, i) in skills"
              :key="i"
              class="pointer tab pa-3 txt_center"
              :class="{bg_primary:selectedTab==i, text_white:selectedTab==i}"
            >{{skill.name}}</h3>
          </div>
          <div class="skills_content flex align_center pa-3 bg_roseLight">
            <div class="tommpon bg_white flex align_center center">
              <img src="~static/img/icons/tompon.svg" alt="tompon" width="auto" height="auto" />
            </div>
            <p class="subheading px-4">{{skills[selectedTab].description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      selectedTab: 0,
      activeStep: 0,
      slickSettings: {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,

        speed: 1000,

        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      },
      skills: [
        {
          name: this.$t("Experienced team"),
          description: this.$t(
            "We are focused on bringing value to our customers and on helping them succeed in the marketplace."
          )
        },
        {
          name: this.$t("Full-service"),
          description: this.$t(
            "We are committed to supporting you over the long term: before, during and after the entire software development process."
          )
        },
        {
          name: this.$t("High quality service"),
          description: this.$t(
            "You take advantage of our experiences, high quality IT solutions, and the most exciting experience with a long term partner."
          )
        }
      ]
    };
  },

  props: {
    steps: {
      type: [Array, Object]
    }
  },
  methods: {
    beforeSlideChange(old, newVal) {
      this.activeStep = newVal;
    }
  }
};
</script>
<style lang="scss" scoped>
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
  .step_btn {
    width: 7rem;
    height: 7rem;
    box-shadow: none;
  }
  ::v-deep .custom-dot-class.slick-dots {
    position: relative;
    bottom: 0;
    margin: 8px 0;
  }
  .custom-dot {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 3px solid map-get($map: $colors, $key: lightGrey);
  }
  .slick-active {
    .custom-dot {
      background: map-get($map: $colors, $key: primary);
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
</style>