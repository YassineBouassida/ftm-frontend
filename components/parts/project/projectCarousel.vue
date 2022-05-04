<template>
  <div class="caroussel w-100" v-if="variables">
    <h2 class="mb-3" v-html="deepFind(variables,'title')"></h2>
    <p class="mb-3" v-html="deepFind(variables,'desc')"></p>

    <VueSlickCarousel
      @beforeChange="beforeSlideChange"
      v-if="deepFind(variables,'carouselItem.length')"
      v-bind="settings"
    >
      <div
        v-for="(item, index) in deepFind(variables,'carouselItem')"
        :key="index"
        class="mx-3 pointer caroussel_item relative"
      >
        <div class="overlay_light flex align_center center" v-if="activeSlide!=index"></div>
        <img :src="api_url+deepFind(item,'media.url')" :alt="item.title" width="auto" height="auto" />
      </div>
      <template #prevArrow>
        <div class="custom-arrow prev_arrow">
          <img src="~static/img/icons/arrow_left.png" alt="left arrow" width="auto" height="auto" />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-arrow next_arrow">
          <img src="~static/img/icons/arrow_right.png" alt="right arrow" width="auto" height="auto" />
        </div>
      </template>
    </VueSlickCarousel>
    <div class="my-4">
      <h2 class="text_primary" v-html="deepFind(variables,'carouselItem.'+activeSlide+'.title')"></h2>
      <p class="my-2" v-html="deepFind(variables,'carouselItem.'+activeSlide+'.description')"></p>
    </div>
    <div
      class="my-4 second_desc pt-4"
      v-if="deepFind(variables,'subTitle')||deepFind(variables,'description')"
    >
      <h3 class="mb-3" v-html="deepFind(variables,'subTitle')"></h3>
      <p class="mb-3" v-html="deepFind(variables,'description')"></p>
    </div>
  </div>
  <div v-else class="bg_lightGrey loading_page flex align_center center">
    <div class="load_spinner open_spinner"></div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  props: {
    variables: {
      type: Object
    }
  },
  components: { VueSlickCarousel },
  data() {
    return {
      activeSlide: 0,
      settings: {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: this.calculateSlidesToShow(),
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 1640,
            settings: {
              dots: false,
              infinite: true,
              centerMode: true,
              centerPadding: "30px",
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              variableWidth: false,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              variableWidth: false,
              infinite: true,
              dots: true,
              centerPadding: "0px"
            }
          }
        ]
      }
    };
  },
  methods: {
    beforeSlideChange(old, newVal) {
      this.activeSlide = newVal;
    },
    calculateSlidesToShow() {
      let carousselSize = this.deepFind(this.variables, "carouselItem.length");
      console.log("carousselSize ", carousselSize);

      if (carousselSize < 4) {
        return carousselSize;
      } else {
        return 3;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.caroussel {
  .second_desc {
    border-top: $border;
  }
  .caroussel_item {
    max-width: 300px;
    transition: 1s all;
    img {
      /* width: 100%; */
      height: auto;

      object-fit: cover;
      max-width: 100%;
      margin: 0 auto;
      max-height: 540px;
    }
  }
  .slick-active.slick-center.slick-current {
    .caroussel_item {
      max-width: 500px;
      // .overlay_light {
      //   display: none;
      // }
    }
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
    z-index: 99;
    &::before {
      display: none !important;
    }
    &.next_arrow {
      right: 3rem;
      @media (max-width: 480px) {
        right: calc(5% - 1.4rem);
      }
    }
    &.prev_arrow {
      left: 3rem;
      @media (max-width: 480px) {
        left: calc(5% - 1.4rem);
      }
    }
  }
  @media (max-width: 1024px) {
    .caroussel_item {
      max-width: 100%;
      margin: 0 !important;
    }
    .next_arrow {
      right: -2rem !important ;
    }
    .prev_arrow {
      left: -2rem !important;
    }
  }
  @media (max-width: 480px) {
    .next_arrow {
      right: 1rem !important;
    }
    .prev_arrow {
      left: 1rem !important;
    }
  }
}
</style>