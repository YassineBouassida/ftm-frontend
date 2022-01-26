<template>
  <div class="my-3 pointer ans_opt elevate_1 bg_white flex column align_center center pa-4 w-45">
    <img class="mb-5" src="~static/img/calculator/customization.svg" alt="Custom design" />
    <h2>{{content.text}}</h2>
    <div class="tick_badge bg_primary" :class="{bg_primary:selected,bg_lightGrey:!selected}">
      <img v-if="selected" src="~static/img/icons/tick.svg" alt="tick" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["content", "selected"],
  watch: {
    selected: {
      handler: function(newVal) {
        if (newVal) {
          this.$emit("valueChange", {
            value: true,

            id: this.content.id
          });
        } else {
          this.$emit("valueChange", {
            value: false,

            id: this.content.id
          });
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.ans_opt {
  position: relative;
  border-radius: 5px;
  height: 17.5rem;
  width: 22.5rem;
  .tick_badge {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 0.9rem;
    }
  }
}
</style>