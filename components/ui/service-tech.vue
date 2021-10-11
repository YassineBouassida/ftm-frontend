<template>
  <div class="tech_card flex column align_center">
    <div class="tech_image my-3">
      <img class="w-90" :src="api_url+deepFind(stack, 'image.url')" alt="frontend" />
    </div>
    <div>
      <h2 class="text_primary mb-2">{{stack.title}}</h2>
      <h4>{{stack.description}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    stack: {
      type: Object
    }
  }
};
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