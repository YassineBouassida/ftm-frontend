<template>
  <div class="faq bg_lightGrey pa-2 my-4" :class="{expanded:expanded}">
    <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="question pointer flex space_between align_center mb-2" @click="expanded=!expanded">
      <h2 itemprop="name" class="my-2">{{faq.question}}</h2>
      <div class="expand_arrow bg_primary pa-2">
        <arrow class="arrow" :dark="!expanded"></arrow>
      </div>
    </div>
    <div class="answer bg_white pa-3" v-show="expanded" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p class="h4" itemprop="text" v-html="faq.answer"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    faq: {
      type: Object
    }
  },
  data() {
    return {
      expanded: false
    };
  }
};
</script>
<style lang="scss" scoped>
.faq {
  &.expanded {
    .expand_arrow {
      background: map-get($map: $colors, $key: white) !important;

      .arrow {
        transform: rotate(0deg);
      }
    }
  }
  border-radius: 7px;
  .expand_arrow {
    border-radius: 5px;
    .arrow {
      transition: 0.5s all;
      transform: rotate(180deg);
    }
  }
  .answer {
    transition: 0.5s all;
    min-height: 6rem;
  }
}
</style>