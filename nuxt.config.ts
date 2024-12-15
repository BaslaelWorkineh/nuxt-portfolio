// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    node: true, // Ensures the server runs as a Node.js application
    preset: 'node-server', // Specific for cPanel Node.js hosting
    minify: true, // Minifies the output for reduced memory usage
  },

  compatibilityDate: '2024-12-15',
  ssr: true,
  target: 'static'
})