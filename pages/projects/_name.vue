<template>
  <div v-if="!this.$apollo.loading">
    <!-- Project hero section -->
    <project-header :variables="deepFind(projects,'0.header')" class="mt-4"></project-header>
    <!-- Project body part -->
    <section class="body container bg_white py-3 mb-4">
      <div v-for="(component, index) in deepFind(projects,'0.component')" :key="index">
        <project-video
          :variables="component"
          class="my-5"
          v-if="component['__typename']=='ComponentProjectPartsVideo'"
        ></project-video>
        <project-entity
          class="my-5"
          :variables="component"
          v-if="component['__typename']=='ComponentProjectPartsEntity'"
        ></project-entity>
        <project-carousel
          class="my-5"
          :variables="component"
          v-if="component['__typename']=='ComponentProjectPartsCarousel'"
        ></project-carousel>
      </div>
    </section>
    <!-- Project footer section -->
    <project-footer
      :preview="deepFind(projects,'0.preview_link')"
      :variables="deepFind(projects,'0.footer')"
      class="mb-4"
    ></project-footer>
  </div>
  <div v-else class="bg_lightGrey loading_page flex align_center center">
    <div class="load_spinner open_spinner"></div>
  </div>
</template>
<script>
import projectQuery from "~/apollo/queries/project/projectDetails";
export default {
  head() {
    return {
      title: this.deepFind(this.projects, "0.seo.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.deepFind(this.projects, "0.seo.description")
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.deepFind(this.projects, "0.seo.keywords")
        },
        {
          hid: "og-title",
          property: "og:title",
          content: this.deepFind(this.projects, "0.seo.title")
        },
        {
          hid: "og-desc",
          property: "og:description",
          content: this.deepFind(this.projects, "0.seo.description")
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            this.api_url + this.deepFind(this.projects,  "0.seo.cover.url")
        },
        {
          hid: "og-url",
          property: "og:url",
          content:
            this.host +
            this.localePath(
              `/projects/${this.deepFind(this.projects, "0.slug")}`
            )
        }
      ]
    };
  },
  apollo: {
    projects: {
      prefetch: true,
      query: projectQuery,
      variables() {
        return { slug: this.$route.params.name, locale: this.$i18n.locale };
      },
      watchLoading: function(isLoading) {
        this.$nextTick(() => {
          if (this.$nuxt && this.$nuxt.$loading) {
            isLoading
              ? this.$nuxt.$loading.start()
              : this.$nuxt.$loading.finish();
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  border-radius: 9px;
}

.body {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
  @media (max-width: 480px) {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
}
</style>