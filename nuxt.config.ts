export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: '@nuxt/ui-pro',
  modules: ['@nuxt/content', '@nuxt/ui'],
  ui: {
    icons: ['mdi']
  }
})
