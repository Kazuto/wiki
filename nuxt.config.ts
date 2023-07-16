// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-icon', '@nuxt/image', '@nuxtjs/color-mode'],
  components: [
    {
      path: '~/components',
      prefix: 'v',
    },
    {
      path: '~/components/content',
      global: true,
    },
  ],
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
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'theme',
  },
  css: ['~/assets/css/app.css'],
  devtools: {
    enable: process.env.NODE_ENV !== 'production',
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
