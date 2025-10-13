<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="max-w-7xl w-full grid grid-cols-3 gap-6 backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/10 p-6">

      <div class="col-span-2 relative overflow-hidden rounded-2xl">
        <img src="/marcenaria.png" alt="Montanha" class="w-full h-full object-cover opacity-90" />
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <h1 class="text-2xl font-mono text-black mb-4">Project: Marcenaria Maranhão</h1>
          <p class="text-black font-mono text-sm text-justify leading-relaxed">
           Fazemos qualquer tipo de Trabalho com madeira. Armários Embutidos - Armário de Cozinha - Portões de Garagem - Colocação de Portas e Janelas - Assoalhos - Lambris e Rodapé - Forragens em Fórmica - Lustres em Geral - Instalaçao Comerciasis - ETC.
          </p>
        </div>

        <div class="mt-6 flex justify-center gap-4">
          <button class="px-4 py-2 rounded-xl bg-black hover:bg-gray-400 transition text-white text-sm">GitHub</button>
          <button class="px-4 py-2 rounded-xl border border-black hover:bg-white/10 transition text-black text-sm">Visualizar</button>
        </div>
      </div>

      <div class="col-span-3 mt-6 flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-4">
        <div class="flex items-center gap-3">
          <img src="/perfil.jpg" alt="Perfil" class="w-10 h-10 rounded-full border border-white/20" />
          <div>
            <h3 class="text-black text-sm font-medium">Railson Vieira</h3>
            <p class="text-black text-xs">@mec.dev</p>
          </div>
        </div>
        <div class="flex gap-5">
          <Icon name="mdi:instagram" class="w-6 h-6 text-black cursor-pointer transition-all ease-out duration-300 hover:text-gray-300 hover:scale-110" />
          <Icon name="mdi:whatsapp" class="w-6 h-6 text-black cursor-pointer transition-all ease-out duration-300 hover:text-gray-300 hover:scale-110" />
          <Icon name="mdi:email-outline" class="w-6 h-6 text-black cursor-pointer transition-all ease-out duration-300 hover:text-gray-300 hover:scale-110" />
        </div>
      </div>
    </div>
  </div>
</template>
