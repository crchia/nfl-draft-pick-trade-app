import { createVuetify } from 'vuetify'
import 'vuetify/styles' // pre-build css styles
import * as labs from 'vuetify/labs/components'

/* Add all components and directives, for dev & prototyping only. */
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

/* Add build-in icon used internally in various components */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi'
const aliases = allAliases

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      ...labs,
      // ...components,
    },
    // directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#673AB7',
            secondary: '#2196F3',
            background: '#EEEEEE',
            button: '#2196F3',
            text: '#000000',
          },
        },
        dark: {
          colors: {
            primary: '#673AB7',
            secondary: '#2196F3',
            background: '#121212',
            button: '#2196F3',
            text: '#FFFFFF',
          },
        },
      },
    },
    defaults: {
      VAutocomplete: {
        hideDetails: true,
        variant: 'solo',
        density: 'compact',
        rounded: 'lg',
      },
      VTextField: {
        hideDetails: true,
        variant: "solo",
        density: 'compact',
        rounded: 'lg',
      },
      VSelect: {
        hideDetails: true,
        variant: 'solo',
        density: 'compact',
        rounded: 'lg',
      },
      VBtn: {
        rounded: 'lg',
      },
      VCard: {
        rounded: 'lg',
      },
      VSheet: {
        rounded: 'lg',
      },
      VChip: {
        rounded: 'lg',
      },
      VSwitch: {
        hideDetails: true,
        density: 'compact',
      },
      VTable: {
        density: 'comfortable',
      },
      VDataTable: {
        density: 'comfortable',
      },
      VTab: {
        density: 'comfortable',
        alignTabs: 'center',
      }
    },
  })

  nuxtApp.vueApp.use(vuetify)

})
