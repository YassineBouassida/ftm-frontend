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
      <div class="right_side flex" :class="{opened:openMenu,collapsedMenu:smServicesMenu}">
        <close class="close_sign" :reverse="!openMenu" @click.native="openMenu=false"></close>
        <div class="links flex align_center center">
          <nuxt-link
            class="f_link mr-4"
            :to="localePath('/')"
            @click.native="openMenu=false;servicesDropdownOpen=false"
          >{{$t('header.links.home')}}</nuxt-link>
          <nuxt-link
            class="f_link mx-4"
            :to="localePath('/about')"
            @click.native="openMenu=false;servicesDropdownOpen=false"
          >{{$t('header.links.about')}}</nuxt-link>
          <nuxt-link
            class="f_link mx-4"
            :to="localePath('/projects')"
            @click.native="openMenu=false;servicesDropdownOpen=false"
          >{{$t('header.links.samples')}}</nuxt-link>
          <div
            class="f_link ml-4 services_link flex align_center pointer"
            @click="servicesClicked()"
            @mouseenter="servicesMouseEntered"
          >
            {{$t('header.links.services')}}
            <img
              src="~/static/img/icons/arrow_right.png"
              width="auto"
              class="ml-1 desktop"
              height="13px"
              alt="arrow right"
            />
            <img
              src="~/static/img/icons/white_arrow_left.png"
              width="auto"
              class="ml-1 mobile"
              height="13px"
              alt="arrow right"
            />
          </div>

          <!-- *************************Services dropdown list******************** -->
          <div
            class="services_dropdown flex elevate_3"
            v-if="servicesDropdownOpen"
            @mouseleave="servicesDropdownOpen=false"
          >
            <div class="w-50 services_list">
              <h1>{{$t('header.servicesDropDown')}}</h1>
              <nuxt-link
                tag="div"
                v-for="(service, index) in services"
                :key="index"
                class="f_link pointer"
                :class="{active_link:selectedService==index}"
                :to="localePath(`/services/${service.slug}`)"
                @click.native="openMenu=false;servicesDropdownOpen=false"
                @mouseenter.native="selectedService=index"
              >{{service.titleDisplay}}</nuxt-link>
              <hr />
              <nuxt-link
                tag="div"
                class="f_link pointer active_link"
                :to="localePath(`/services`)"
                @click.native="openMenu=false;servicesDropdownOpen=false"
              >
                <strong>{{$t('common.readMore')}}</strong>
              </nuxt-link>
            </div>
            <div class="w-50 flex column space_between cover_display">
              <div class="cover flex align_center center">
                <img
                  :src="api_url+deepFind(services,`${selectedService}.hero.image.url`)"
                  :alt="deepFind(services,`${selectedService}.titleDisplay`)"
                />
              </div>
              <div class="desc">
                <p>{{deepFind(services,`${selectedService}.description`)|turncut(209)}}</p>
              </div>
            </div>
          </div>

          <!-- ******************************************************************** -->
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
      <!-- Mobile and tablett  services menu -->
      <div class="smServicesMenu" :class="{openedServiceMenu:smServicesMenu}">
        <h2 class="text_primary pointer flex align_center" @click="smServicesMenu=false">
          <img class="mr-2" src="~/static/img/icons/red_arrow_left.png" alt="red arrow left" /> Back
        </h2>
        <div class="services_list" v-if="smServicesMenu">
          <h1>{{$t('header.servicesDropDown')}}</h1>
          <nuxt-link
            v-for="(service, index) in services"
            :key="'s-'+index"
            class="f_link pointer flex align_center"
            :class="{active_link:selectedService==index}"
            :to="localePath(`/services/${service.slug}`)"
            @click.native="openMenu=false;servicesDropdownOpen=false"
            @mouseenter.native="selectedService=index"
          >
            <div class="icon_box flex align_center center bg_primary mr-2">
              <img :src="api_url+service.iconHover.url" alt="service icon " class="service_icon" />
            </div>
            {{service.titleDisplay}}
          </nuxt-link>
          <hr />
          <nuxt-link
            class="f_link pointer active_link flex pointer"
            :to="localePath(`/services`)"
            @click.native="openMenu=false;servicesDropdownOpen=false"
          >
            <strong>{{$t('common.readMore')}}</strong>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import servicesQuery from "~/apollo/queries/header/services";
