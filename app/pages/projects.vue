<script setup lang="ts"></script>

<template>
  <div class="min-h-screen mt-14 lg:mt-0 flex items-center justify-center p-4 sm:p-6">
    <div
      class="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/10 p-4 sm:p-6"
    >
      <div class="relative overflow-hidden rounded-2xl md:col-span-2">
        <img
          src="/marcenaria.png"
          alt="Projeto"
          class="w-full h-38 sm:h-96 md:h-full object-cover opacity-90"
        />
        <div
          class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6"
        ></div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <h1
            class="text-xl sm:text-2xl font-mono text-black mb-3 sm:mb-4 text-center md:text-left"
          >
            {{ $t('titleproject') }}
          </h1>
          <p
            class="text-black font-mono text-sm sm:text-base text-justify leading-relaxed"
          >
            {{ $t('descriptionproject') }}
          </p>
        </div>

        <div
          class="mt-6 flex flex-col sm:flex-row justify-center md:justify-center gap-3 sm:gap-4"
        >
          <button
            class="px-4 py-2 rounded-xl bg-black hover:bg-gray-700 transition text-white text-sm sm:text-base"
          >
            GitHub
          </button>
          <button
            class="px-4 py-2 rounded-xl border border-black hover:bg-black hover:text-white transition text-black text-sm sm:text-base"
          >
            Visualizar
          </button>
        </div>
      </div>

      <div
        class="md:col-span-3 mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-4 gap-4 sm:gap-0"
      >
        <div class="flex items-center gap-3">
          <img
            src="/perfil.jpg"
            alt="Perfil"
            class="w-10 h-10 rounded-full border border-white/20"
          />
          <div class="text-center sm:text-left">
            <h3 class="text-black text-sm font-medium">Railson Vieira</h3>
            <p class="text-black text-xs">@mec.dev</p>
          </div>
        </div>

        <div class="flex gap-6">
          <Icon
            name="mdi:instagram"
            class="w-6 h-6 text-black cursor-pointer transition-all ease-out duration-300 hover:text-gray-500 hover:scale-110"
          />
          <Icon
            name="mdi:whatsapp"
            class="w-6 h-6 text-black cursor-pointer transition-all ease-out duration-300 hover:text-gray-500 hover:scale-110"
          />
          <Icon
            name="mdi:email-outline"
            class="w-6 h-6 text-black cursor-pointer transition-all ease-out duration-300 hover:text-gray-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
  </div>
</template>
