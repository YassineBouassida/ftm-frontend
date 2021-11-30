<template>
  <section class="footer container bg_white pa-3">
    <div class="c_head flex column align_center">
      <h1 class="txt_center">THIS IS OUR KNOWLEDGE</h1>
      <p class="txt_center w-70">
        We reinforce your presence and visibility on the web, we help strengthen your brand image and reputation with potential
        customers by creating fascinating showcase websitesWe turn your ideas into successful projects by incorporating your vision.
      </p>
    </div>
    <div class="btns flex align_center center my-5">
      <a
        link
        :href="preview"
        target="blank"
        class="btn w-30 flex align_center center call_to_action bg_primary mx-3 f_link text_white"
      >
        <h3 v-tr class="text_white">Live preview</h3>
      </a>
      <fBtn
        link
        :to="localePath('/contact')"
        class="w-30 call_to_action mx-3 bg_primary f_link text_white"
      >
        <h3 v-tr class="text_white">Get a Quote</h3>
      </fBtn>
    </div>
    <div class="separator"></div>
    <div class="flex align_center space_between my-3 column_container">
      <div class="footer_cases w-40 footer_column">
        <h2>CASES</h2>
        <div class="step_separator bg_text1"></div>
        <div class="steps_caroussel">
          <VueSlickCarousel
            @beforeChange="beforeSlideChange"
            v-bind="settings"
            v-if="deepFind(variables,'cases.length')"
            class="flex wrap center"
            ref="casesSlick"
          >
            <div v-for="(cas, index) in deepFind(variables,'cases')" :key="index">
              <div class="steps_head flex align_center end">
                <h3 class="text_primary">{{cas.title}}</h3>
              </div>
              <div class="step_body">
                <p class="h4">{{cas.description}}</p>
              </div>
            </div>
          </VueSlickCarousel>
          <div class="steps_footer flex">
            <div
              class="step_paging pointer mr-2"
              :class="{active:activeSlide==index}"
              @click="changeProjectSlick(index)"
              v-for="(cas, index) in deepFind(variables,'cases')"
              :key="index"
            ></div>
          </div>
        </div>
      </div>
      <div class="credits footer_column w-30" v-if="deepFind(variables,'cases')">
        <h2>CREDITS</h2>
        <p class="h4" v-for="(staf, index) in deepFind(variables,'stafs')" :key="index">
          <span>{{staf.position}}</span>:
          <a :href="staf.social_url" target="blank" class="text_text1">{{staf.displayname}}</a>
        </p>
      </div>
      <div class="tools footer_column w-30" v-if="deepFind(variables,'tools')">
        <h2>TOOLS</h2>
        <div class="icons flex wrap">
          <div
            class="tool_icon mt-2 mr-2"
            v-for="(tool, index) in deepFind(variables,'tools')"
            :key="index"
          >
            <img width="auto" height="auto" :src="api_url+tool.image.url" :alt="tool.name" title="Adobe illustrator" />
          </div>
        </div>
        <div class="creative_fields my-3">
          <h2>CREATIVE FIELDS</h2>
          <p class="h4 my-1">
            <span v-for="(tag, index) in deepFind(variables,'tags')" :key="index">
              {{tag.text}}
              <span v-if="index!=deepFind(variables,'tags').length-1">,</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: { VueSlickCarousel },

  props: {
    variables: {
      type: Object
    },
    preview: {
      type: String
    }
  },
  methods: {
    beforeSlideChange(newVal, next) {
      console.log(newVal, next);

      this.activeSlide = next;
    },
    changeProjectSlick(index) {
      this.$refs["casesSlick"].goTo(index);
    }
  },
  data() {
    return {
      activeSlide: 0,
      settings: {
        dots: false,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        speed: 500
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.footer {
  .call_to_action {
    border-radius: 0;
  }
  .separator {
    border-top: 1px solid map-get($map: $colors, $key: text3);
    margin: 0 -1rem;
  }
  .footer_column {
    height: 20rem;
    padding: 2rem 1.5rem;
    &.footer_cases {
      .step_separator {
        width: 1rem;
        height: 5px;
        border-radius: 5px;
      }
      .step_paging {
        width: 3.75rem;
        height: 7px;
        border-radius: 5px;
        background: map-get($map: $colors, $key: lightGrey);
        &.active {
          background: map-get($map: $colors, $key: primary);
        }
      }
    }
    &.tools {
      .tool_icon {
        width: 2rem;
        height: 2rem;

        img {
          max-width: 90%;
          max-height: 90%;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .column_container {
      flex-wrap: wrap;
      .footer_column {
        width: 100% !important;
        height: auto;
      }
    }
  }
  @media (max-width: 480px) {
    .btns {
      flex-wrap: wrap;
      .btn {
        width: 100% !important;
        margin: 1rem 0;
      }
    }
  }
}
</style>