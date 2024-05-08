<template>
  <div
    class="video relative"
    v-if="!deepFind(variables,'iframe')"
    @mouseenter="hovered=true"
    @mouseleave="hovered=false"
  >
    <video
      ref="video"
      :src="api_url+ deepFind(variables,'video.url')"
      :poster="api_url+ deepFind(variables,'poster.url')"
      :alt="deepFind(variables,'title')"
      controls
      @ended="onEnd"
    ></video>
    <!-- Play button -->
    <div v-if="!playing" class="overlay_light flex align_center center">
      <img
        @click="onPlay"
        class="pointer video_btn"
        src="~static/img/projects/videoBtn.png"
        alt="logo"
      />
    </div>
    <!-- Pause button -->
    <div v-else-if="hovered&&!ended" class="overlay_light flex align_center center">
      <img
        @click="onPause"
        class="pointer video_btn"
        src="~static/img/projects/pauseBtn.png"
        alt="logo"
      />
    </div>
    <!-- Reload button -->
    <div v-if="ended" class="overlay_light flex align_center center">
      <img
        @click="onReload"
        class="pointer video_btn"
        src="~static/img/projects/reload.png"
        alt="logo"
      />
    </div>
  </div>
  <div class="video relative" v-else @mouseenter="hovered=true" @mouseleave="hovered=false">
     <h2 class="mb-3" v-html="deepFind(variables,'title')"></h2>
    <p class="mb-3" v-html="deepFind(variables,'description')"></p>
    <iframe
      width="560"
      height="315"
      :src="deepFind(variables,'iframe_link')"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
export default {
  props: {
    variables: {
      type: Object
    }
  },
  data() {
    return {
      playing: false,
      hovered: false,
      ended: false
    };
  },
  methods: {
    onPlay() {
      this.$refs.video.play();
      this.playing = true;
    },
    onPause() {
      this.$refs.video.pause();
      this.playing = false;
    },
    onEnd() {
      this.ended = true;
    },
    onReload() {
      this.$refs.video.load();
      this.ended = false;
      this.playing = false;
      this.onPlay();
    }
  }
};
</script>
<style lang="scss" scoped>
.video {
  height: auto;
  video,
  iframe {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  iframe {
    min-height: 550px;
  }
  .video_btn {
    pointer-events: auto !important ;
    &:hover {
      opacity: 0.9;
    }
  }
  @media (max-width: 767px) {
    .video_btn {
      width: 10rem !important;
    }
    iframe {
      min-height: 315px;
    }
  }
}
</style>