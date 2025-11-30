<template>
  <div class="flex border-b border-gray-600 justify-between py-2 px-6">
    <div class="flex gap-2">
      <p class="text-3xl uppercase font-black">Генератор</p>
      <nuxt-link to="https://github.com/maxletsplay1/event-card-generator" target="_blank">
        <img
            class="h-9 w-9"
            src="../assets/images/Clown.webp"
            alt="клоунфейс"
        >
      </nuxt-link>
    </div>
    <ClientOnly v-if="!colorMode?.forced">
      <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>