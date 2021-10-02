<template>
  <VueSlickCarousel
    @beforeChange="beforeProjectChange"
    ref="projectSlick"
    v-bind="projectSlickSettings"
    v-if="projects.length>1"
    class="align_center flex projects_list"
  >
    <fProject v-for="(project, index) in projects" :key="index"></fProject>
  </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: { VueSlickCarousel },
  props: {
    projects: {
      type: [Array, Object]
    }
  },
  data() {
    return {
      projectSlickSettings: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    };
  },
  methods: {
    beforeProjectChange(old, newVal) {
      this.$emit("projectChanged", newVal);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>