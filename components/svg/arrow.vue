<template>
  <div :class="{dark:dark}">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.727"
      height="13.904"
      viewBox="0 0 20.727 13.904"
    >
      <path
        id="Path_386"
        data-name="Path 386"
        d="M3439,15675.5l8.247,9.5,8.248-9.5"
        transform="translate(3457.611 15687.288) rotate(180)"
        fill="none"
        stroke="#707070"
        stroke-linecap="round"
        stroke-width="3"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    dark: { type: Boolean }
  }
};
</script>
<style lang="scss" scoped>
.dark {
  #Path_386 {
    stroke: map-get($map: $colors, $key: white) !important;
  }
}
</style>