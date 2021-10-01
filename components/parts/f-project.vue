<template>
  <div class="project flex align_center">
    <div class="p_cover flex2">
      <img src="~static/img/ideaToSolution.png" alt />
    </div>
    <div class="p_content flex1">
      <h2 class="flex align_baseline space_between mr-5 ml-4">
        Not Just Clients. Partners & Friends.
        <span class="subheading pointer">View</span>
      </h2>
      <div class="p_card elevate_1 pa-3 relative flex align_center bg_white">
        <div class="flex align_center fill_height p_card_container">
          <div class="p_avatar mr-3"></div>
          <div>
            <h2 class="text_primary mb-2">Project Name</h2>
            <p class="mt-2">
              <strong>Tarek Meslameni</strong>: of our partners is what truly defines us, but most importantly their TRUST. Check out some of our Tunisian and international partners we worked with.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.project {
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