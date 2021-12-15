<template>
  <footer
    itemscope
    itemtype="https://schema.org/Organization"
    class="bg_white footer fill_width flex column space_between"
  >
    <div class="flex align_start space_between container py-5 wrap">
      <div class="flex1 links_block useful_link">
        <h2 class="text_text2" v-tr>Useful links</h2>
        <div class="usefull_links">
          <nuxt-link :to="localePath('/')" class="a text_text2 my-3 pointer" tag="div" v-tr>Home</nuxt-link>
          <nuxt-link
            :to="localePath('/about')"
            class="a text_text2 my-3 pointer"
            tag="div"
            v-tr
          >About</nuxt-link>
          <nuxt-link
            :to="localePath('/projects')"
            class="a text_text2 my-3 pointer"
            tag="div"
            v-tr
          >Samples</nuxt-link>
          <nuxt-link
            :to="localePath('/services')"
            class="a text_text2 my-3 pointer"
            tag="div"
            v-tr
          >Services</nuxt-link>
        </div>
      </div>
      <div class="flex1 links_block services">
        <h2 class="text_text2" v-tr>Services</h2>
        <div class="usefull_links">
          <nuxt-link
            :to="localePath(`/services/${service.slug}`)"
            class="a text_text2 my-3 pointer"
            tag="div"
            v-for="(service, index) in services"
            :key="index"
          >{{service.titleDisplay}}</nuxt-link>
        </div>
      </div>
      <div class="flex1 links_block contact_us">
        <h2 class="text_text2" v-tr>Keep in touch</h2>
        <p class="text_text2 subheading">
          <span v-tr>Do you want to build something? Need</span>
          <br />
          <span v-tr>help figuring it out? We can help!</span>
        </p>
        <h3 class="text_text2 my-2" v-tr>Request Free Consultation Here.</h3>
        <h2 class="text_text2" v-tr>Follow us</h2>
        <div class="social_links flex align_center mt-3">
          <a
            class="mr-3"
            aria-label="social"
            href="https://www.facebook.com/FictionToMission"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="auto" height="auto" src="~static/img/icons/social/facebook_dark.png" alt />
          </a>
          <a
            class="mr-3"
            aria-label="social"
            href="https://www.instagram.com/fictiontomission/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="auto" height="auto" src="~static/img/icons/social/instagram_dark.png" alt />
          </a>
          <a
            class="mr-3"
            aria-label="social"
            href="https://twitter.com/fiction2mission"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="auto" height="auto" src="~static/img/icons/social/twitter_dark.png" alt />
          </a>
          <a
            class="mr-3"
            aria-label="social"
            href="https://www.linkedin.com/company/fictiontomission"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="auto" height="auto" src="~static/img/icons/social/linkedin_dark.png" alt />
          </a>
          <a
            aria-label="social"
            href="https://www.youtube.com/channel/UChHAp1oCk8idA7TQ3uD4ndQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="auto" height="auto" src="~static/img/icons/social/youtube_dark.png" alt />
          </a>
        </div>
      </div>
      <div class="flex1 links_block about_us">
        <fLogo></fLogo>
        <p
          class="subheading text_text2"
          v-tr
        >Our mission is to find optimal and innovative solutions for the greatest satisfaction of our clients with the help of our highly qualified</p>
        <div class="flex column f_link_container">
          <div class="flex start">
            <p class="my-1" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
              Address:
              <span itemprop="streetAddress">Av. Hédi Nouira,Sfax El Jadida,</span>
              <br />
              <span itemprop="addressLocality">imm Fourat 3ème étage App. N°306</span> ,
              <br />
              <span itemprop="addressRegion">Sfax</span>
              <span itemprop="postalCode">3027</span>
            </p>
          </div>
          <div class="flex start">
            <p class="text_text2 my-1">
              Email:
              <a class="text_text2" href="mailto:Info@fictiontomission.com">
                <span itemprop="email">Info@fictiontomission.com</span>
              </a>
            </p>
          </div>
          <div class="flex start">
            <p class="text_text2 my-1">
              Phone:
              <a
                href="tel:+216-92-243-333"
                itemprop="telephone"
                class="text_text2"
              >(+216) 92 243 333</a> -
              <a href="tel:+216-92-101-333" class="text_text2">(+216) 92 101 333</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_part bg_text1">
      <div class="flex align_center space_between container fill_height">
        <router-link :to="localePath('/')" tag="h3" class="text_white pointer">Fiction To Mission</router-link>
        <p>
          <span class="text_white">© Copyright {{new Date().getFullYear()}} FTM</span>
        </p>
        <div class="static_links flex align_center">
          <nuxt-link
            :to="localePath('/privacy-policy')"
            tag="h3"
            class="pointer text_white mr-4"
          >Privacy policy</nuxt-link>
          <nuxt-link :to="localePath('/cookies')" tag="h3" class="pointer text_white mr-4">Cookies</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import servicesQuery from "~/apollo/queries/home/services";

