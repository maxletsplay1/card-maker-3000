<template>
<NuxtLayout>
  <NuxtPage/>
</NuxtLayout>
</template>

<script setup lang="ts">
const title = 'Генератор карточки мероприятия'
const description = 'Генерирует карточки с QR-кодом. Походит на телеграм. Будет использован 1,5 раза.'
const image = 'https://maxletsplay1.github.io/event-card-generator/og-image.jpg'

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: 'https://maxletsplay1.github.io/event-card-generator/',
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
      href: 'https://maxletsplay1.github.io/event-card-generator/favicon.ico'
    }
  ]
})

definePageMeta({
  title: 'Генератор карточки мероприятия',
  meta: [
    { name: 'description', content: 'Генерирует карточки с QR-кодом. Походит на телеграм. Будет использован 1,5 раза.' },
    { property: 'og:title', content: 'Генератор карточки мероприятия' },
    { property: 'og:description', content: 'Генерирует карточки с QR-кодом. Походит на телеграм. Будет использован 1,5 раза.' },
    { property: 'og:image', content: 'https://maxletsplay1.github.io/event-card-generator/og-image.jpg' },
    { property: 'og:url', content: 'https://maxletsplay1.github.io/event-card-generator/' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    {
      rel: 'icon',
      href: 'https://maxletsplay1.github.io/event-card-generator/favicon.ico'
    }
  ]
})
</script>