<script setup lang="ts">
const i = ref(0)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-6 px-4 sm:px-6">
    <div
      class="bg-white/10 w-full max-w-4xl rounded-2xl backdrop-blur-xl shadow-2xl border border-white/20 p-6 sm:p-10"
    >
      <template v-if="i === 0">
        <h1
          class="text-3xl sm:text-4xl text-black font-extralight text-center mb-10 sm:mb-12"
        >
          {{ $t('myexperience') }}
        </h1>

        <div
          class="relative border-l border-gray-300 dark:border-gray-700 ml-4 sm:ml-6 space-y-8 sm:space-y-10"
        >
          <div class="relative">
            <div
              class="absolute -left-5 sm:-left-6 top-1.5 w-3 h-3 bg-black rounded-full"
            ></div>
            <div class="ml-6 sm:ml-8">
              <p class="text-xs sm:text-sm text-black">{{ $t('present') }}</p>
              <h2
                class="text-lg sm:text-xl font-light text-black mb-2"
              >
                {{ $t('timelinetitle') }}
              </h2>
              <h2
                class="text-xs sm:text-sm font-light text-black mb-2"
              >
                {{ $t('timelinesubtitle') }}
              </h2>
              <p
                class="text-black text-base sm:text-xl font-extralight leading-relaxed"
              >
                {{ $t('timelinedescription') }}
              </p>
            </div>
          </div>

          <div class="relative">
            <div
              class="absolute -left-5 sm:-left-6 top-1.5 w-3 h-3 bg-black rounded-full"
            ></div>
            <div class="ml-6 sm:ml-8">
              <p class="text-xs sm:text-sm text-black">2023 - 2024</p>
              <h2
                class="text-lg sm:text-xl font-light text-black mb-2"
              >
                {{ $t('timelinetitleti') }}
              </h2>
              <h2
                class="text-xs sm:text-sm font-light text-black mb-2"
              >
                {{ $t('timelinesubtitleti') }}
              </h2>
              <p
                class="text-black text-base sm:text-xl font-extralight leading-relaxed"
              >
                {{ $t('timelinedescriptionti') }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-10">
          <button
            class="flex items-center gap-2 px-5 sm:px-6 py-2 bg-black text-white rounded-full transition hover:bg-gray-800 text-sm sm:text-base"
            @click="i++"
          >
            {{ $t('next') }}
            <Icon name="mdi:arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </template>

      <template v-else-if="i === 1">
        <h1
          class="text-3xl sm:text-4xl text-black font-extralight text-center mb-10 sm:mb-12"
        >
          {{ $t('aboutme') }}
        </h1>

        <div class="flex justify-center items-center text-justify">
          <h2
            class="text-base sm:text-xl font-light text-black mb-4 leading-relaxed max-w-2xl"
          >
            {{ $t('aboutmedescription') }}
          </h2>
        </div>

        <div
          class="flex justify-between items-center mt-8 sm:mt-10 gap-4 sm:gap-0"
        >
          <button
            class="flex items-center gap-2 px-5 sm:px-6 py-2 bg-black text-white rounded-full transition hover:bg-gray-800 text-sm sm:text-base"
            @click="i--"
          >
            <Icon name="mdi:arrow-left" class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            Back
          </button>

          <button
            class="flex items-center gap-2 px-5 sm:px-6 py-2 bg-black text-white rounded-full transition hover:bg-gray-800 text-sm sm:text-base"
          >
            Next
            <Icon name="mdi:arrow-right" class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </template>
    </div>
  </div>
</template>