export default {
  apollo: {
    services: {
      prefetch: true,
      variables() {
        return { locale: this.$i18n.locale };
      },
      query: servicesQuery,
      watchLoading: function(isLoading) {
        this.$nextTick(() => {
          if (this.$nuxt && this.$nuxt.$loading) {
            isLoading
              ? this.$nuxt.$loading.start()
              : setTimeout(() => this.$nuxt.$loading.finish(), 1500);
          }
        });
      }
    }
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json"
        }
      ]
    };
  },
  data() {
    return {
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Fiction to mission",
        email: "Info@fictiontomission.com",
        image:
          "https://server.fictiontomission.com//uploads/Groupe_36_00a014254c.png",

        url: "https://www.fictiontomission.com",
        telephone: "+21692101333",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Hédi Nouira,Sfax El Jadida",
          addressLocality: "imm Fourat 3ème étage App. N°306",
          addressRegion: "Sfax",
          postalCode: "3027",
          addressCountry: "TN"
        },
        logo:
          "https://server.fictiontomission.com/uploads/logo_schema_e70f7d93b0.png",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.73948578898038,
          longitude: 10.756593153971355
        },
        sameAs: [
          "https://www.facebook.com/FictionToMission",
          "https://twitter.com/fiction2mission",
          "https://www.instagram.com/fictiontomission/",
          "https://www.youtube.com/channel/UChHAp1oCk8idA7TQ3uD4ndQ",
          "https://www.linkedin.com/company/fictiontomission",
          "https://www.pinterest.fr/FictionToMission/",
          "https://fictiontomission.com"
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.rtl {
  .social_links a:last-of-type {
    margin-right: 1rem;
  }
}
.footer {
  min-height: 350px;
  & > .flex {
    padding: 90px 0 !important;
  }
  .links_block {
    flex-shrink: 0;
    min-width: 350px;
  }
  .bottom_part {
    height: 3.125rem;
  }
  @media (max-width: 1600px) {
    .links_block {
      flex-shrink: 0;
      min-width: 50%;
      margin-bottom: 3rem;
    }
    .useful_link {
      order: 1;
    }
    .services {
      order: 3;
    }
    .contact_us {
      order: 4;
    }
    .about_us {
      order: 2;
    }
  }
  @media (max-width: 1024px) {
    .about_us {
      order: 1;
      min-width: 100%;
      .subheading {
        padding: 0 8px;
      }
    }
    .useful_link {
      order: 2;
    }
    .services {
      .usefull_links {
        flex-wrap: wrap;
      }
      order: 4;
    }
    .contact_us {
      order: 3;
    }

    .links_block {
      min-width: 100%;
      margin-bottom: 3rem;
      flex: 0;
      * {
        text-align: center;
      }
      // &:last-of-type {
      //   margin-bottom: 0;
      // }
      &.useful_link,
      &.services {
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
  @media (max-width: 660px) {
    .static_links {
      display: none !important;
    }
  }
}
</style>