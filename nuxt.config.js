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
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon/favicon.ico'
    }]
  },
  env: {
    strapiBaseUri: process.env.NODE_ENV == 'production' ? process.env.API_URL : "http://localhost:1337"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~static/fonts/font.css", "~static/css/global.css"],

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
  buildModules: ['@nuxtjs/style-resources', ],
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

  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
