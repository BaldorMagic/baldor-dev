// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-lucide-icons',
    'nuxt-directus',
  ],
  image: {
    // Options
  },
  fonts: {
    // Options
  },
  tailwindcss: {
    // Options
  },
  runtimeConfig: {
    directus: {
      url: ""
    },
    public: {
      directus: {
        url: ""
      }
    },
    ssr: true
  },
  ssr: true,
  directus: {
    url: process.env.NUXT_DIRECTUS_URL
  },
  routeRules: {
    '/': {
      ssr: true,
      cors: true,
      prerender: true
    }
  }
})