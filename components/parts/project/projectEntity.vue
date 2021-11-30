<template>
  <div class="entity my-5">
    <h2 class="mb-3">{{deepFind(variables,'title')}}</h2>
    <div class="image relative mb-3">
      <img width="auto" height="auto" :src="api_url+deepFind(variables,'media.url')" :alt="deepFind(variables,'title')" />
    </div>
    <div class="panel bg_lightGrey py-3 px-5" v-if="deepFind(variables,'description')">
      <p class="h4">{{deepFind(variables,'description')}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    variables: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.entity {
  .image {
    height: 500px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .panel {
    border-radius: 10px;
  }
}
</style>