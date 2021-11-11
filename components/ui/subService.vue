<template>
  <div class="flex align_center">
    <div class="w-85 flex column start fill_height">
      <h2 class="text_primary mb-4">{{sub.title}}</h2>
      <p class="h4">{{sub.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sub: { type: Object }
  }
};
</script>
<style lang="scss" scoped>
</style>