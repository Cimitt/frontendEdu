import { useRuntimeConfig } from "nuxt/app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'KelasMu'
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', 'motion-v/nuxt' ],


  runtimeConfig:{
  public: {
    apiBase: 'http://127.0.0.1:8000/api'
  }
}
})

