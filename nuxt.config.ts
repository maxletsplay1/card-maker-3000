// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vite-pwa/nuxt'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      name: process.env.NUXT_PUBLIC_NAME,
      shortName: process.env.NUXT_PUBLIC_NAME,
      description: process.env.NUXT_PUBLIC_DESCRIPTION,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  pwa:{
    manifest:{
      name: process.env.NUXT_PUBLIC_NAME,
      short_name: process.env.NUXT_PUBLIC_NAME,
      description: process.env.NUXT_PUBLIC_DESCRIPTION,
      icons: [
        { src: "icons/512-512.png", sizes: "512x512", type: "image/png" },
        { src: "icons/192-192.png", sizes: "192x192", type: "image/png" },
        { src: "icons/144-144.png", sizes: "144x144", type: "image/png" },
        { src: "icons/96-96.png",  sizes: "96x96",  type: "image/png" },
        { src: "icons/72-72.png",  sizes: "72x72",  type: "image/png" },
        { src: "icons/48-48.png",  sizes: "48x48",  type: "image/png" },
      ],
      theme_color: '#0e172b'
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  ssr: true,
})