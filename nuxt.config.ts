// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/sirthxalot.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@weareheavy/nuxt-cookie-consent'],
  cookieConsent: {
    provider: 'cookiebot',
    cbid: '9c9bf308-c226-412b-ac3a-8c7ed80c5dc2',
  },
  i18n: {
    skipSettingLocaleOnNavigate: true,
    defaultLocale: 'de',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' }
    ]
  }
})
