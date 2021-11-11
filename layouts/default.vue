<template>
  <div class="flex column app" :class="{rtl:rtl}">
    <fHeader class="container" />
    <nuxt class="main" />
    <fFooter></fFooter>
  </div>
</template>
<style lang="scss" >
@import "~/static/scss/global.scss";
@import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
@import "vue-slick-carousel/dist/vue-slick-carousel.css";
.app {
  min-height: 100vh;
}
.main {
  flex-grow: 2;
}
</style>
<script>
import Vue from "vue";
import global from "~/mixins/global.js";
Vue.mixin(global);
export default {
  name: "defaultLayout",
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    };
  },

  computed: {
    rtl() {
      return this.$i18n.localeProperties.dir == "rtl";
    }
  }
};
</script>
