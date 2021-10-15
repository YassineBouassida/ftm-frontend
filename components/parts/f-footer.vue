<template>
  <footer class="bg_text2 footer fill_width flex column space_between">
    <div class="flex align_start space_between container py-3 wrap">
      <div class="flex1 links_block">
        <h2 class="text_white">Useful links</h2>
        <div class="usefull_links">
          <nuxt-link to="#" class="a text_white my-3" tag="div">Home</nuxt-link>
          <nuxt-link to="#" class="a text_white my-3" tag="div">About</nuxt-link>
          <nuxt-link to="#" class="a text_white my-3" tag="div">Portfolio</nuxt-link>
          <nuxt-link to="#" class="a text_white my-3" tag="div">Services</nuxt-link>
        </div>
      </div>
      <div class="flex1 links_block">
        <h2 class="text_white">Contact Us</h2>
        <p class="text_white subheading">
          Do you want to build something?
          Need
          <br />help figuring it out? We can help!
        </p>
        <h3 class="text_white my-2">Request Free Consultation Here.</h3>
        <h2 class="text_white">Follow us</h2>
        <div class="social_links flex align_center mt-3">
          <a
            class="mr-3"
            aria-label="social"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~static/img/icons/social/facebook.png" alt />
          </a>
          <a
            class="mr-3"
            aria-label="social"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~static/img/icons/social/instagram.png" alt />
          </a>
          <a
            class="mr-3"
            aria-label="social"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~static/img/icons/social/twitter.png" alt />
          </a>
          <a
            class="mr-3"
            aria-label="social"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~static/img/icons/social/linkedin.png" alt />
          </a>
          <a
            aria-label="social"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~static/img/icons/social/youtube.png" alt />
          </a>
        </div>
      </div>
      <div class="flex1 links_block">
        <h2 class="text_white">Come visit us</h2>
        <div class="flex column f_link_container">
          <div class="flex start">
            <div class="mr-3">
              <img
                width="auto"
                height="auto"
                class="mt-3"
                src="~static/img/icons/contact/pin.png"
                alt="pin"
              />
            </div>
            <p class="text_white subheading">
              Av. Hédi Nouira,Sfax El Jadida,
              <br />imm Fourat 3ème étage App. N°306,
              <br />Sfax 3027
            </p>
          </div>
          <div class="flex start">
            <div class="mr-3">
              <img
                width="auto"
                height="auto"
                class="mt-3"
                src="~static/img/icons/contact/msg.png"
                alt="pin"
              />
            </div>
            <p class="text_white subheading">Info@fictiontomission.com</p>
          </div>
          <div class="flex start">
            <div class="mr-3">
              <img
                width="auto"
                height="auto"
                class="mt-3"
                src="~static/img/icons/contact/phone.png"
                alt="pin"
              />
            </div>
            <p class="text_white subheading">(+216) 92 24 33 33</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_part bg_text1">
      <div class="flex align_center space_between container fill_height">
        <h3 class="text_white">Fiction To Mission</h3>
        <div class="static_links flex align_center">
          <nuxt-link to="#" tag="h3" class="pointer text_white mr-4">Privacy policy</nuxt-link>
          <nuxt-link to="#" tag="h3" class="pointer text_white mr-4">Cookies</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
  min-height: 350px;
  .links_block {
    flex-shrink: 0;
    min-width: 350px;
  }
  .bottom_part {
    height: 3.125rem;
  }
  @media (max-width: 1200px) {
    .links_block {
      margin-bottom: 3rem;
      flex: 0;
      * {
        text-align: center;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
      &:first-of-type {
        width: 100%;
        flex: auto;
        h2 {
          text-align: center;
        }
        .usefull_links {
          display: flex;
          justify-content: center;
          div {
            margin-right: 1rem;
            margin-left: 1rem;
          }
        }
      }
    }
    .f_link_container {
      & > .flex {
        justify-content: center;
      }
    }
    .social_links {
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
    .links_block {
      text-align: center;
      min-width: 100%;
    }
    .f_link_container {
      align-items: center;
    }
    .social_links {
      justify-content: center;
    }
  }
  @media (max-width: 480px) {
    .bottom_part > .flex {
      justify-content: center;
    }
    .static_links {
      display: none !important;
    }
  }
}
</style>