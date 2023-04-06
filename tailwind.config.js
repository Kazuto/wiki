/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#514158',
          50: '#DCD0DB',
          100: '#CFBECF',
          200: '#B49BB5',
          300: '#97789B',
          400: '#755B7B',
          500: '#514158',
          600: '#3D3243',
          700: '#29232F',
          800: '#17141A',
          900: '#050406',
        },
        primary: {
          DEFAULT: '#7E2A9F',
          50: '#F8E4F6',
          100: '#F2CCF0',
          200: '#E29CE5',
          300: '#CB6CD8',
          400: '#AE3BCB',
          500: '#7E2A9F',
          600: '#602383',
          700: '#451B66',
          800: '#2D144A',
          900: '#190C2E',
        },
      },
    },
  },
  plugins: [],
};
