// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons',
    'nuxt-directus',
  ],
  app: {
    head: {
      title: 'Creative Solutions Through Code | Frontend Developer',
      meta: [
        {name: 'description', content: 'Frontend developer specialized in Vue.js, tailwindcss and Typescript. Building performant, accessible and beautiful web applications.'},
        {name: 'robots', content: 'index, follow'},
        {property: 'og:title', content: 'Creative Solutions Through Code | Frontend Developer'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://baldor.dev'},
        {property: 'og:image', content: '/og-image.webp'},
        {property: 'og:image:alt', content: 'An alien cat walking on a planet'},
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'} 
      ]
    }
  },
  tailwindcss: {
    // Options
  },
  runtimeConfig: {
    directus: {
      url: ""
    },
    ssr: true
  },
  ssr: true,
  routeRules: {
    '/': {
      cors: true,
      prerender: true
    }
  },
  build: {
    analyze: true
  }
})