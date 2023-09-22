// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
     contenfulApiToken: process.env.NUXT_CONTENFUL_API_TOKEN ?? ''
  }
})
