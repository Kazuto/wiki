// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-icon', '@nuxt/image'],
  content: {
    documentDriven: true,
    markdown: {
      toc: { depth: 2, searchDepth: 2 },
    },
    navigation: {
      fields: ['icon', 'is_dir'],
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai',
      },
    },
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
