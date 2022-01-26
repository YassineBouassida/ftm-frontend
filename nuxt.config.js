const axios = require('axios');
export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ftm',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        name: "facebook-domain-verification",
        content: "t9erw8clhkri7tsm3y7djmszq4heel"
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/favicon/apple-touch-icon.png',
        sizes: "144x144"
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-32x32.png',
        sizes: "32x32",

      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-16x16.png',
        sizes: "16x16"
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/favicon/favicon.ico',
        sizes: "32x32",

      },
      {
        rel: 'manifest',

        href: '/favicon/manifest.json',


      },

      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#DF2B2C'

      },

    ]
  },
  // render: {
  //   bundleRenderer: {
  //     shouldPreload: (file, type) => {
  //       return ['script', 'style', 'font'].includes(type)
  //     }
  //   }
  // },
  env: {
    strapiBaseUri: process.env.NODE_ENV == 'production' ? process.env.API_URL : "http://localhost:1337",
    hostname: process.env.NODE_ENV == 'production' ? process.env.HOST_URL : "http://localhost:3000",
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~static/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/vue-fb-customer-chat.js',
    ssr: false
  }],
  loading: {
    color: '#E02B2B',
    height: '3px'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    '~/components/ui',
    '~/components/parts',
    '~/components/parts/quizz',
    '~/components/svg',

  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources', 'nuxt-compress', 'nuxt-gsap-module'],
  styleResources: {
    scss: [

      '~static/scss/mixins.scss',
      '~static/scss/variables.scss',
      '~static/scss/colors.scss',
      '~static/scss/breackpoints.scss',



    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-211276768-1'
    }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-compress',
    '@nuxtjs/i18n',
    'nuxt-i18n-easy',
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt',
    ['@nuxtjs/html-minifier', {
      log: 'once',
      logHtml: true
    }],
    ['nuxt-font-loader-strategy', {
      ignoreLighthouse: true,
      ignoredEffectiveTypes: ['2g', 'slow-2g'],
      fonts: [
        // Font
        {
          fileExtensions: ['ttf'],
          fontFamily: 'Open Sans Regular',
          fontFaces: [
            // Font-Face
            {
              preload: true,
              local: ['Regular'],
              src: '@/static/fonts/OpenSans-Regular',

            },
          ]
        },
        {
          fileExtensions: ['ttf'],
          fontFamily: 'Open Sans SemiBold',
          fontFaces: [
            // Font-Face
            {
              preload: true,
              local: ['SemiBold'],
              src: '@/static/fonts/OpenSans-SemiBold',

            },
          ]
        },
        {
          fileExtensions: ['ttf'],
          fontFamily: 'Open Sans Bold',
          fontFaces: [
            // Font-Face
            {
              preload: true,
              local: ['Bold'],
              src: '@/static/fonts/OpenSans-Bold',

            },
          ]
        },
        {
          fileExtensions: ['ttf'],
          fontFamily: 'Open Sans Light',
          fontFaces: [
            // Font-Face
            {
              preload: true,
              local: ['Light'],
              src: '@/static/fonts/OpenSans-Light',

            },
          ]
        },

      ]
    }],


  ],
  //Sitemap
  sitemap: {
    hostname: 'https://fictiontomission.com',
    // shortcut notation (basic)
    i18n: true,
    // nuxt-i18n notation (advanced)
    i18n: {
      locales: ['en', 'fr', 'ar'],
      routesNameSeparator: '___'
    },
    routes: async () => {
      const {
        data
      } = await axios.get('https://server.fictiontomission.com/services');
      const projects = await axios.get('https://server.fictiontomission.com/projects');
      let locales = ['en', 'fr'];
      let servicesRoutes = [];
      let projectRoutes = [];
      locales.forEach(locale => {
        servicesRoutes = [...servicesRoutes, ...data.map((service) => {
          return {
            url: `/${locale}/services/${service.slug}`,
            changefreq: 'daily',
            priority: 1,
            lastmod: Date.now()
          }
        })];
        projectRoutes = [...projectRoutes, ...projects.data.map((project) => {
          return {
            url: `/${locale}/projects/${project.slug}`,
            changefreq: 'daily',
            priority: 1,
            lastmod: Date.now()
          }
        })];
      });
      return [...servicesRoutes, ...projectRoutes]
    }
  },
  //Green sock module
  gsap: {
    /* Module Options */
  },

  // Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        x: '-100%',
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        y: '100%',
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  //Module nuxt compress
  'nuxt-compress': {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },
  //I18N Module
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    langDir: 'locales/',
    skipSettingLocaleOnNavigate: true,
    skipNuxtState: true,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
    locales: [{
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        dir: 'ltr'
      },
      {
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar.js',
        dir: 'rtl'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.js',
        dir: 'ltr'
      }, // Make sure that default locale is the last one!
    ]
  },
  i18nEasy: {
    directories: [ // default directories for search
      './layouts',
      './pages',
      './components'
    ],
    files: ['*.vue', '*.js'], // default files
    sourceLanguage: 'en', // default source language
  },
  //Apollo module
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: '@/apollo/configs/default.js'
    },
    errorHandler: '@/apollo/configs/error.js'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {

      "name": "ftm",
      "short_name": "ftm",
      icon: {
        fileName: "~/static/favicon/favicon-32x32.png?v1"
      },
      "icons": [{
          "source": "~/static/favicon/favicon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "source": "~/static/favicon/favicon-96x96.png",
          "sizes": "96x96",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "source": "~/static/favicon/favicon-32x32.png",
          "sizes": "32x32",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "source": "~/static/favicon/favicon-16x16.png",
          "sizes": "16x16",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "source": "~/static/favicon/apple-icon-57x57.png",
          "sizes": "57x57",
          "type": "image/png",
          "purpose": "apple-touch-icon"
        },
        {
          "source": "~/static/favicon/apple-icon-60x60.png",
          "sizes": "60x60",
          "type": "image/png",
          "purpose": "apple-touch-icon"
        },
        {
          "source": "~/static/favicon/apple-icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png",
          "purpose": "apple-touch-icon"
        },
        {
          "source": "~/static/favicon/apple-icon-76x76.png",
          "sizes": "76x76",
          "type": "image/png",
          "purpose": "apple-touch-icon"
        },
        {
          "source": "~/static/favicon/apple-icon-120x120.png",
          "sizes": "120x120",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "source": "~/static/favicon/apple-icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "apple-touch-icon"
        },
        {
          "source": "~/static/favicon/apple-icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png",
          "purpose": "apple-touch-icon"
        },
        {
          "source": "~/static/favicon/apple-icon-180x180.png",
          "sizes": "180x180",
          "type": "image/png",
          "purpose": "apple-touch-icon"
        },
      ],
      "start_url": "/?standalone=true",
      "display": "standalone",
      "background_color": "#ffffff",
      "lang": "en"
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
    splitChunks: {
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false
    },
  }
}
