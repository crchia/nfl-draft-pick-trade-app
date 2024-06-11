import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@pinia/nuxt',
    // this is for treeshaking vuetify
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        config.plugins.push(vuetify())
      )
    },
  ],

  build: {
    transpile: ['vuetify'],
  },

  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/fonts.css',
    '~/assets/styles.css',
  ],

  app: {
    head: {
      title: 'THOR',
      meta: [
        {
          name: 'description',
          content: 'LA Chargers App',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito&display=swap',
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },
})

