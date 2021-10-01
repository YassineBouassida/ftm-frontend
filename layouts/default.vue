<template>
  <div class="flex column app">
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
export default {};
</script>
