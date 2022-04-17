<template>
  <div class="entity my-5">
    <h2 class="mb-3" v-html="deepFind(variables,'title')"></h2>
    <p class="mb-3" v-html="deepFind(variables,'desc')"></p>
    <h3 class="mb-3" v-html="deepFind(variables,'subTitle')"></h3>

    <div class="image relative mb-3">
      <img
        width="auto"
        height="auto"
        :src="api_url+getEntityImage"
        :alt="deepFind(variables,'title')"
        v-if="getEntityImage"
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
  },
  computed: {
    getEntityImage() {
      let viewPort = this.$store.getters["style/viewPort"];
      if (viewPort == "large") {
        return this.deepFind(this.variables, "media.url");
      } else if (viewPort == "sm") {
        return (
          this.deepFind(this.variables, "media_sm.url") ||
          this.deepFind(this.variables, "media.url")
        );
      } else if (viewPort == "xs") {
        return (
          this.deepFind(this.variables, "media_xs.url") ||
          this.deepFind(this.variables, "media_sm.url") ||
          this.deepFind(this.variables, "media.url")
        );
      }
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