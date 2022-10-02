export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'init-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,maximum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css', '@/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/general', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxt/postcss8'
  ],
  styleResources: {
    scss: ['@/assets/scss/variables.scss', '@/assets/scss/utils.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || 'http://localhost:1337',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    timing: false,
  },
}
