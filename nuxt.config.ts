// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-icon'],
  content: {
    documentDriven: true,
    markdown: {
      toc: { depth: 2, searchDepth: 2 },
    },
    navigation: {
      fields: ['icon'],
    },
  css: ['~/assets/css/app.css'],
  components: [{ path: '~/components', prefix: 'v' }],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
