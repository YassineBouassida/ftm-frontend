<template>
  <div>
    <section class="hero flex column">
      <div class="artboard flex1 flex container">
        <div class="w-50 pt-5">
          <h1 class="hero_text">
            <span>{{$t('about.heroText1')}}</span>
            <br />
            <span>{{$t('about.heroText2')}}</span>
            <span class="separator bg_primary relative mr-3"></span>
          </h1>
        </div>
        <div class="w-50 flex end pr-5">
          <img width="auto" height="auto" src="~static/img/about/hero.svg" alt="hero" />
        </div>
      </div>
      <div class="about_text bg_primary">
        <div class="container">
          <div class="flex fill_height fill_width">
            <div class="w-50 py-5 call_to_action">
              <p class="text_white">{{$t('about.aboutText.h1_1')}}</p>
              <p class="text_white">{{$t('about.aboutText.h1_2')}}</p>

              <div class="vision_mission flex column">
                <h1
                  class="hero_text text_white"
                  :class="{'text_small_to_big':!mission,'text_big_to_small':mission}"
                >{{$t('about.aboutText.mission.text')}}</h1>
                <p
                  class="h4 subheading text_white"
                  :class="{'text_small_to_big':mission,'text_big_to_small':!mission}"
                >{{$t('about.aboutText.vision.text')}}</p>
              </div>
            </div>
            <div class="w-50 flex end paragraph">
              <h2
                class="text_white txt_right pr-3 pb-2"
                v-show="mission"
              >{{$t('about.aboutText.vision.desc')}}</h2>
              <h2
                v-show="!mission"
                class="text_white txt_right pr-3 pb-2"
              >{{$t('about.aboutText.mission.desc')}}</h2>
              <div class="circles_deco py-4 px-2 flex column space_between">
                <div class="circle pointer"></div>
                <div class="circle active pointer"></div>
              </div>
            </div>
          </div>
          <div class="bottom_part fill_width flex end">
            <div class="w-50 border_lines"></div>
          </div>
        </div>
      </div>
      <div class="about_footer bg_lightGrey flex align_center center">
        <h2>{{$t('about.aboutText.footer')}}</h2>
      </div>
    </section>
    <!-- Cases section -->
    <section class="cases flex column small_container">
      <!-- First Case  -->
      <div class="case flex flex1 txt_left align_center center" id="case2">
        <div class="w-50">
          <img
            width="auto"
            height="auto"
            src="~static/img/about/who_are_you.svg"
            alt="no website"
            class="fill_width img"
          />
        </div>
        <div class="text_side ml-4 w-50">
          <div class="desc">
            <h1 class="mb-3">{{$t('about.cases.who.h1')}}</h1>
            <p class="h4">{{$t('about.cases.who.p')}}</p>
          </div>
        </div>
      </div>
      <!-- Second Case  -->
      <div class="case txt_right flex1 flex align_center space_between" id="case1">
        <div class="text_side mr-4 w-50">
          <div class="desc">
            <h1 class="mb-3">{{$t('about.cases.values.h1')}}</h1>
            <p class="h4">{{$t('about.cases.values.p')}}</p>
          </div>
        </div>
        <div class="w-50">
          <img
            width="auto"
            height="auto"
            src="~static/img/about/our_values.svg"
            alt="no website"
            class="fill_width img"
          />
        </div>
      </div>
    </section>
    <!-- Team members -->
    <section class="team container my-5">
      <h1>{{$t('about.team.h1')}}</h1>
      <p class="w-50">{{$t('about.team.p')}}</p>
      <div class="flex align_center space_between py-4 members">
        <div class="member flex align_center oussama">
          <div class="avatar"></div>
          <div class="ml-3">
            <h1>Oussama Kriaa</h1>
            <p class="my-1">co-founder/ fullstack developper</p>
          </div>
        </div>
        <div class="member flex align_center yassine">
          <div class="avatar"></div>
          <div class="ml-3">
            <h1>Yassine Bouassida</h1>
            <p class="my-1">co-founder/ fullstack developper</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "aboutPage",
  head() {
    return {
      title: this.$t("About Us"),
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Fiction To Mission is 100% committed to a growth strategy to provide companies with a comprehensive solution for better digital businesses."
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "vision,mission"
        }
      ]
    };
  },
  data() {
    return {
      mission: true
    };
  },
  mounted() {
    setInterval(() => {
      this.mission = !this.mission;
    }, 5000);
  }
};
</script>
<style lang="scss" scoped>
.hero {
  min-height: calc(100vh - 80px);
  background: linear-gradient(#fff 0%, #f2f2f2 100%);
  .separator {
    height: 10px;
    width: 3rem;
    border-radius: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .artboard {
    padding-top: 4rem;
    img {
      height: 100%;
    }
  }
  .about_text {
    height: 27.625rem;
    .container {
      height: calc(100% - 2rem);
      overflow: hidden;
    }
    .call_to_action {
      h1 {
        font-family: $light;
      }
      .hero_text {
        font-family: $semiBold;
        order: 1;
      }
      .subheading {
        font-size: initial;
        padding-left: 0.8rem;
        order: 2;
        margin: 0;
      }
      .text_small_to_big {
        animation: text_small_to_big 2s forwards;
      }
      .text_big_to_small {
        animation: text_big_to_small 2s forwards;
      }
    }
    .paragraph {
      align-items: end;
      h2 {
        font-size: 1.4rem;
        animation: fade-in 2s forwards;
        @media (max-width: 768px) {
          animation: vertical-fade-in 2s forwards;
          text-align: center;
        }
      }
    }
    .circles_deco {
      width: 3rem;
      border-left: 1px solid map-get($map: $colors, $key: white);
      border-bottom: 1px solid map-get($map: $colors, $key: white);
      height: 100%;
      .circle {
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        border: 1px solid map-get($map: $colors, $key: white);
        &.active {
          background: map-get($map: $colors, $key: white);
        }
      }
    }
    .bottom_part {
      height: 1.2rem;
      position: relative;
      top: -1px;
      .border_lines {
        margin-right: calc(3rem - 4px);
        border-top: 1px solid map-get($map: $colors, $key: white);
        border-right: 1px solid map-get($map: $colors, $key: white);
      }
    }
  }
  .about_footer {
    height: 8.125rem;
  }
  @media (max-width: 1024px) {
    .artboard {
      padding-top: 2.5rem;
      flex-wrap: wrap;
      & > .w-50 {
        width: 100% !important;
        justify-content: center;
        padding-right: 0 !important;
        h1 {
          text-align: center;
        }
        &:first-child {
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .artboard {
      padding-top: 2.5rem;
      flex-wrap: wrap;
      & > .w-50 {
        width: 100% !important;
        justify-content: center;
        padding-right: 0 !important;
        img {
          max-width: 300px;
          position: relative;
        }
        h1 {
          text-align: center;
        }
        &:first-child {
          margin-bottom: 2rem;
        }
      }
    }
    .about_text {
      height: auto;
      min-height: 510px;
      .container > .flex {
        flex-wrap: wrap;
      }
      .call_to_action,
      .paragraph {
        width: 100% !important;
        .circles_deco {
          display: none !important;
        }
      }
      .bottom_part {
        display: none !important;
      }
    }
    .about_footer {
      h2 {
        font-size: 0.9rem;
        text-align: center;
      }
    }
  }
}
//**Cases */
.cases {
  padding: 5rem 0;

  #case2 {
    margin-bottom: 4rem;
    .text_side {
      padding-right: 10%;
    }
  }
  #case1 {
    .text_side {
      padding-left: 10%;
    }
  }

  .case {
    .img {
      max-width: 100%;
    }
    & > div {
      flex: 1 1 0;
    }
    .notice {
      margin-top: 5rem;
      border-radius: 12px;
    }
  }
  @media (max-width: 1024px) {
    .text_side {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .case {
      flex-wrap: wrap;
      .w-50 {
        width: 100% !important;

        img {
          min-width: 300px;
        }
      }
    }

    #case1 {
      .text_side {
        margin-right: 1rem !important;
      }
    }
    #case2 {
      .text_side {
        margin-left: 1rem !important;
      }
    }
  }
  @media (max-width: 767px) {
    min-height: 100vh;
    .case {
      flex-wrap: wrap;
      & > div {
        flex: auto;
        text-align: center !important;
        margin-bottom: 2rem;
      }
      h2 {
        color: map-get($map: $colors, $key: text1) !important;
      }
      &#case1 {
        flex-direction: column-reverse;
      }
    }
    #case1 {
      .text_side {
        margin-right: 0rem !important;
        padding-right: 1rem !important;
        padding-left: 1rem !important;
      }
    }
    #case2 {
      .text_side {
        margin-left: 0rem !important;
        padding-right: 1rem !important;
        padding-left: 1rem !important;
      }
    }
  }
}
.team {
  .yassine .avatar {
    background: #fff url("~static/img/about/avatar_y1.jpg") no-repeat;
    background-position-y: center;
    background-position-x: center;
    background-size: contain;
  }
  .oussama .avatar {
    background: #fff url("~static/img/about/avatar_o.png") no-repeat;
    background-position-y: center;
    background-position-x: center;
    background-size: contain;
  }
  .avatar {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;

    background-size: cover;
    flex-shrink: 0;
  }
  @media (max-width: 1640px) {
    .avatar {
      width: 15rem;
      height: 15rem;
    }
  }
  @media (max-width: 1200px) {
    .avatar {
      width: 9rem;
      height: 9rem;
    }
  }
  @media (max-width: 1024px) {
    & > p {
      width: 90% !important;
    }
    .members {
      flex-wrap: wrap;
      justify-content: center;
      .member {
        margin-bottom: 1.5rem;
        width: 430px;
      }
    }
  }
  @media (max-width: 767px) {
    & > h1 {
      text-align: center;
    }
    & > p {
      text-align: center;
      width: 100% !important;
    }
    .members {
      flex-wrap: wrap;
      justify-content: center;
      .member {
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        width: 300px;
        justify-content: center;
      }
    }
  }
}
//********************* */
@keyframes slide {
  from {
    transform: translateY(-5rem);
  }
}
//********************* */
@keyframes vertical-fade-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
  }
}
//********************* */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-27rem);
  }

  100% {
    opacity: 1;
  }
}
//********************* */
@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
//********************* */
@keyframes text_big_to_small {
  0% {
    order: 2;
    font-size: var(--font-size);
    opacity: 0;
  }

  100% {
    order: 2;
    font-size: 1rem;
    opacity: 1;
  }
}
//********************* */

@keyframes text_small_to_big {
  0% {
    order: 1;
    font-size: 1rem;
    opacity: 0;
  }

  100% {
    order: 1;
    font-size: var(--font-size);
    opacity: 1;
  }
}
</style>