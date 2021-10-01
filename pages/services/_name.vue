<template>
  <div class="bg_lightGrey">
    <!-- hero section -->
    <section class="hero relative flex align_center">
      <img
        src="~static/img/services/elipse_top.svg"
        class="absolute deco"
        alt="elipse top"
        id="elipseTop"
      />
      <img src="~static/img/services/path_top.svg" class="deco absolute" alt="path" id="pathLeft" />
      <img
        src="~static/img/services/elipse_bottom.svg"
        class="deco absolute"
        alt="elipse bottom"
        id="elipseBottom"
      />
      <div class="flex container align_center relative fill_height hero_content">
        <div class="desc w-50">
          <h1 class="hero_text mb-3 text_white">
            We are focused on
            <br class="br" />your success!
          </h1>
          <p class="my-5 text_white">
            Regardless of how complex or even small your needs are, our dedicated in-house
            team of web developers and project managers will provide you a wide range of web
            application development services to boost, develop, manage and better maintain your
            web material at a reasonable cost.
          </p>
        </div>
        <div class="image flex1 flex align_center center">
          <img src="~static/img/services/machine.svg" alt />
        </div>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Cycle section -->
    <section class="cycle">
      <div class="sub_services bg_white py-5 flex column container relative">
        <div class="intro w-50">
          <div class="top_part flex align_center end pr-5 mb-2">
            <h2 class="mr-3">we provide</h2>
            <div class="separator bg_primary relative"></div>
          </div>
          <div class="title_part pr-5">
            <h1 class="txt_right">Full-Cycle Web Dev Services</h1>
            <p
              class="txt_right"
            >Fiction To Mission is here to take your business to the next level with a high-performance web applications. Our team will support you in developing an app concept, expanding its business possibility, and converting it into an app.</p>
          </div>
          <h4 class="notice text_white bg_primary txt_right py-2 px-5 mt-4">
            We have built all sorts of web applications, from online forms and workflows to
            whole management systems with both big and small projects.
          </h4>
        </div>
        <div class="body flex flex2 pa-5 wrap">
          <subService class="sub_cat" v-for="(item, index) in 7" :key="index"></subService>
        </div>
        <div class="footer mx-5">
          <p>We have a lot of experience developing complex web-based business systems with multiple users and roles and that connect with CRM, Accounting, Inventory, and Other Systems. Our mission is to develop a customized, secure, and scalable system related to your business needs.</p>
        </div>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Technology stack section -->
    <section class="tech_stack container">
      <div class="tech_desc">
        <h1>Technology Stack</h1>
        <p>
          Embrace the latest tech trends in business technology and achieve your goals with us !
          The cutting-edge tools we use allow delivering robust and competitive mobile applications that will boost your business.
          We also carefully choose technologies for each project to meet our clients' highest expectations and business needs.
        </p>
      </div>
      <div class="tech_content mt-5 flex align_center space_between wrap">
        <serviceTech v-for="(item, index) in 5" :key="index" class="bg_white w-45 py-4 px-3 mb-3"></serviceTech>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Our process -->
    <section class="our_process bg_white py-5">
      <div class="container">
        <div class="c_head txt_center">
          <h1>Our Process</h1>
          <p>Embrace the latest tech trends in business technology and achieve your goals with us !</p>
        </div>
        <fStepper :steps="steps"></fStepper>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- why Ftm -->
    <section class="why_us bg_lightGrey py-5">
      <div class="container">
        <div class="c_head">
          <h2>WHY-FTM?</h2>
          <h1>For your web application development services</h1>
        </div>
        <!-- Show only on desktop -->
        <div class="advantages my-4 flex wrap center desktop">
          <advantage v-for="(item, index) in 7" :key="index" class="advantage mr-3 mt-3"></advantage>
        </div>
        <!-- *********************************** -->
        <!-- Show only on mobile -->
        <VueSlickCarousel
          ref="advantageSlick"
          @afterChange="afterAdvantageChange"
          v-bind="advantagesSlickSettings"
          class="advantages my-4 flex wrap center mobile"
        >
          <advantage
            v-for="(item, index) in 7"
            :key="index"
            class="advantage mr-3 mt-3"
            :selected="selectedAdv==index"
          ></advantage>
          <template #prevArrow>
            <div class="custom-arrow prev_arrow">
              <img src="~static/img/icons/arrow_left.png" alt />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-arrow next_arrow">
              <img src="~static/img/icons/arrow_right.png" alt />
            </div>
          </template>
          <template #customPaging>
            <div class="custom-dot my-2"></div>
          </template>
        </VueSlickCarousel>
        <!-- *********************************** -->
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Packages Section -->
    <section class="packages flex column">
      <div class="container flex align_center fill_height flex2">
        <div class="package flex space_between">
          <div class="pack_standards py-5 w-45 flex column space_between">
            <div class="standards_head">
              <h1 class="hero_text text_white">Our Starter Package</h1>
              <p class="text_white">
                Feeling persuaded to work with us and to start your digital transition?
                Discover our packages that are carefully crafted to meet your needs, goals and visions.
              </p>
            </div>
            <div class="standards_list">
              <div class="flex my-3" v-for="(item, index) in 5" :key="index">
                <img src="~static/img/icons/tick.svg" alt="tick" />
                <h4 class="text_white ml-3">Cross Browser Compatibility</h4>
              </div>
            </div>
            <div class="standards_footer">
              <fBtn link to="/" class="talk_btn">
                <h3 class="text_white">Let's talk</h3>
              </fBtn>
            </div>
          </div>
          <div class="pack_details w-35">
            <div class="pack_holder pa-3 flex column">
              <div class="pack_head flex align_center pb-2">
                <img src="~static/img/icons/packBadge.svg" alt="tick" />
                <h2 class="ml-3 text_white">Silver Packge</h2>
              </div>
              <div class="pack_body flex1 py-5">
                <h4
                  class="text_white my-3"
                >This service will help you assess your web application for any vulnerabilities of which a real attacker may exploit, and provide you with a professionally written report including; vulnerability descriptions, exploitation steps, recommendations, root causes and more.</h4>
                <h4
                  class="text_white my-3"
                >You will receive a full report based on low hanging fruit vulnerabilities.</h4>
                <div class="features_list py-2 px-3 bg_white mt-5">
                  <h4 v-for="(item, index) in 5" :key="index">-5 pages</h4>
                </div>
              </div>
              <div class="pack_footer">
                <div class="more_details flex space_between align_center">
                  <h4 class="text_white">30 Days Delivery</h4>
                  <h4 class="text_white">Unlimited Revisions</h4>
                </div>
                <fBtn link to="/" class="fill_width mt-4 mb-3">
                  <h3>($ 500) Continue</h3>
                </fBtn>
                <div class="a text_white txt_center">
                  <u>Do you have any special requirements?</u>
                </div>
              </div>
            </div>
            <nuxt-link to="/" tag="h3" class="mt-3 text_white pointer txt_right">View Portfolio</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Faq's section -->
    <section class="faqs py-5 bg_white">
      <div class="container">
        <h1 class="txt_right mb-4">Frequently Asked Questions</h1>
        <faq class="faq bg_lightGrey pa-2 my-4" v-for="(item, index) in 4" :key="index"></faq>
      </div>
    </section>
    <!-- ********************************* -->
    <!-- Related Services -->
    <section class="related_services bg_white py-4">
      <div class="container">
        <div class="c_head">
          <h1 class="mb-2">We offer you more</h1>
          <h2>We can help you in many other ways</h2>
        </div>
        <div class="flex align_center wrap space_between py-3 my-3">
          <serviceCard
            v-for="(service, index) in services"
            :key="index"
            class="service_card pointer pa-2 my-2"
            :size="114"
            :title="service.title"
            :desc="service.desc"
            :icon="service.icon"
            :alwaysActive="true"
          ></serviceCard>
        </div>
      </div>
    </section>
    <!-- ********************************* -->
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      expanded: false,
      selectedAdv: 0,
      steps: [
        {
          title: "Planning",
          desc:
            "It is the art of fulfilling successfully the different activities of your digital campaigns. That’s how we achieve goals in an efficient way. ",
          icon: "planning",
          link: "#"
        },
        {
          title: " Content creation",
          desc: "We transform your ideas into resonant stories. ",
          icon: "content",
          link: "#"
        },
        {
          title: "Prototyping",
          desc:
            "We aim to create prototypes as realistic as possible, faithfully executed to the pixel.",
          icon: "proto",
          link: "#"
        },
        {
          title: "Web Design",
          desc:
            "We assure high quality web design that makes of your web pages respect your values and your digital identity.",
          icon: "design",
          link: "#"
        },
        {
          title: "Coding",
          desc:
            "Our strong coding skills contribute to a consistent client experience while ensuring high quality digital product.",
          icon: "coding",
          link: "#",
          skills: [
            {
              name: "Experienced team",
              desc:
                "We are focused on bringing value to our customers and on helping them succeed in the marketplace."
            },
            {
              name: "Full-service web",
              desc:
                "We are committed to supporting you over the long term: before, during and after the entire software development process."
            },
            {
              name: "High quality service ",
              desc:
                "You take advantage of our experiences, high quality IT solutions, and the most exciting experience with a long term partner."
            }
          ]
        },
        {
          title: "Quality assurance",
          desc:
            "Our exceptional and rigorous quality assurance methods, guarantee you the excellence of your digital products.",
          icon: "quality",
          link: "#"
        },
        {
          title: "Presentation & launch",
          desc:
            "We offer you exclusive and original presentations and launches ideas.",
          icon: "launch",
          link: "#"
        },
        {
          title: "Support",
          desc:
            "We support you with solutions before, throughout and after the whole process.",
          icon: "support",
          link: "#"
        }
      ],
      services: [
        {
          title: "Digital Marketing",
          desc:
            "Social medias are also tools to make you known and allow you to create a dynamic with your customers by adding a participatory concept.",
          icon: "marketing",
          link: "#"
        },

        {
          title: "Design",
          desc:
            "We help keeping your design and branding up to speed with what your target expects to see and make it more engaged.",
          icon: "design",
          link: "#"
        },

        {
          title: "Ecommerce",
          desc:
            "We help allow you to quickly and simply offer online sales to your customers through innovative and interactive ecommerce websites.",
          icon: "ecommerce",
          link: "#"
        }
      ],
      advantagesSlickSettings: {
        dots: false,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]
      }
    };
  },
  methods: {
    afterAdvantageChange(newVal) {
      this.selectedAdv = newVal;
    }
  }
};
</script>
<style lang="scss" scoped>
//hero part
.hero {
  min-height: 40rem;
  overflow: hidden;
  background: linear-gradient(
    -90deg,
    rgba(51, 51, 51, 1) 0%,
    rgba(135, 84, 84, 1) 100%
  );
  .deco {
    z-index: 1;
  }
  #pathLeft {
    left: calc((100% - 2130px) / 2);
    top: -160px;
  }
  #elipseTop {
    right: calc((100% - 1920px) / 2);
    top: -110%;
    animation: bounce 3s infinite ease-in-out;
  }
  #elipseBottom {
    left: calc((100% - 1920px) / 2);
    bottom: -90%;
  }
  .hero_content {
    z-index: 2;
  }
  .image {
    perspective: 800px;
    img {
      animation: bounce 3s infinite ease-in-out;
    }
  }
  @media (max-width: 1641px) {
    #pathLeft {
      left: calc((100% - 1780px) / 2);
      top: -300px;
    }
    #elipseBottom {
      left: calc((100% - 1700px) / 2);
      bottom: -100%;
    }
    #elipseTop {
      right: calc((100% - 1780px) / 2);
      top: -120%;
    }
  }
  @media (max-width: 1024px) {
    #pathLeft {
      width: 600px;
      height: auto;
      left: calc((100% - 960px) / 2);
      top: -90px;
    }
    #elipseBottom {
      width: 500px;
      height: auto;

      left: calc((100% - 850px) / 2);
      bottom: -40%;
    }
    #elipseTop {
      right: calc((100% - 1150px) / 2);
      top: -56%;
      width: 500px;
      height: auto;
    }
    .desc {
      width: 70% !important;
    }
    .hero_text {
      font-size: 2.6rem;
    }
    .image {
      flex: auto;
      img {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    min-height: 65rem;
    #pathLeft {
      width: 400px;
      height: auto;
      left: calc((100% - 690px) / 2);
      top: -70px;
    }
    #elipseBottom {
      width: 500px;
      height: auto;

      left: calc((100% - 500px) / 2);
      bottom: -20%;
    }
    #elipseTop {
      right: calc((100% - 1020px) / 2);
      top: -27%;
      width: 500px;
      height: auto;
    }
    .hero_content {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      .desc {
        width: 100% !important;
      }
      .hero_text {
        text-align: center;
        font-size: 1.8rem;
        .br {
          display: none;
        }
      }
      p {
        margin: 1rem 0 !important;
        text-align: center;
      }
      .image {
        flex: auto;
        img {
          max-width: 100%;
        }
      }
    }
  }
  @media (max-width: 480px) {
    @media (max-height: 640px) {
      min-height: 640px;
    }
    min-height: 100vh;
    .image {
      flex: auto;
      img {
        max-width: 90% !important;
      }
    }
  }
}
//*************** */
//Process
.cycle {
  min-height: 100vh;
  .separator {
    height: 4px;
    width: 1.5rem;
    border-radius: 15px;
  }
  .sub_services {
    z-index: 3;
    top: -6rem;
    border-radius: 1rem;
    .intro {
      align-self: flex-end;
      .notice {
        margin-right: -1rem;
      }
    }
    .body {
      .sub_cat {
        max-width: 33%;
        height: 16.25rem;
      }
    }
  }
  @media (max-width: 1200px) {
    .intro {
      width: 70% !important;
    }
  }
  @media (max-width: 1024px) {
    .intro {
      width: 80% !important;
    }
    .sub_cat {
      max-width: 20rem !important;
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
    .intro {
      width: 100% !important;
      .top_part {
        flex-direction: row-reverse;
        h2 {
          margin-left: 1rem;
        }
      }
      .title_part {
        padding: 0 !important;
        h1 {
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
      .notice {
        text-align: center;
      }
    }
    .body {
      justify-content: center;
      text-align: center;
      .sub_cat {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !important;
        margin-bottom: 1rem;
      }
    }
    .footer {
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    .notice {
      margin-right: 0 !important;
      padding: 1rem !important;
    }
    .body {
      padding: 1rem !important;
      .sub_cat {
        max-width: 100%;
        height: 16.25rem;
      }
    }
    .footer {
      margin: 0 !important;
    }
  }
}
//Tech stack part

.tech_stack {
  margin-bottom: 6rem;

  .tech_content {
    .tech_card {
      border-radius: 5px;
      .tech_image {
        img {
          margin: 0 5%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .tech_card {
      width: 100% !important;
    }
  }
}
//********************* */
//Our process part

.our_process {
  min-height: 48.75rem;
}
//********************* */
//Why FTM
.why_us {
  min-height: 100vh;
  .advantage {
    height: 13.75rem;
    width: 32.23%;
    border-radius: 5px;
  }
  .custom-arrow {
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !important;
    background: map-get($map: $colors, $key: white);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    &::before {
      display: none !important;
    }
    &.next_arrow {
      right: -3.4rem;
      @media (max-width: 480px) {
        right: calc(5% - 1.4rem);
      }
    }
    &.prev_arrow {
      left: -3.4rem;
      @media (max-width: 480px) {
        left: calc(5% - 1.4rem);
      }
    }
  }
  .custom-dot {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 3px solid map-get($map: $colors, $key: white);
  }
  .slick-active {
    .custom-dot {
      background: map-get($map: $colors, $key: primary);
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
  @media (max-width: 767px) {
    min-height: auto;
  }
  @media (max-width: 480px) {
    .c_head {
      h1 {
        font-size: 1.6rem !important;
      }
    }
    .advantage {
      height: 18.75rem;
    }
  }
}
//********************* */
//Packages part
.packages {
  padding-top: 3rem;
  padding-bottom: 3rem;
  min-height: 100vh;
  background: linear-gradient(#333 15.06%, #875454 100%);
  .package {
    .talk_btn {
      background: transparent;
      border: 1px solid map-get($map: $colors, $key: white);
      min-width: 16.25rem;
    }
    .pack_holder {
      border: 1px solid map-get($map: $colors, $key: white);
      border-radius: 1rem;
      .pack_head {
        border-bottom: 1px solid map-get($map: $colors, $key: white);
      }
    }
  }
  @media (max-width: 1200px) {
    .pack_standards {
      width: 52% !important;
    }
    .pack_details {
      width: 45% !important;
    }
  }
  @media (max-width: 767px) {
    .package {
      flex-wrap: wrap;
      .pack_standards {
        width: 100% !important;
        text-align: center;
        .hero_text {
          font-size: 2.8rem;
        }
        .standards_list {
          .flex {
          }
        }
        .talk_btn {
          width: 100%;
          margin-top: 1.5rem;
        }
      }
      .pack_details {
        width: 100% !important;
      }
    }
  }
}
//********************* */
//Faqs part
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
//********************** */
//related Services
.related_services {
  padding-bottom: 5rem !important;
  .service_card {
    @media (max-width: 1641px) {
      width: 370px;
    }
    @media (max-width: 1024px) {
      transition: none;
      margin: 1rem auto;
      max-width: 450px;
      min-height: 450px;
    }
    @media (max-width: 767px) {
      max-width: 390px;
    }
    @media (max-width: 480px) {
      max-width: 90%;
      min-height: 300px;
    }
    width: 32.23%;
    height: 340px;
    border-radius: 5px;
    transition: 0.5s all;
  }
}
//********************* */
@keyframes bounce {
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-5px);
  }
}
@keyframes smothRotation {
  0% {
    transform: rotateZ(5deg);
  }
  50% {
    transform: rotateZ(-2deg);
  }
  100% {
    transform: rotateZ(5deg);
  }
}
</style>