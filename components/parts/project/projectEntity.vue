<template>
  <div class="entity my-5">
    <h2 class="mb-3" v-html="deepFind(variables,'title')"></h2>
    <p class="mb-3" v-html="deepFind(variables,'desc')"></p>
    <h3 class="mb-3" v-html="deepFind(variables,'subTitle')"></h3>

    <div class="image relative mb-3">
      <img
        width="auto"
        height="auto"
        :src="api_url+deepFind(variables,'media.url')"
        :alt="deepFind(variables,'title')"
        v-if="deepFind(variables,'media.url')"
        class="desktop"
      />
      <img
        width="auto"
        height="auto"
        :src="api_url+deepFind(variables,'media_sm.url')"
        :alt="deepFind(variables,'title')"
        v-if="deepFind(variables,'media_sm.url')"
        class="mobile"
      />
    </div>
    <div class="panel bg_lightGrey py-3 px-5" v-if="deepFind(variables,'description')">
      <p class="h4" v-html="deepFind(variables,'description')"></p>
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
    height: auto;
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