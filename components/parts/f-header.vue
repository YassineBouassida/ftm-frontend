<template>
  <div>
    <div class="fill_width flex toolbar align_center container">
      <!-- Brand side -->
      <div class="brand">
        <router-link tag="span" :to="localePath('/')" class="pointer">
          <fLogo class="logo"></fLogo>
        </router-link>
      </div>
      <div class="flex align_center fill_height">
        <div class="languages mr-4 flex">
          <h3
            class="mobile pointer flex align_center center mx-2 t-14"
            :class="{'text_primary':locale.val==$i18n.locale,'text_text2':locale.val!=$i18n.locale}"
            @click="$root.$i18n.setLocale(locale.val)"
            v-for="locale in laguages"
            :key="locale.code"
          >
            <span>{{locale.text}}</span>
          </h3>
        </div>
        <!-- Burger menu <1024px -->
        <fBtn class="bg_primary burger" @click.native="openMenu=true">
          <div class="flex column fill_height center">
            <div class="line bg_white"></div>
            <div class="line bg_white"></div>
            <div class="line bg_white"></div>
          </div>
        </fBtn>
      </div>
      <!-- Right side and menu side <1024-->
      <div class="right_side flex" :class="{opened:openMenu}">
        <close class="close_sign" :reverse="!openMenu" @click.native="openMenu=false"></close>
        <div class="links flex align_center center">
          <nuxt-link
            class="f_link mr-4"
            :to="localePath('/')"
            @click.native="openMenu=false"
          >{{$t('header.links.home')}}</nuxt-link>
          <nuxt-link
            class="f_link mx-4"
            :to="localePath('/about')"
            @click.native="openMenu=false"
          >{{$t('header.links.about')}}</nuxt-link>
          <nuxt-link
            class="f_link mx-4"
            :to="localePath('/projects')"
            @click.native="openMenu=false"
          >{{$t('header.links.samples')}}</nuxt-link>
          <nuxt-link
            class="f_link ml-4"
            :to="localePath('/services')"
            @click.native="openMenu=false"
          >{{$t('header.links.services')}}</nuxt-link>
          <nuxt-link
            class="f_link ml-4 mobile"
            :to="localePath('/services')"
            @click.native="openMenu=false"
          >{{$t('header.links.privacy')}}</nuxt-link>
          <nuxt-link
            class="f_link ml-4 mobile"
            :to="localePath('/services')"
            @click.native="openMenu=false"
          >Cookies</nuxt-link>
        </div>
        <div class="flex align_center relative desktop">
          <h3
            class="pointer flex align_center center"
            :alt="$i18n.locale"
            @click="dropdownOpened=!dropdownOpened"
          >
            <span>{{$i18n.locale.toUpperCase()}}</span>
          </h3>
          <div class="flex column dropdown" v-if="dropdownOpened">
            <a
              href="#"
              class="my-2 flex align_center text_text3"
              v-for="locale in laguages"
              :key="locale.code"
              @click.prevent.stop="$root.$i18n.setLocale(locale.val);"
            >{{locale.text}}</a>
          </div>
        </div>
        <div class="flex social_part end">
          <fBtn
            external
            link
            flat
            to="https://www.facebook.com/FictionToMission/"
            class="mr-3 social_btn bg_primary flex align_center center"
          >
            <img
              :src="require(`~/static/img/icons/social/facebook${openMenu?'_r':''}.png`)"
              alt="facebook"
            />
          </fBtn>
          <fBtn
            external
            link
            flat
            to="https://www.instagram.com/fictiontomission/"
            class="mr-3 social_btn bg_primary flex align_center center"
          >
            <img
              :src="require(`~/static/img/icons/social/instagram${openMenu?'_r':''}.png`)"
              alt="instagram"
            />
          </fBtn>
          <fBtn link :to="localePath('/contact')" class="quote_btn bg_primary f_link">
            <h3 class="text_white">{{$t('header.btn')}}</h3>
          </fBtn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMenu: false,
      dropdownOpened: false,
      laguages: [
        { text: "EN", val: "en", icon: "en.svg" },
        { text: "FR", val: "fr", icon: "fr.svg" },
        { text: "AR", val: "ar", icon: "ar.svg" }
      ]
    };
  },

  watch: {
    $route: {
      handler: function(route) {
        this.openMenu = false;
        this.dropdownOpened = false;

        if (this.$ga) {
          this.$ga.page(route.path);
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
.rtl {
  .social_btn {
    margin-left: 1rem !important;
    margin-right: 0rem !important;
  }
  @media (min-width: 1025px) {
    .social_btn {
      margin-left: 0rem !important;
      margin-right: 1rem !important;
    }
    .f_link {
      margin-right: 1.5rem;
      margin-left: 1.5rem;
    }
  }
}
.languages {
  h3 {
    text-transform: uppercase;
  }
}
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
    z-index: 200;
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
          width: 180px;
          h3 {
            font-size: 1rem;
            color: map-get($map: $colors, $key: primary) !important;
          }
        }
        .social_btn {
          background: map-get($map: $colors, $key: white) !important;
          &::v-deep span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.4rem;
            height: 1.4rem;
          }
          img {
            max-width: 1.4rem;
            max-height: 1.4rem;
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.4rem;
      height: 1.4rem;
    }
    img {
      max-width: 1.4rem;
      max-height: 1.4rem;
    }
  }
  .quote_btn {
    width: 200px;
  }
}
.flag {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid #333333;
}
.dropdown {
  position: absolute;
  bottom: -330%;
  left: -2.2rem;
  width: 6rem;
  align-items: center;
  background: map-get($map: $colors, $key: lightGrey);
  border-radius: 0 0 9px 9px;
  transition: 0.5s all;
  z-index: 999;
}
</style>