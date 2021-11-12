<template>
  <div class="caroussel w-100">
    <h2 class="mb-3">{{deepFind(variables,'title')}}</h2>
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
        <img :src="api_url+deepFind(item,'media.url')" :alt="item.title" />
        <div class="overlay_light flex align_center center"></div>
      </div>
      <template #prevArrow>
        <div class="custom-arrow prev_arrow">
          <img src="~static/img/icons/arrow_left.png" alt />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-arrow next_arrow">
          <img src="~static/img/icons/arrow_right.png" alt />
        </div>
      </template>
    </VueSlickCarousel>
    <div class="my-3">
      <h2 class="text_primary">{{deepFind(variables,'carouselItem.'+activeSlide+'.title')}}</h2>
      <p class="my-2">{{deepFind(variables,'carouselItem.'+activeSlide+'.description')}}</p>
    </div>
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
        slidesToShow:
          this.deepFind(this.variables, "carouselItem.length") > 1
            ? this.deepFind(this.variables, "carouselItem.length") - 1
            : 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        responsive: [
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
    beforeSlideChange(newVal) {
      this.activeSlide = newVal;
    }
  }
};
</script>
<style lang="scss" scoped>
.caroussel {
  .caroussel_item {
    max-width: 300px;
    transition: 1s all;
    img {
      max-width: 100%;
      height: 540px;
      object-fit: cover;
    }
  }
  .slick-active.slick-center.slick-current {
    .caroussel_item {
      max-width: 500px;
      .overlay_light {
        display: none;
      }
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