<template>
  <div
    :class="{selected:selected}"
    class="advantage mr-3 mt-3 pointer relative bg_white flex align_center"
  >
    <div class="cover bg_primary absolute fill_height fill_width flex center column align_center">
      <div class>
        <img src="~static/img/services/techProviders.svg" alt="tech providers" />
      </div>
      <h2 class="mt-2 text_white">TECHNOLOGY PROVIDERS</h2>
    </div>
    <div class="flex relative adv_content pa-3">
      <div class="tick bg_redLight flex align_center center">
        <img src="~static/img/icons/tick.svg" alt />
      </div>
      <div class="adv_desc ml-3">
        <h2 class="text_primary">SOLUTIONS OVER SERVICES</h2>
        <h4>We provide you innovative and comprehensive solutions developed with the most modern and diverse technologies that we master perfectly. What we do here is providing not just consulting and development services, but versatile solutions for a wide range of business problems.</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
.advantage {
  height: 13.75rem;

  border-radius: 5px;
  overflow: hidden;
  &:hover,
  &.selected {
    .cover {
      transform: translateY(-95%);
      width: 95%;
      margin: 0 2.5%;
    }
  }
  .cover {
    border-radius: 5px;
    z-index: 2;
    transition: 0.5s all;
  }
  .tick {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 50%;
    flex-shrink: 0;
  }
}
@media (max-width: 1641px) {
  .advantage {
    width: 48%;
  }
}
@media (max-width: 1024px) {
  .advantage {
    width: 98%;
  }
}
</style>