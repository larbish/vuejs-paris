export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: '@nuxt/ui-pro',
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxthq/studio'],
  ui: {
    icons: ['mdi']
  },
  studio: {
    enabled: true
  }
})
