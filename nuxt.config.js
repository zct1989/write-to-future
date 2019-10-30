const pkg = require('./package')
module.exports = {
  mode: 'universal',
  srcDir: 'src/client/',
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['assets/styles/default.less'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/ant-design-vue.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/apollo'],
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Build configuration
   */
  build: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql'
      }
    }
  }
}
