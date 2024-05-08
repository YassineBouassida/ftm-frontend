<template>
  <div
    class="service flex column space_around"
    :class="{elevate_1:serviceHovered ||alwaysActive,bg_white:serviceHovered ||alwaysActive}"
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
      >{{desc|turncut(209)}}</p>
    </div>
    <div class="s_footer txt_right flex align_center end">
      <nuxt-link
        :to="localePath(`/services/${slug}`)"
        class="a bg_primary mr-3 load_more_btn flex align_center center"
        :style="{visibility:!(serviceHovered||alwaysActive)?'hidden':'visible'}"
      >
        <span class="text_white">{{$t('services.knowledge.readMore')}}</span>
        <span class="circle_load flex align_center center ml-2">
          <img
            src="~static/img/icons/feather-arrow-right.png"
            alt="right arrow"
            width="auto"
            height="auto"
          />
        </span>
      </nuxt-link>
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
    justify-content: space-around;
    .s_footer {
      justify-content: center;
      .load_more_btn {
        width: 80%;
        margin-right: 0 !important;
      }
    }
  }
}
.load_more_btn {
  height: 30px;
  width: 10rem;
  border-radius: 5px;
  .circle_load {
    width: 20px;
    height: 20px;
    // border: 2px solid map-get($map: $colors, $key: white);
    border-radius: 50%;
    overflow: hidden;
    img {
      animation: lineUp 1.5s both infinite cubic-bezier(0, 0.6, 1, 0.4);
    }
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
@keyframes lineUp {
  0% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(40px);
  }
}
</style>