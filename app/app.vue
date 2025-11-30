<template>
<NuxtLayout>
  <NuxtPage/>
</NuxtLayout>
</template>

<script setup lang="ts">
const title = 'Генератор карточки мероприятия'
const description = 'Генерирует карточки с QR-кодом. Походит на телеграм. Будет использован 1,5 раза.'
const image = '/og-image.jpg'

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: 'https://maxletsplay-cardgen.vercel.app/',
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