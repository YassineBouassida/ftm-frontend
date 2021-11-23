<template>
  <div class="services_wrapper">
    <!-- ***************Only on desktop and tablet************** -->
    <div class="flex wrap center desktop mt-5">
      <serviceCard
        v-for="(service, index) in services"
        :key="index"
        class="service_card pointer pa-2 my-3 mx-2"
        :size="114"
        :title="service.title"
        :desc="service.description"
        :icon="service.icon.url"
        :iconHover="service.iconHover.url"
        :slug="service.slug"
        @click.native="redirectToService(service.slug)"
      ></serviceCard>
    </div>
    <!-- ***************************** -->
    <!-- ***************Only on mobiles************** -->
    <VueSlickCarousel
      v-bind="servicesSlickSettings"
      class="flex wrap center mobile"
      v-if="deepFind(services,'length')"
      key="services"
    >
      <externalServiceCard
        v-for="(service, index) in services"
        :key="index"
        :alwaysActive="true"
        class="service_card pointer pa-2"
        :size="114"
        :title="service.title"
        :desc="service.description"
        :icon="service.icon.url"
        :iconHover="service.iconHover.url"
        :slug="service.slug"
        @click.native="redirectToService(service.slug)"
      ></externalServiceCard>
      <template #customPaging>
        <div class="custom-dot my-2"></div>
      </template>
      <!-- <template #prevArrow>
        <div class="custom-arrow prev_arrow">
          <img src="~static/img/icons/arrow_left.png" alt />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-arrow next_arrow">
          <img src="~static/img/icons/arrow_right.png" alt />
        </div>
      </template>-->
    </VueSlickCarousel>
    <!-- ***************************** -->
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import externalServiceCard from "~/components/ui/service-card";
export default {
  components: { VueSlickCarousel, externalServiceCard },
  data() {
    return {
      servicesSlickSettings: {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    };
  },
  props: {
    services: {
      type: [Array, Object]
    }
  },
  methods: {
    redirectToService(slug) {
      this.$router.push(this.localePath(`/services/${slug}`));
    }
  }
};
</script>
<style lang="scss" scoped>
.services_wrapper {
  display: flex;
  align-items: center;
  flex: 2;
}
.service_card {
  @media (max-width: 1641px) {
    width: 360px;
  }
  @media (max-width: 1200px) {
    width: 300px;
    justify-content: flex-start;
    height: 380px;
  }
  @media (max-width: 1024px) {
    justify-content: space-around;
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
  width: 374px;
  height: 340px;
  border-radius: 5px;
  transition: 0.5s all;
}
@media (max-width: 1024px) {
  .slick-slider {
    display: block !important;
  }
  .services_wrapper {
    display: block;
  }
}
::v-deep .custom-dot-class.slick-dots {
  margin: 4px 0;
  position: relative;
  bottom: 0;
}
.custom-dot {
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  padding: 1px;
  border: 1px solid map-get($map: $colors, $key: text1);
}
.slick-active {
  .custom-dot {
    background: map-get($map: $colors, $key: text1);
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
    right: -1rem;
    @media (max-width: 480px) {
      right: calc(5% - 1.4rem);
    }
  }
  &.prev_arrow {
    left: -1rem;
    @media (max-width: 480px) {
      left: calc(5% - 1.4rem);
    }
  }
}
</style>