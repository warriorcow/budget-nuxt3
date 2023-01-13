// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/_variables.scss";',
        },
      },
    },
  },
  nitro: {
    plugins: ['~/server/index.ts']
  },
  runtimeConfig: {
    mongodbUri: 'mongodb://127.0.0.1:27017/nitro'
  },
  css: [
    'assets/global.scss'
  ]
})
