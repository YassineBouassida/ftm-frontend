<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64.069"
      height="64.069"
      viewBox="0 0 64.069 64.069"
      class="dark"
    >
      <g transform="translate(-6 -1.914)">
        <path
          class="a"
          d="M66.8,69.069H9.264A2.264,2.264,0,0,1,7,66.8V9.264A2.264,2.264,0,0,1,9.264,7H66.8a2.264,2.264,0,0,1,2.264,2.264V66.8A2.264,2.264,0,0,1,66.8,69.069Z"
          transform="translate(0 -4.086)"
        />
        <line class="a" x1="62.069" transform="translate(7.621 10.362)" />
        <circle class="b" cx="1.862" cy="1.862" r="1.862" transform="translate(62.862 5.396)" />
        <g class="c" transform="translate(57.276 5.396)">
          <circle class="d" cx="1.862" cy="1.862" r="1.862" />
          <circle class="e" cx="1.862" cy="1.862" r="1.362" />
        </g>
      </g>
    </svg>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.dark {
  .a {
    fill: #f2f2f2;
    stroke-width: 2px;
  }
  .a,
  .c {
    stroke: #666;
    stroke-miterlimit: 10;
  }
  .b {
    fill: #666;
  }
  .c,
  .e {
    fill: none;
  }
  .d {
    stroke: none;
  }
}
</style>