export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ftm',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
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
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: 'favicon/apple-touch-icon.png',
        sizes: "144x144"
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon/favicon-32x32.png',
        sizes: "32x32"
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon/favicon-16x16.png',
        sizes: "16x16"
      },

      {
        rel: 'mask-icon',
        href: 'favicon/safari-pinned-tab.svg',
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
    strapiBaseUri: process.env.NODE_ENV == 'production' ? process.env.API_URL : "http://localhost:1337"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~static/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
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
    '~/components/svg',

  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources', 'nuxt-compress'],
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-compress',
    '@nuxtjs/i18n',
    '@nuxtjs/sentry',
    'nuxt-i18n-easy',
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
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    }
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
