export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'pt',
        name: 'Português',
        file: 'pt.json'
      }
    ],
    langDir: 'locales', // pasta onde ficam os arquivos de tradução
    defaultLocale: 'pt',
  }
})
