<template>
  <VitePwaManifest/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const title = config.public.name
const description = config.public.description
const image = '/og-image.jpg'

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: config.public.siteUrl,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: 'summary_large_image'
})
useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
})
</script>