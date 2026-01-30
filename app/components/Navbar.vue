<script setup lang="ts">
import { ref } from 'vue'
const { locale, setLocale } = useI18n()

const isMenuOpen = ref(false)

function toggleLanguage() {
  setLocale(locale.value === 'pt' ? 'en' : 'pt')
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="fixed w-full p-5 flex justify-between items-center z-50">
    <div class="px-5 flex items-center gap-1">
      <h1 class="text-2xl text-black font-extralight">R</h1>
    </div>

    <div class="hidden md:flex px-10 items-center">
      <ul class="flex items-center font-extralight space-x-6">
        <NuxtLink to="/">
          <li class="text-white text-xl hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('home') }}</li>
        </NuxtLink>
        <NuxtLink to="/aboutme">
          <li class="text-white text-xl hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('about') }}</li>
        </NuxtLink>
        <NuxtLink to="/projects">
          <li class="text-white text-xl hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('projects') }}</li>
        </NuxtLink>
        <button @click="toggleLanguage" class="flex items-center gap-2">
          <Icon name="mdi:language" class="text-2xl text-white" />
          {{ locale.value }}
        </button>
      </ul>
    </div>

    <div class="md:hidden px-6">
      <button @click="toggleMenu" class="focus:outline-none">
        <Icon
          :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
          class="text-3xl text-white"
        />
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="absolute top-20 right-5 bg-white/10 backdrop-blur-xl shadow-lg rounded-2xl p-5 flex flex-col space-y-4 lg:hidden"
      >
        <NuxtLink to="/" @click="isMenuOpen = false">
          <li class="list-none text-white text-lg hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('home') }}</li>
        </NuxtLink>
        <NuxtLink to="/aboutme" @click="isMenuOpen = false">
          <li class="list-none text-white text-lg hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('about') }}</li>
        </NuxtLink>
        <NuxtLink to="/projects" @click="isMenuOpen = false">
          <li class="list-none text-white text-lg hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('projects') }}</li>
        </NuxtLink>
        <button
          @click="toggleLanguage"
          class="flex items-center gap-2 border-t pt-2 text-white"
        >
          <Icon name="mdi:language" class="text-2xl" />
          {{ locale.value }}
        </button>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
