<template>
  <section class="hero container bg_white pa-3 mb-4">
    <div
      v-if="variables.cover"
      class="hero_img relative"
      :style="{backgroundImage:`url(${api_url}${ deepFind(variables,'cover.url')})`}"
    >
      <div class="overlay_light flex align_center center">
        <img
          class="project_logo"
          :src="api_url+deepFind(variables,'logo.url')"
          alt="logo"
          width="auto"
          height="auto"
        />
      </div>
    </div>
    <div class="flex align_start space_between pa-5 project_details">
      <div class="w-50">
        <h2>{{deepFind(variables,'title')}}</h2>
        <p class="h4">{{deepFind(variables,'description')}}</p>
      </div>
      <div class="w-40">
        <div class="field">
          <h2>Date</h2>
          <p class="h4">{{deepFind(variables,'start_date')}}</p>
        </div>
        <div class="field" v-if="deepFind(variables,'industries')">
          <h2>Customer-Industries</h2>
          <p class="h4">
            <span v-for="(industry, index) in deepFind(variables,'industries')" :key="index">
              {{industry.name}}
              <span v-if="index!=deepFind(variables,'industries').length-1">,</span>
            </span>
          </p>
        </div>
        <div class="field" v-if="deepFind(variables,'website')">
          <h2>website</h2>
          <a
            :href="deepFind(variables,'website')"
            class="h4"
            target="blank"
          >{{deepFind(variables,'website')}}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    variables: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.hero {
  .hero_img {
    height: 31.25rem;
    background-size: cover;
    background-position: center center;
    border-radius: 25px;
    .overlay_light {
      display: none !important;
    }
  }
  .project_logo  {
    height: 12rem;
  }

  @media (max-width: 767px) {
    .project_details {
      flex-wrap: wrap;
      .w-50 {
        width: 100% !important;
      }
      .w-40 {
        width: 100% !important;
      }
    }
  }
  @media (max-width: 480px) {
    min-height: auto;
    .project_details {
      padding: 1rem !important;
    }
  }
}
</style>