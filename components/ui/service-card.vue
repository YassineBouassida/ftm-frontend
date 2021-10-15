<template>
  <div
    class="service flex column start"
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
            width="auto"
            height="auto"
            :src="  !(serviceHovered||alwaysActive)?api_url+icon:api_url+iconHover"
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
        :to="`/services/${slug}`"
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
    iconHover: {
      type: String
    },
    alwaysActive: {
      type: Boolean,
      default: false
    },
    slug: {
      type: String
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
.service {
  @media (max-width: 1024px) {
    justify-content: center;
  }
}
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