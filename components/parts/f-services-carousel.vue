<template>
  <div class="services_wrapper">
    <!-- ***************Only on desktop and tablet************** -->
    <div class="flex wrap center desktop mt-5">
      <serviceCard
        v-for="(service, index) in services"
        :key="index"
        class="service_card pointer pa-2"
        :size="114"
        :title="service.title"
        :desc="service.description"
        :icon="service.icon.url"
        :iconHover="service.iconHover.url"
        :slug="service.slug"
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
      ></externalServiceCard>
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
        dots: false,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
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
    width: 370px;
  }
  @media (max-width: 1200px) {
    width: 315px;
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
  width: 390px;
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