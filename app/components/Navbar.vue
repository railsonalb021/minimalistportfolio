<script setup lang="ts">
const { locale, setLocale } = useI18n()

function toggleLanguage() {
  setLocale(locale.value === 'pt' ? 'en' : 'pt')
}
</script>

<template>
    <nav class="fixed w-full p-5 justify-between items-center flex">
        <div class="px-10 flex items-center gap-1">
            <h1 class="text-2xl text-black font-extralight">R</h1>
        </div>
        <div class="px-10 items-center">
            <ul class="flex items-center font-extralight space-x-6">
                <NuxtLink to="/" >
                    <li class="text-black text-xl hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('home') }}</li>
                </NuxtLink>
                <NuxtLink to="/aboutme" >
                    <li class="text-black text-xl hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('about') }}</li>
                </NuxtLink>
                <NuxtLink to="/contactme" >
                    <li class="text-black text-xl hover:underline underline-offset-8 decoration-2 cursor-pointer">{{ $t('contact') }}</li>
                </NuxtLink>
                 <button @click="toggleLanguage" class="flex items-center gap-2">
                    <Icon name="mdi:language" class="text-2xl text-black" />
                    {{ locale.value }}
                 </button>
            </ul>
        </div>
    </nav>
</template>