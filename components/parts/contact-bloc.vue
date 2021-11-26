<template>
  <section class="services_footer flex align_center">
    <div class="container flex column align_end">
      <h1 v-tr class="text_white">Let’s Work Together</h1>
      <p v-tr class="text_white w-50 txt_right">
        Need a quote for your project? Have a question about our work or services?
        Just let us know.
      </p>
      <p
        class="text_white w-50 txt_right"
        v-tr
      >Whether you’re a small business or a large corporation, we look forward to working with you on your next creative endeavor</p>
      <fBtn
        link
        :to="localePath('/contact')"
        class="px-4 call_to_action bg_white f_link text_white"
      >
        <h3 v-tr class="text_text1">Contact us</h3>
      </fBtn>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
//Services footer
.services_footer {
  background: url("~static/img/services/footer_services.png");
  min-height: 28.875rem;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    & > .container {
      align-items: center !important;
      h1,
      p {
        width: 100% !important;
        text-align: center !important;
      }
    }
  }
}
</style>