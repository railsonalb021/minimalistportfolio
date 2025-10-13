<script setup lang="ts">

const i = ref(0)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-10">
    <div class="bg-white/10 w-full max-w-4xl rounded-2xl backdrop-blur-xl shadow-2xl border border-white/20 p-10">
      <template v-if="i === 0">
      <h1 class="text-4xl text-black font-extralight text-center mb-12">My Experience</h1>
      <div class="relative border-l border-gray-300 dark:border-gray-700 ml-6 space-y-10">
        <div class="relative">
          <div class="absolute -left-6 top-1.5 w-3 h-3 bg-black rounded-full"></div>
          <div class="ml-6">
            <p class="text-sm text-black">2025 - Present</p>
            <h2 class="text-xl font-light text-black mb-2">Front-End Developer — Intern</h2>
            <h2 class="text-sm font-light text-black mb-2">Brazilian Center for Physics Research - RJ</h2>
            <p class="text-black text-xl font-extralight">
              Building modern, responsive and interactive websites using Vue, Nuxt and Tailwind CSS.
            </p>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-6 top-1.5 w-3 h-3 bg-black rounded-full"></div>
          <div class="ml-6">
            <p class="text-sm text-black">2023 - 2024</p>
            <h2 class="text-xl font-light text-black mb-2">IT support — Intern</h2>
            <h2 class="text-sm font-light text-black mb-2">Brazilian Center for Physics Research - RJ</h2>
            <p class="text-black text-xl font-extralight">
              Computer maintenance, installation of operating systems and printers.
            </p>
          </div>
        </div>
      </div>

        <div class="flex justify-end">
            <button
              class="mt-10 flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full transition" @click="i++"
            >
              Next
              <Icon name="mdi:arrow-right" class="w-5 h-5 text-white" />
            </button>
        </div>
        </template>

        <template v-if="i === 1">
          <h1 class="text-4xl text-black font-extralight text-center mb-12">About me</h1>
            <div class="flex justify-center items-center text-justify">
                <h2 class="text-xl font-light text-black mb-2">I'm currently pursuing a Computer Science degree at UNESA and hold an intermediate English degree. I have practical experience in IT support, computer maintenance, and knowledge of operating systems (Windows, Linux, and macOS), as well as front-end web development (Vue, Nuxt, Tailwind, and Typescript). I'm proactive and eager to learn. I'm currently working as a front-end web development intern.</h2>
            </div>

          <div class="flex justify-between items-center mt-10">
            <button
              class="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full transition hover:bg-gray-800" @click="i--"
            >
              <Icon name="mdi:arrow-left" class="w-5 h-5 text-white" />
              Back
            </button>

            <button
              class="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full transition hover:bg-gray-800"
            >
              Next
              <Icon name="mdi:arrow-right" class="w-5 h-5 text-white" />
            </button>
          </div>
        </template>
    </div>
  </div>
</template>
