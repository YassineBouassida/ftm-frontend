<template>
  <div class="flex column app" :class="{rtl:rtl,ltr:!rtl}">
    <fHeader class="bg_white headerContainer" :class="{sticky:sticky}" />
    <nuxt class="main" />
    <fFooter></fFooter>
  </div>
</template>
<style lang="scss" >
@import "~/static/scss/global.scss";
@import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
@import "vue-slick-carousel/dist/vue-slick-carousel.css";
.sticky {
  position: sticky;
  top: 0;
  z-index: 9999999;
}

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
      },
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.hostname}$
          {this.$route.path}`

        }
      ]
    };
  },
  data() {
    return {
      lastScrollY: 0,
      sticky: false
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(y) {
      if (this.lastScrollY > window.scrollY && window.scrollY > 150) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
      this.lastScrollY = window.scrollY;
    }
  },
  computed: {
    rtl() {
      return this.$i18n.localeProperties.dir == "rtl";
    }
  }
};
</script>
