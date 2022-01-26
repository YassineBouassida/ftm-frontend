<template>
  <div class="flex column align_center py-5 txt_center">
    <img src="~static/img/calculator/calculator_init.png" alt="Initia calculator" />
    <h1 class="mt-5 mb-2">How Much Will My New Website Cost?</h1>
    <h3
      class="subheading my-2"
    >This tool helps you determine the approximate cost of your new website design.</h3>
    <fBtn
      link
      :to="localePath('/calculator/1')"
      class="mt-5 mb-3 pa-3 bg_primary w-30 flex align_center center f_link text_white mx-2"
    >
      <h3 v-tr class="text_white">CALCULATE</h3>
    </fBtn>
    <router-link to="/" tag="u" class="subheading">Learn more about our calculater</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
</style>