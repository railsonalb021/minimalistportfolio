<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
})

const model = defineModel<string>()
</script>

<template>
  <div class="space-y-3 flex flex-col w-full items-center">
    <label :for="id" class="block text-sm font-extralight text-white text-xl">{{ label }}</label>

    <input
      :id="id"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      class="w-full max-w-96 border-b border-white/50 bg-transparent text-white text-center text-sm outline-none focus:border-white focus:ring-0"
    >
  </div>
</template>
