import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      global: true,
    },
  ],
  content: {
    navigation: {
      fields: ['icon', 'color'],
    },
  },
});
