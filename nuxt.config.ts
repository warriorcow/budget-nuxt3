// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {},
  nitro: {
    plugins: ['~/server/index.ts']
  },
  runtimeConfig: {
    mongodbUri: 'mongodb://localhost:27017/nitro'
  },
  css: [
    'assets/global.scss'
  ]
})
