<template>
  <div class="flex column align_center py-5 txt_center">
    <img src="~static/img/calculator/ftm_success.png" alt="Finish calculator" />
    <h1 class="mt-5 mb-2">It was fun and helpfull?</h1>
    <h3
      class="subheading my-2"
    >Now we know your needs you can schedule a meeting to start the mission.</h3>
    <fBtn
      id="appointmentBtn"
      link
      external
      to="https://fb.com/book/FictionToMission/"
      class="mt-5 mb-3 pa-3 bg_primary w-30 flex align_center center f_link text_white mx-2"
    >
      <h3 v-tr class="text_white">GET APPOINTMENT</h3>
    </fBtn>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .mt-5.mb-3.pa-3.bg_primary.w-30.flex.align_center.center.f_link.text_white.mx-2 {
    width: auto !important;
  }
}
</style>