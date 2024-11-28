import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kitchen Docs",
  description: "Documentation for Dhamma Lilha Kitchen",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Įvadas', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Pradžia', link: '/intro' },
          { text: 'Asmeninė higiena', link: '/hygene' },
          { text: 'Maisto likučiai', link: '/leftovers' },
          { text: 'Tikslai', link: '/objectives' },
          { text: 'Sauga', link: '/safety' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: '🇱🇹 Lietuvių',
      lang: 'lt',
    },
    en: {
      label: '🇬🇧 English',
      lang: 'en'
    },
    ru: {
      label: '🇷🇺 Русский',
      lang: 'ru',
    }
  }
})
