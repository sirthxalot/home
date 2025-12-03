// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Alexander Bösch', // default fallback title
    },
  },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/sirthxalot.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@weareheavy/nuxt-cookie-consent',
    'nuxt-lucide-icons',
  ],
  plugins: [
    '~/plugins/i18n',
  ],
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
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
})