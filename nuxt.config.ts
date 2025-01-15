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
    'nuxt-directus'
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
    apiUrl: {
      url: process.env.DIRECTUS_URL
    },
    public: {
      directus: {
        url: process.env.DIRECTUS_URL
      },
    },
  }
})