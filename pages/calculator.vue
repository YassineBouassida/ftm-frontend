<template>
  <div>
    <!-- Hero section  -->
    <section class="hero container bg_white py-3">
      <div class="relative image pa-5 flex align_center">
        <h1 class="hero_text text_white">
          WEBSITE COST
          <br />CALCULATOR
        </h1>
      </div>
      <div class="my-3">
        <h2>Designing a New Website? Let Our Intelligent Widget Calculate the Cost For You</h2>
        <p>Every business is unique and so is their website. To help you get the best price for your new website, we've created an online calculator. It will give you a good indication of what the cost of your new site may be. Within minutes you can get an idea of the all-inclusive price for your new, easy-to-use website.</p>
        <h2>Ready for a quote?</h2>
      </div>
    </section>
    <!-- Calculator widget section  -->

    <section class="my-3 container bg_white px-0 calc_widget">
      <nuxt-child />
    </section>
    <!-- Seo and how it works -->
    <section class="seo_hiw container py-3 bg_white my-3">
      <article class="my-5 pb-5 flex align_center space_between seo_part">
        <div class="strategy_container">
          <h3 class="txt_right my-2 strategy_text">SEO and marketing strategy</h3>
          <div class="strategy_img pa-3 flex align_center center">
            <img src="~static/img/calculator/strategy@2x.png" alt="marketing strategy" />
          </div>
        </div>
        <div class="seo_text w-45">
          <h1>
            I pinky promise this will actually
            give you an estimate.
          </h1>
          <p
            class="my-5"
          >There are also optional SEO services you can pay monthly for that will get your business found on Google and attract most customers to your new website. This is only suitable for customers who are looking to grow their business long term and applies to around 20% of companies who get websites from us.</p>
          <h2>FTM give a diversity of services for all kind of industries</h2>
          <div class="seo_actions flex align_center end mt-5">
            <fBtn
              link
              :to="localePath('/services/seo-optimization')"
              class="pa-3 bg_lightGrey flex align_center center f_link text_white mx-2"
            >
              <h3 v-tr class="text_text1">SERVICES</h3>
            </fBtn>
            <fBtn
              link
              :to="localePath('/services/seo-optimization')"
              class="pa-3 bg_primary flex align_center center f_link text_white mx-2"
            >
              <h3 v-tr class="text_white">SEE SEO PLAN</h3>
            </fBtn>
          </div>
        </div>
      </article>
      <article class="how_it_works my-5">
        <h1>Find out how our calculator works</h1>
        <p>A common question web design companies get asked is “are there any monthly costs for my website?” the answer is yes. You will have to pay a nominal fee for hosting on a monthly basis. You will also have to pay for your domain name, however this can be purchased on a yearly basis – or you can pay up front for 5 years. Buying your domain name for an extended period of time usually works out cheaper so most business owners do that.</p>
        <div class="flex align_center space_between my-5 steps_container">
          <div class="txt_center steps flex column align_center w-30">
            <img src="~static/img/calculator/steps.svg" alt="Calculator steps" />
            <h2 class="mt-4">10 steps</h2>
            <p class="my-2">
              There are also optional SEO services you can pay
              monthly for that will get your business found on
            </p>
          </div>
          <div class="txt_center steps flex column align_center w-30">
            <img src="~static/img/calculator/organization.svg" alt="Calculator organizations" />
            <h2 class="mt-4">Organized</h2>
            <p class="my-2">
              There are also optional SEO services you can pay
              monthly for that will get your business found on
            </p>
          </div>
          <div class="txt_center steps flex column align_center w-30">
            <img src="~static/img/calculator/tasks.svg" alt="Calculator tasks" />
            <h2 class="mt-4">Real time Estimation</h2>
            <p class="my-2">
              There are also optional SEO services you can pay
              monthly for that will get your business found on
            </p>
          </div>
        </div>
      </article>
      <article class="my-5 faqs_part">
        <h1 class="txt_right">Frequently Asked Questions</h1>
        <faq
          class="faq bg_lightGrey pa-2 my-4"
          :faq="faq"
          v-for="(faq, index) in faqs"
          :key="index"
          :expanded="expanded==index"
          @expand="expanded==index?expanded=null:expanded=index"
        ></faq>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      faqs: [
        {
          answer:
            "Of course! Keep in mind, though, that doing so increases the project's costs. Crafting a compelling, striking, and creative video takes time! So it's best not to rush the process if possible. ",
          question: "How much does a video cost?"
        },
        {
          answer:
            "Of course! Keep in mind, though, that doing so increases the project's costs. Crafting a compelling, striking, and creative video takes time! So it's best not to rush the process if possible. ",
          question: "How long does it take?"
        },
        {
          answer:
            "Of course! Keep in mind, though, that doing so increases the project's costs. Crafting a compelling, striking, and creative video takes time! So it's best not to rush the process if possible. ",
          question: "Who owns the rights to the app?"
        }
      ],
      expanded: null
    };
  }
};
</script>
<style lang="scss" scoped>
.hero {
  margin-top: 3.2rem;
  margin-bottom: 1rem;
  border-radius: 9px;
  .image {
    background-image: url("~static/img/calculator/Process.png");
    width: 100%;
    height: 320px;
    background-size: cover;
    background-position: center;
    border-radius: 9px;
  }
}
.calc_widget {
  height: auto;
  border-radius: 9px;
}
.seo_hiw {
  border-radius: 9px;
  .strategy_img {
    background: linear-gradient(#333 15.06%, #875454 100%);
    border-radius: 9px;
    width: 36.25rem;
    height: 32.125rem;
    img {
      max-width: 90%;
      max-height: 90%;
    }
  }
  .faqs {
    padding-top: 5rem !important;
    min-height: 50vh;
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
  }
}
@media (max-width: 1600px) {
  .hero {
    .hero_text {
      font-size: 2.8rem;
    }
    .image {
      background-image: url("~static/img/calculator/Calculator-m.png");
      padding: 1.5rem !important;
    }
  }
}
@media (max-width: 1200px) {
  .seo_part {
    flex-wrap: wrap;
    justify-content: center;
    .strategy_text {
      display: none;
    }
    .strategy_container,
    .strategy_img {
      width: 100%;
    }
    .seo_text {
      width: 100% !important;
      text-align: center;
      margin-top: 2rem;

      .seo_actions {
        justify-content: center;
      }
    }
  }

  .how_it_works {
    text-align: center;
  }
}
@media (max-width: 1024px) {
  .hero {
    .hero_text {
      font-size: 2.8rem;
    }
    .image {
      background-image: url("~static/img/calculator/Calculator-s.png");
      background-position: right;
    }
  }
  .steps_container {
    flex-wrap: wrap;
    .steps {
      width: 100% !important;
      margin-bottom: 1.5rem;
    }
  }
}
@media (max-width: 767px) {
  .hero {
    text-align: center;
    .hero_text {
      text-align: center;
      width: 100%;
    }
    .image {
      background-image: url("~static/img/calculator/Calculator-s.png");
      background-position: bottom right;
      height: 380px;
      align-items: flex-start;
    }
  }
  .calc_widget {
    padding: 1rem !important;
    &::v-deep img {
      max-width: 90%;
    }
  }

  .strategy_img {
    img {
      max-width: 90%;
    }
  }
}
</style>