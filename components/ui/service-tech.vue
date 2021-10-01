<template>
  <div class="tech_card flex column align_center">
    <div class="tech_image my-3">
      <img class="w-90" src="~static/img/services/frontend.svg" alt="frontend" />
    </div>
    <div>
      <h2 class="text_primary mb-2">Frontend</h2>
      <h4>Armed with a huge experience in developing back-end solutions, we successfully helped our clients build a product that works seamlessly, meet market needs and create an enjoyable user experience. The technologies we use are well-documented, mainstream, secure and enable easy scaling.</h4>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.tech_card {
  border-radius: 5px;
  .tech_image {
    img {
      margin: 0 5%;
    }
  }
  @media (max-width: 767px) {
    width: 100% !important;
  }
}
</style>