<template>
  <button aria-label="btn" v-if="!link" class="btn" :disabled="disabled" :class="{flat:flat}">
    <span v-if="!loading">
      <slot></slot>
    </span>
    <span v-else class="flex center">
      <div class="load open"></div>
    </span>
  </button>
  <router-link v-else-if="link&&!external" :to="to" class="btn" tag="button" :class="{flat:flat}">
    <span>
      <slot></slot>
    </span>
  </router-link>
  <a :href="to" v-else class="btn" target="blank" :class="{flat:flat}">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "dark"
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: [String, Object],
      required: false,
      default: "/"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.dark {
  color: map-get($colors, white);
}
.light {
  color: map-get($colors, blackD);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    border-radius: inherit;
    opacity: 0.9;
    background: white;
  }
}
.bg_light {
  .load {
    border: 2px solid map-get($map: $colors, $key: blackL) !important;
  }
}
.small {
  height: 2rem;
}
.disabled {
  background: map-get($map: $colors, $key: grey) !important;
}
.load {
  width: 20px;
  height: 20px;
  border: 2px solid map-get($map: $colors, $key: white);
  border-radius: 100%;
}

.open {
  border-top: 2px solid transparent;
  animation: load-animate infinite linear 1s;
}
.flat {
  border-radius: 50% !important;
}

@keyframes load-animate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.35;
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
