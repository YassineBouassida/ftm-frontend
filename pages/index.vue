<template>
  <div class="home">
    <!-- Hero section -->
    <section class="hero_container">
      <div class="hero flex container align_center">
        <div class="desc">
          <h1 class="hero_text mb-3 desktop">
            We are focused on
            <br />your success!
          </h1>
          <p class="my-5">
            Your project is complete but misses something?
            <br />You only have an idea but still not concreted?
          </p>
          <h2 class="my-5">
            Get ready for your next adventure
            with Fiction To Mission!
          </h2>
          <div class="flex ml-5 call_to_action_container">
            <fBtn link to="/" class="w-60 call_to_action bg_primary f_link text_white">
              <h3 class="text_white">GET APPOINTMENT</h3>
            </fBtn>
          </div>
        </div>
        <div>
          <h1 class="hero_text mb-3 mobile">
            We are focused on
            <br />your success!
          </h1>
          <hero class="image"></hero>
        </div>
      </div>
    </section>

    <!-- Cases section -->

    <section class="cases container flex column small_container">
      <div class="c_head txt_center">
        <h1>We exist to help you improve your business</h1>
        <p>Whether you are in the process of creating a website or you are looking to boost the attendance of your site, Fiction To Mission can offer you a personalized solution, adapted to your needs.</p>
      </div>
      <!-- First Case  -->

      <div class="case txt_right flex1 flex align_center space_between" id="case1">
        <div class="text_side mr-4">
          <div class="desc">
            <h2 class="text_primary mb-3">In case of not having a website</h2>
            <h4>
              Your website can be available 24/7/365 even when you’re not, it will attract new customers
              to your business, make you more money and add instant credibility to your project.
            </h4>
          </div>
          <div class="desktop notice bg_lightGrey pa-3 flex align_center">
            <p
              class="subheading pr-4"
            >Did you know that 81% of people research a business or service on the internet prior to making a purchase decision ! If you don’t have a website, you have no chance at capturing a share of this market.</p>
            <img src="~static/img/notice.png" alt="notice" />
          </div>
        </div>
        <div>
          <img src="~static/img/case1.png" alt="no website" class="fill_width img" />
        </div>
      </div>
      <!-- Second Case  -->
      <div class="case flex flex2 txt_left align_center center" id="case2">
        <div>
          <img src="~static/img/case2.png" alt="no website" class="fill_width img" />
        </div>
        <div class="text_side ml-4">
          <div class="desc">
            <h2 class="text_primary mb-3">In case of not having a website</h2>
            <h4>
              Your website can be available 24/7/365 even when you’re not, it will attract new customers
              to your business, make you more money and add instant credibility to your project.
            </h4>
          </div>
          <div class="desktop notice bg_lightGrey pa-3 flex align_center">
            <img src="~static/img/notice.png" alt="notice" />
            <p
              class="subheading pl-4"
            >Did you know that 81% of people research a business or service on the internet prior to making a purchase decision ! If you don’t have a website, you have no chance at capturing a share of this market.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- About us section -->

    <section class="about bg_lightGrey">
      <div class="container">
        <div class="c_head txt_center">
          <h1>About Us</h1>
          <p>Our mission is to find optimal and innovative solutions for the greatest satisfaction of our clients with the help of our highly qualified and experienced team that combines passion, know-how and professionalism.</p>
        </div>
        <div class="about_table flex">
          <div class="w-50 p1">
            <div class="flex h-50">
              <div class="w-50 h-100 p11 part bg_primary">
                <fiveStars class="part_svg"></fiveStars>
              </div>
              <div class="w-50 h-100 p12 part bg_white pa-3 tablette_and_down">
                <div class="text">
                  <h2>Research Team</h2>
                  <p
                    class="subheading"
                  >Do not worry about TOMORROW. Our team is committed to keep up to date and develop creative ideas every day to offer you customizable, scalable and flexible websites.</p>
                </div>
              </div>
              <!-- Only on small mobiles -->
              <div class="w-50 h-100 p13 part bg_white pa-3 tablette_and_up">
                <div class="text">
                  <h2>Experience</h2>
                  <p
                    class="subheading"
                  >Fiction To Mission has a Tunisian nationality and an international passport ! Here’s some of the projects we worked on and check out our most exciting experiences.</p>
                </div>
              </div>
              <!-- ********************* -->
            </div>
            <div class="flex h-50">
              <div class="w-50 h-100 p13 part bg_white pa-3 tablette_and_down">
                <div class="text">
                  <h2>Experience</h2>
                  <p
                    class="subheading"
                  >Fiction To Mission has a Tunisian nationality and an international passport ! Here’s some of the projects we worked on and check out our most exciting experiences.</p>
                </div>
              </div>
              <!-- Only on small mobiles -->
              <div class="w-50 h-100 p12 part bg_white pa-3 tablette_and_up">
                <div class="text">
                  <h2>Research Team</h2>
                  <p
                    class="subheading"
                  >Do not worry about TOMORROW. Our team is committed to keep up to date and develop creative ideas every day to offer you customizable, scalable and flexible websites.</p>
                </div>
              </div>
              <!-- ********************* -->
              <div class="w-50 h-100 p14 part bg_text1">
                <book class="part_svg"></book>
              </div>
            </div>
          </div>
          <div class="w-50 p2">
            <div class="fill_width h-80 p21 part bg_primary">
              <presenter class="part_svg"></presenter>
            </div>
            <div class="fill_width p22 h-20 part bg_white pa-3">
              <p
                class="subheading"
              >Today, Fiction To Mission operates in various activities ranging from website creation to mobile app development and social media communication.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services section -->
    <section class="services container">
      <div class="c_head txt_center">
        <h1>Services we provide</h1>
        <p>We offer the full spectrum of digital services to help your business grow successfully.</p>
      </div>
      <!-- ***************Only on desktop and tablet************** -->
      <div class="flex wrap center desktop">
        <serviceCard
          v-for="(service, index) in services"
          :key="index"
          class="service_card pointer pa-2"
          :size="114"
          :title="service.title"
          :desc="service.desc"
          :icon="service.icon"
        ></serviceCard>
      </div>
      <!-- ***************************** -->
      <!-- ***************Only on mobiles************** -->
      <VueSlickCarousel
        v-bind="servicesSlickSettings"
        class="flex wrap center mobile"
        v-if="services.length"
      >
        <serviceCard
          v-for="(service, index) in services"
          :key="index"
          :alwaysActive="true"
          class="service_card pointer pa-2"
          :size="114"
          :title="service.title"
          :desc="service.desc"
          :icon="service.icon"
        ></serviceCard>
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
      </VueSlickCarousel>
      <!-- ***************************** -->
    </section>
    <!-- How we do it section -->
    <section class="howItWorks bg_lightGrey">
      <div class="container">
        <div class="c_head txt_center">
          <h2>How we do it ?</h2>
          <h1 class="my-4">TECHNOLOGIES THAT WILL MOVE YOU TO THE TOP</h1>
          <p>
            Fiction To Mission advises you and guides you towards the best web strategy to adopt according to your
            industry, the values ​​of your company and your target.
          </p>
        </div>
        <fStepper :steps="steps"></fStepper>
      </div>
    </section>
    <!-- Idea To Solution -->
    <section class="ideaToSolution relative flex column">
      <div class="spark container relative flex2">
        <div class="w-50 absolute itsDesc">
          <h1 class="text_white mb-4">Fiction To Mission - Idea to solution</h1>
          <h2 class="text_white mb-3">Spark an idea and build a fire</h2>
          <h4
            class="text_white"
          >We turn your ideas into successful projects by incorporating your vision. We like challenges that require technical solutions and original content. Our company develops both turnkey and custom solutions. Both are acceptable, depending on your goals and your budget.</h4>
        </div>
        <div class="absolute features flex column align_center">
          <div
            class="flex column align_center"
            v-if="i==selectedIdea"
            v-for="(idea, i) in ideas"
            :key="i"
          >
            <img src="~static/img/key.png" alt="key" />
            <h3 class="text_white my-2 mt-4">{{idea.title}}</h3>
            <h4 class="px-2 text_white txt_center my-2">{{idea.desc}}</h4>
          </div>
          <div class="indicators flex align_center center mt-3">
            <span
              :class="{active:selectedIdea==index}"
              class="mr-2 pointer"
              v-for="(indicator, index) in ideas"
              :key="index"
              @click="selectedIdea=index"
            ></span>
          </div>
        </div>
      </div>
    </section>
    <!-- Technologies Section -->
    <section class="technologies container small_container flex align_center wrap">
      <h2 class="flex0 fill_width txt_center mr-4">Technologies</h2>
      <VueSlickCarousel
        v-bind="slickSettings"
        v-if="technologies.length"
        class="flex2 tech_list flex align_center end"
      >
        <div
          class="tech bg_lightGrey flex align_center center ml-4"
          v-for="(tech, index) in technologies"
          :key="index"
          :title="tech.title"
        >
          <img :src="require(`~/static/img/icons/techs/${tech.icon}`)" :alt="tech.title" />
        </div>
      </VueSlickCarousel>
    </section>
    <!-- Projects Section -->
    <section class="projects bg_lightGrey relative flex">
      <div class="vertical_name flex align_baseline">
        <h1 class="text_white">#PORTFOLIO</h1>
      </div>
      <div class="projects_body">
        <div class="project_head w-50 mb-5">
          <h1>Our latest cases</h1>
          <p>The success of our partners is what truly defines us, but most importantly their TRUST. Check out some of our Tunisian and international partners we worked with.</p>
        </div>
        <VueSlickCarousel
          @beforeChange="beforeProjectChange"
          ref="projectSlick"
          v-bind="projectSlickSettings"
          v-if="projects.length>1"
          class="align_center flex projects_list"
        >
          <fProject v-for="(project, index) in projects" :key="index"></fProject>
        </VueSlickCarousel>
        <div class="project_footer flex mt-2">
          <div class="empty flex2"></div>
          <div class="mr-5 footer_desc flex align_center space_between flex1">
            <h3>Want to be one of them ? Join us !</h3>
            <div class="indicators flex align_center center">
              <span
                @click="changeProjectSlick(index)"
                :class="{active:selectedProject==index}"
                class="mr-2 pointer"
                v-for="(project, index) in projects"
                :key="index"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      selectedTab: 0,
      activeStep: 0,
      selectedIdea: 0,
      selectedProject: 0,
      services: [
        {
          title: "Digital Marketing",
          desc:
            "Social medias are also tools to make you known and allow you to create a dynamic with your customers by adding a participatory concept.",
          icon: "marketing",
          link: "#"
        },
        {
          title: " Web Development",
          desc:
            "We conceive custom-made websites based on technologies and development frameworks that will offer maximum interactivity while fully respecting your needs and specifications",
          icon: "webDev",
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
          title: "SEO optimization",
          desc:
            "We implement your acquisition and reputation strategies to make your business visible in the first pages of search engine results.",
          icon: "seo",
          link: "#"
        },
        {
          title: "Ecommerce",
          desc:
            "We help allow you to quickly and simply offer online sales to your customers through innovative and interactive ecommerce websites.",
          icon: "ecommerce",
          link: "#"
        },
        {
          title: "Showcase",
          desc:
            "We reinforce your presence and visibility on the web, we help strengthen your brand image and reputation with potential customers by creating fascinating showcase websites.",
          icon: "showcase",
          link: "#"
        },
        {
          title: "Branding",
          desc:
            "We build identities as powerful communication vectors that must be embodied in each of your communication support. It will give you massive growth and raving fans",
          icon: "branding",
          link: "#"
        },
        {
          title: "Content creating",
          desc:
            "We create useful content to develop your audience (blogs, social media posts, infographics, emailing etc.)",
          icon: "content",
          link: "#"
        }
      ],
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
      ideas: [
        {
          title: "turnKey",
          desc:
            "Ready-to-go, full package solutions which are easily deployed or implemented in your business. They are quickly built and they meet most of your needs with lower risks."
        },
        {
          title: "From scratch",
          desc:
            "Personalized solution for your business through new technologies just to provide a cohesive solution to a your problem."
        }
      ],
      technologies: [
        { title: "Angular", icon: "angular.svg" },
        { title: "CSS", icon: "css.svg" },
        { title: "Flutter", icon: "flutter.svg" },
        { title: "HTML", icon: "html.svg" },
        { title: "Javascript", icon: "javascript.svg" },
        { title: "Laravel", icon: "laravel.svg" },
        { title: "Node js", icon: "nodejs.svg" },
        { title: "PHP", icon: "php.svg" },
        { title: "React js", icon: "react.svg" },
        { title: "Vue js", icon: "vuejs.svg" }
      ],
      slickSettings: {
        dots: true,
        infinite: true,

        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1640,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false
            }
          }
        ]
      },

      servicesSlickSettings: {
        dots: false,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      },
      projectSlickSettings: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      },
      projects: []
    };
  },
  methods: {
    beforeServiceSlideChange(old, newVal) {
      this.activeStep = newVal;
    },
    beforeProjectChange(old, newVal) {
      this.selectedProject = newVal;
    },
    changeProjectSlick(index) {
      this.$refs["projectSlick"].goTo(index);
    }
  },
  mounted() {
    setTimeout(() => {
      this.projects = [{ id: 1 }, { id: 2 }, { id: 3 }];
    }, 2000);
  }
};
</script>
<style lang="scss" scoped>
.small_container {
  @media (min-width: 1641px) {
    padding-right: 7.5rem;
    padding-left: 7.5rem;
  }
}
section {
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (max-width: 1024px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
.tablette_and_down {
  @media (max-width: 767px) {
    display: none !important;
  }
}
.tablette_and_up {
  @media (min-width: 767px) {
    display: none !important;
  }
}
//**Hero */
.hero_container {
  background: linear-gradient(#fff 0%, #f2f2f2 100%);
  .hero {
    @media (min-height: 1080px) {
      min-height: 1000px;
    }
    min-height: calc(100vh - 80px);
    .image {
      flex: 2 1 0;
      &::v-deep svg {
        width: 100%;
      }
    }
    .desc {
      min-width: 500px;
      flex: 1 0 0;
      @media (max-width: 1640px) {
        min-width: 430px;
        h1 {
          font-size: 2.5rem;
        }
        @media (max-width: 480px) {
          min-width: auto;
        }
      }
    }
    .call_to_action {
      min-width: 60%;
      margin-top: 5rem;
    }
    @media (max-width: 1024px) {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      & > div {
        width: 100%;
        flex: auto !important;
      }
      h1.mobile {
        font-size: 2.5rem;
        text-align: center;
      }
      .image {
        &::v-deep svg {
          height: auto;
        }
      }
      .desc {
        text-align: center;
        p,
        h2 {
          margin: 1rem 0 !important;
        }
      }
      .call_to_action_container {
        justify-content: center;
        margin-left: 0 !important;
        .call_to_action {
          margin-top: 1rem;
        }
      }
    }
    @media (max-width: 767px) {
      min-height: calc(80vh - 60px);
    }
  }
}

//**Cases */
.cases {
  min-height: 200vh;
  @media (min-height: 1080px) {
    min-height: 1600px;
  }
  .c_head {
    width: 50rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 6rem;
  }

  .case {
    .img {
      max-width: 540px;
    }
    & > div {
      flex: 1 1 0;
    }
    .notice {
      margin-top: 5rem;
      border-radius: 12px;
    }
  }
  @media (max-width: 1024px) {
    min-height: 150vh;
    .c_head {
      width: 90%;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 2rem;
    }
    .text_side {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    #case1 {
      .text_side {
        margin-right: 1rem !important;
      }
    }
    #case2 {
      .text_side {
        margin-left: 1rem !important;
      }
    }
  }
  @media (max-width: 767px) {
    min-height: 100vh;
    .case {
      flex-wrap: wrap;
      & > div {
        flex: auto;
        text-align: center !important;
        margin-bottom: 2rem;
      }
      h2 {
        color: map-get($map: $colors, $key: text1) !important;
      }
      &#case1 {
        flex-direction: column-reverse;
      }
    }
    #case1 {
      .text_side {
        margin-right: 0rem !important;
      }
    }
    #case2 {
      .text_side {
        margin-left: 0rem !important;
      }
    }
  }
}
// About Us part
.about {
  min-height: 100vh;
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
  .c_head {
    width: 50rem;
    margin: auto;
    margin-bottom: 6rem;
  }
  .about_table {
    height: 520px;
    .w-50,
    .h-50 {
      transition: 0.5s all;
    }
  }
  .part {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .part_svg {
    width: 90%;
    &::v-deep svg {
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    .c_head {
      width: 90%;
      margin: auto;
      margin-bottom: 2rem;
    }
    .about_table {
      height: auto;
      flex-wrap: wrap;
      .p1,
      .p2 {
        width: 100% !important;
      }
    }
  }
  @media (max-width: 767px) {
    .part {
      width: 100% !important;
    }
    .about_table {
      flex-direction: column;
      .p1,
      .p2 {
        margin-bottom: 1rem;
        & > .flex {
          margin-top: 1rem;

          flex-wrap: wrap;
        }
      }
    }
  }
}
// Service part
.services {
  min-height: 100vh;
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
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
    width: 390px;
    height: 340px;
    border-radius: 5px;
    transition: 0.5s all;
  }
  @media (max-width: 1024px) {
    min-height: auto;
    .slick-slider {
      display: block !important;
    }
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
    &::before {
      display: none !important;
    }
    &.next_arrow {
      right: -1rem;
      @media (max-width: 480px) {
        right: calc(5% - 1.4rem);
      }
    }
    &.prev_arrow {
      left: -1rem;
      @media (max-width: 480px) {
        left: calc(5% - 1.4rem);
      }
    }
  }
}
//How it works part
.howItWorks {
  min-height: 100vh;
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
  .c_head {
    width: 50rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 3rem;
  }

  .step {
    position: relative;
    display: flex !important;
    .circle_deco {
      background: transparent;
      position: absolute;
      top: 5%;
      right: 5%;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      border: 3px solid map-get($map: $colors, $key: primary);
    }
  }
  .separator {
    height: 4px;
    width: 1.5rem;
    border-radius: 15px;
  }
  .fixing_step {
    width: 5rem;
    height: 5rem;
    margin-left: 0.8rem;
  }
  .step_btn {
    @media (max-width: 1640px) {
      width: 5rem;
      height: 5rem;
    }
    width: 8.75rem;
    height: 8.75rem;
    border-radius: 50%;
    img {
      max-width: 70%;
      max-height: 50%;
    }
  }

  .steps_body {
    max-width: 1080px;
    margin-right: auto;
    margin-left: auto;
    .step_content {
      border-radius: 5px;
      .divider {
        height: 1px;
        margin-right: -24px;
        margin-left: -24px;
      }
      .tab {
        width: 16.25rem;
      }
      .tommpon {
        border-radius: 50%;
        width: 5.875rem;
        height: 5.875rem;
        flex-shrink: 0;
      }
    }
  }
  @media (max-width: 1024px) {
    .c_head {
      width: 90%;
      margin: auto;
      margin-bottom: 2rem;
    }
    .step_btn {
      width: 7rem;
      height: 7rem;
      box-shadow: none;
    }
    .custom-arrow {
      top: calc(50% - 1.5rem);
      z-index: 99999;
      &.next_arrow {
        right: calc(50% - 8.5rem);
      }
      &.prev_arrow {
        left: calc(50% - 8.5rem);
      }
    }
  }
  @media (max-width: 767px) {
    .skills_toolbar {
      flex-wrap: wrap;
      .tab {
        width: 100% !important;
        margin-bottom: 0.5rem;
      }
    }
    .tommpon {
      display: none !important;
    }
  }
}
//Idea to solution part
.ideaToSolution {
  min-height: 100vh;
  @media (min-height: 1080px) {
    min-height: 1080px;
  }
  background: linear-gradient(
      to bottom,
      rgba(22, 19, 19, 0.52),
      rgba(255, 237, 237, 0)
    ),
    url("~static/img/ideaToSolution.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  .features {
    width: 45rem;
    left: calc(50% - 22.5rem);
    bottom: 6rem;
    @media (max-height: 850px) {
      bottom: 2rem;
      @media (max-width: 1200px) {
        bottom: 0rem;
        img {
          height: 6rem;
        }
      }
    }
    .indicators span {
      height: 0.875rem;
      width: 0.875rem;
      border-radius: 50%;
      border: 1px solid map-get($map: $colors, $key: white);
      &.active {
        background: map-get($map: $colors, $key: white);
      }
    }
  }
  @media (max-width: 767px) {
    .itsDesc {
      width: calc(100% - 2rem) !important;
    }
    .features {
      width: 100%;
      margin: auto;
      left: 0;
    }
  }
}
//Technologies Part
.technologies {
  min-height: 300px;
  .tech_list {
    overflow: hidden;
    .tech {
      height: 9rem !important;
      width: 9rem !important;
      display: flex !important;
      border-radius: 50%;
      flex-shrink: 0;
      img {
        max-width: 80%;
        max-height: 50%;
      }
    }
  }
  @media (max-width: 1640px) {
    min-height: 220px;
    .tech_list {
      .tech {
        height: 7rem !important;
        width: 7rem !important;
      }
    }
  }
  @media (max-width: 767px) {
    &h2 {
      flex: 2;
    }
    .tech_list {
      flex: auto;
    }
  }
}
//projects part
.projects {
  min-height: calc(100vh - 300px);
  @media (min-height: 1080px) {
    min-height: 780px;
  }
  padding-right: 8.75rem;
  @media (max-width: 1640px) {
    padding-bottom: 4rem;
  }
  .vertical_name {
    align-items: end;
    width: 8.75rem;
    h1 {
      @media (max-height: 950px) {
        font-size: 5.25rem;
      }
      font-size: 5.75rem;
      transform: rotate(-90deg);
      width: 100%;

      display: flex;
      width: 100%;
    }
  }
  .projects_body {
    width: calc(100% - 8.75rem);
    flex: auto;
  }
  .projects_list {
    overflow: hidden;
  }
  .project_footer {
    position: relative;
    top: 2rem;
    .empty {
      max-width: 60rem;
    }
    .footer_desc {
      min-width: 600px;
    }
    .indicators span {
      display: block;
      height: 0.875rem;
      width: 0.875rem;
      border-radius: 50%;
      border: 1px solid map-get($map: $colors, $key: white);
      background: map-get($map: $colors, $key: white);
      &.active {
        background: map-get($map: $colors, $key: primary);
      }
    }
  }
  @media (max-width: 1200px) {
    .vertical_name {
      position: relative;
      bottom: 100px;
    }

    .project_footer {
      top: -80px;
      padding: 0 1.5rem;
      .empty {
        display: none !important;
      }
      .footer_desc {
        min-width: 100%;
        flex: 0;

        margin-right: 0% !important
        ;
      }
    }
  }
  @media (max-width: 767px) {
    padding-right: calc(50% - 220px);
    padding-left: calc(50% - 220px);

    .vertical_name {
      display: none !important;
    }
    .project_head {
      width: 100% !important;
      text-align: center;
    }

    .project_footer {
      top: -40px;
    }
  }
}
</style>
