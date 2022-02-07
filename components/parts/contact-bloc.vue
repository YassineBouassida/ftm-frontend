<template>
  <section class="services_footer flex align_center">
    <div class="container flex column align_end">
      <h1  class="text_white">{{$t('common.servicesFooter.h1')}}</h1>
      <p  class="text_white w-50 txt_right">
       {{$t('common.servicesFooter.p1')}}
      </p>
      <p
        class="text_white w-50 txt_right"
        
      >{{$t('common.servicesFooter.p2')}}</p>
      <fBtn
        link
        :to="localePath('/contact')"
        class="px-4 call_to_action bg_white f_link text_white"
      >
        <h3  class="text_text1">{{$t('common.servicesFooter.btn')}}</h3>
      </fBtn>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.rtl{
  .services_footer>.container{
    align-items: start;
  }
}
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