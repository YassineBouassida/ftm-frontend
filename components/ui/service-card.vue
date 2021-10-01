<template>
  <div
    class="service flex column center"
    :class="{elevate_1:serviceHovered ||alwaysActive}"
    @mouseenter="serviceHovered=true"
    @mouseleave="serviceHovered=false"
  >
    <div
      class="s_head flex align_center center mb-3"
      :class="{s_hovered:serviceHovered ||alwaysActive}"
    >
      <div
        class="s_icon bg_lightGrey flex align_center center"
        :style="{height:size+'px',width:size+'px'}"
      >
        <box class="box_icon relative">
          <img
            :src="require(`~/static/img/icons/services/${!(serviceHovered||alwaysActive)?icon:icon+'_h'}.svg`)"
            alt
          />
        </box>
      </div>
    </div>
    <div class="s_body txt_center">
      <h2>{{title}}</h2>
      <p
        class="subheading"
        :style="{visibility:!(serviceHovered||alwaysActive)?'hidden':'visible'}"
      >{{desc}}</p>
    </div>
    <div class="s_footer txt_right">
      <nuxt-link
        to="#"
        class="a text_primary mr-3"
        :style="{visibility:!(serviceHovered||alwaysActive)?'hidden':'visible'}"
      >Load more</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    },
    size: {
      type: Number
    },
    icon: {
      type: String
    },
    alwaysActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      serviceHovered: false
    };
  }
};
</script>
<style lang="scss" scoped>
.s_icon {
  transition: 0.5s all;

  border-radius: 50%;
  .box_icon {
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 80%;
      max-height: 50%;
    }
  }
}
.s_hovered {
  transition: 0.5s all;

  .s_icon {
    background: map-get($map: $colors, $key: primary) !important;
    .box_icon {
      position: relative;
      &::v-deep svg {
        visibility: hidden;
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>