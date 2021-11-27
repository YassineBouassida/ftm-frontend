<template>
  <div class="project flex align_center">
    <div class="p_cover flex2">
      <img :src="api_url+project.image.url" :alt="project.image.name" />
    </div>
    <div class="p_content flex1">
      <h2 class="flex align_baseline space_between mr-5 ml-4">
        Not Just Clients. Partners & Friends.
        <router-link
          :to="localePath(project.project_link)"
          tag="span"
          class="subheading pointer view_project text_primary"
        >View</router-link>
      </h2>
      <div class="p_card elevate_1 pa-3 relative flex align_center bg_white">
        <div class="flex align_center fill_height p_card_container">
          <div
            class="p_avatar mr-3"
            :style="{backgroundImage:`url(${api_url + project.client.avatar.url})`}"
          ></div>
          <div>
            <h2 class="text_primary mb-2 flex align_center space_between">
              {{project.name}}
              <router-link
                :to="localePath(project.project_link)"
                tag="span"
                class="subheading pointer view_link text_primary"
              >View</router-link>
            </h2>
            <p class="mt-2">
              <strong>{{project.client.name}}</strong>
              : {{project.quote}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: Object
  }
};
</script>
<style lang="scss" scoped>
.project {
  .view_link {
    visibility: hidden;
  }
  .p_content {
    & > h2 {
      position: relative;
      bottom: -1rem;
    }
  }
  .p_card {
    min-height: 16.875rem;
    min-width: 620px;
    @media (max-width: 1440px) {
      min-width: 530px;
    }
    top: 2rem;
    left: -2rem;
  }
  .p_cover {
    max-width: 60rem;
    img {
      width: 100%;

      max-height: 19.5rem;
      object-fit: cover;
      object-position: center;
    }
  }
  .p_avatar {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 9.5rem;
    height: 9.5rem;
    @media (max-width: 1440px) {
      width: 7.5rem;
      height: 7.5rem;
    }
    border-radius: 50%;
    border: 1px solid map-get($map: $colors, $key: primary);
    flex-shrink: 0;
  }
  .view_project,
  .view_link {
    text-decoration: underline;
  }
}
@media (max-width: 1200px) {
  .project {
    flex-wrap: wrap;
    .p_cover {
      width: 100%;
      max-width: 100%;
      flex: auto;
    }
    .p_content {
      & > h2 {
        margin-top: 0rem;
        margin-bottom: 0rem;
        margin-right: 1rem !important;
        margin-left: 1rem !important;
        padding: 1rem !important;
        bottom: 2.5rem;
        z-index: 3;
      }
    }
    .p_card {
      top: -100px;
      left: 0;
      z-index: 2;
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
}
@media (max-width: 767px) {
  .project {
    .view_link {
      visibility: visible;
    }
  }
  .p_content {
    & > h2 {
      display: none !important;
    }
  }
  .p_card {
    top: -50px !important;
    min-width: auto !important;
    .p_card_container {
      flex-wrap: wrap;
      .p_avatar {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>