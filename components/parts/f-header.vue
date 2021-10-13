<template>
  <div class="fill_width flex toolbar align_center">
    <!-- Brand side -->
    <div class="brand">
      <fLogo class="logo"></fLogo>
    </div>
    <!-- Burger menu <1024px -->
    <fBtn class="bg_primary burger" @click.native="openMenu=true">
      <div class="flex column fill_height center">
        <div class="line bg_white"></div>
        <div class="line bg_white"></div>
        <div class="line bg_white"></div>
      </div>
    </fBtn>
    <!-- Right side and menu side <1024-->
    <div class="right_side flex" :class="{opened:openMenu}">
      <close class="close_sign" :reverse="!openMenu" @click.native="openMenu=false"></close>
      <div class="links flex align_center center">
        <nuxt-link class="f_link mr-4" to="/">Home</nuxt-link>
        <nuxt-link class="f_link mx-4" to="/about">About</nuxt-link>
        <nuxt-link class="f_link mx-4" to="/#projects">Portfolio</nuxt-link>
        <nuxt-link class="f_link ml-4" to="/#services">Services</nuxt-link>
      </div>
      <div class="flex social_part end">
        <fBtn link :flat="true" to="/" class="mr-3 social_btn bg_primary flex align_center center">
          <img
            :src="require(`~/static/img/icons/social/facebook${openMenu?'_r':''}.png`)"
            alt="facebook"
          />
        </fBtn>
        <fBtn link flat to="/" class="mr-3 social_btn bg_primary flex align_center center">
          <img
            :src="require(`~/static/img/icons/social/instagram${openMenu?'_r':''}.png`)"
            alt="instagram"
          />
        </fBtn>
        <fBtn link to="/contact" class="quote_btn bg_primary f_link">
          <h3 class="text_white">GET A QUOTE</h3>
        </fBtn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMenu: false
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.openMenu = false;
      },
      deep: true,
      immediate: false
    }
  }
};
</script>
<style lang="scss" scoped>
.toolbar {
  height: 80px;
  @media (max-width: 1024px) {
    justify-content: space-between;
    height: 60px;
  }
}
.brand {
  min-width: 150px;
  flex-grow: 0;
  .logo {
    ::v-deep svg {
      width: auto;
      height: 40px;
      @media (max-width: 1024px) {
        height: 25px;
      }
    }
  }
}
.burger {
  width: 2.5rem;
  height: 2.125rem;
  .line {
    height: 2px;
    border-radius: 4px;
    margin: 3px 0;
    @media (max-width: 375px) {
      margin: 2px 0;
    }
  }
  @media (min-width: 1025px) {
    display: none;
  }
}
.right_side {
  flex-grow: 1;
  .close_sign {
    display: none;
  }
  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: -2000px;
    height: 100%;
    width: 100%;
    background: map-get($map: $colors, $key: primary);
    flex-direction: column;
    justify-content: space-between;
    z-index: 5;
    transition: 1s all;
    &.opened {
      right: 0;
      .links {
        flex-direction: column;
        justify-content: center;
        .f_link {
          width: 100%;
          text-align: center;
          margin: 1rem 0 !important;
          color: map-get($map: $colors, $key: white);
        }
      }
      .social_part {
        min-width: 300px;
        margin-bottom: 1rem;
        justify-content: center;
        .quote_btn {
          background: map-get($map: $colors, $key: white) !important;
          width: 150px;
          h3 {
            font-size: 1rem;
            color: map-get($map: $colors, $key: primary) !important;
          }
        }
        .social_btn {
          background: map-get($map: $colors, $key: white) !important;
          &::v-deep span {
            width: 1.7rem;
            height: 1.7rem;
          }
          img {
            max-width: 1.7rem;
            max-height: 1.7rem;
          }
        }
      }
      .close_sign {
        display: block;
        position: absolute;
        top: 2rem;
        right: 2rem;
        transition: 2s all;
      }
    }
  }
}

.links {
  flex-grow: 1;
  .f_link {
    border-bottom: 2px solid transparent;

    &:hover {
      color: map-get($map: $colors, $key: primary);
      border-bottom: 2px solid map-get($map: $colors, $key: primary);
    }
  }
  .nuxt-link-exact-active {
    color: map-get($map: $colors, $key: primary);
    border-bottom: 2px solid map-get($map: $colors, $key: primary);
  }
}
.social_part {
  flex: 0;
  min-width: 350px;
  .social_btn {
    width: 2.5rem;
    height: 2.5rem;
    &::v-deep span {
      width: 1.7rem;
      height: 1.7rem;
    }
    img {
      max-width: 1.7rem;
      max-height: 1.7rem;
    }
  }
  .quote_btn {
    width: 200px;
  }
}
</style>