export default {
  data() {
    return {
      openMenu: false,
      dropdownOpened: false,
      laguages: [
        { text: "EN", val: "en", icon: "en.svg" },
        { text: "FR", val: "fr", icon: "fr.svg" },
        { text: "AR", val: "ar", icon: "ar.svg" }
      ],
      servicesDropdownOpen: false,
      selectedService: 0,
      smServicesMenu: false
    };
  },
  apollo: {
    services: {
      fetchPolicy: "no-cache",
      prefetch: true,
      query: servicesQuery,
      variables() {
        return { locale: this.$i18n.locale };
      },
      watchLoading: function(isLoading) {
        this.$nextTick(() => {
          console.log(
            "************************* Services ************************",
            "this.services",
            "********************************************************"
          );

          if (this.$nuxt && this.$nuxt.$loading) {
            isLoading
              ? this.$nuxt.$loading.start()
              : this.$nuxt.$loading.finish();
          }
        });
      }
    }
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
    },
    openMenu: {
      handler: function(val) {
        if (!val) {
          this.smServicesMenu = false;
        }
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    servicesClicked(e) {
      let innerWidth = window.innerWidth;
      if (innerWidth < 1025) {
        this.smServicesMenu = true;
      } else {
        this.$router.push(this.localePath("/services"));
        this.openMenu = false;
        this.servicesDropdownOpen = false;
      }
    },
    servicesMouseEntered() {
      if (window.innerWidth > 1025) {
        this.servicesDropdownOpen = true;
      }
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
  .services_link {
    flex-direction: row-reverse;
  }
  .services_dropdown {
    .f_link {
      margin: 0 !important;
    }
    left: auto;
    right: -175px;
    h1 {
      margin-right: 1rem;
      margin-left: 0;
    }
    .cover,
    .desc {
      margin-right: 2.5%;
    }
    hr {
      margin-right: 1rem;
    }
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
  @media (max-width: 375px) {
    min-width: 100px;
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
        z-index: 99;
        user-select: none;
        cursor: pointer;
      }
    }
  }
  .services_link {
    justify-content: center;
  }
}

.links {
  position: relative;
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
.services_dropdown {
  position: absolute;
  align-items: center;
  background: map-get($map: $colors, $key: white);
  border-radius: 0 0 9px 9px;
  transition: 0.5s all;
  z-index: 999;
  top: 100px;
  box-shadow: 0 6px 35px rgba(0, 0, 0, 0.16);
  left: -175px;
  align-items: stretch;

  @media (min-width: 1641px) {
    width: 1568px !important;
  }

  @media (min-width: 1201px) and (max-width: 1640px) {
    width: 1128px !important;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 948px !important;
  }
  .services_list {
    h1 {
      margin-top: 1rem;
      padding-left: 1rem;
    }
  }
  hr {
    width: 50%;
    margin-left: 1rem;
  }
  .f_link {
    padding: 0.5rem 1rem;
    border: none;
    &:hover {
      border: none;
    }
    &.active_link {
      color: map-get($map: $colors, $key: primary);
    }
  }
  .cover_display {
    padding: 1rem 0;
  }
  .cover,
  .desc {
    width: 95%;
    margin-left: 2.5%;
  }
  .desc {
    min-height: 150px;
  }
  .cover {
    margin-top: 2rem;
    background: #393535;

    border-radius: 12px;
    padding: 10px;
    img {
      max-height: 200px;
    }
  }
}
.collapsedMenu {
  right: 80% !important;
}
.smServicesMenu {
  position: fixed;
  z-index: 201;
  width: 0%;
  height: 100%;
  background: map-get($map: $colors, $key: white);
  top: 0;
  right: 0;
  transition: 1s all;
  overflow-x: hidden;
  * {
    visibility: hidden;
  }
  .f_link {
    padding: 0.5rem 0;
  }
  .icon_box {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    flex-shrink: 0;
    .service_icon {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
.openedServiceMenu {
  width: 80%;
  padding: 1rem;
  * {
    visibility: visible;
    overflow: hidden;
    flex-flow: nowrap;
    white-space: nowrap;
  }
}
</style>