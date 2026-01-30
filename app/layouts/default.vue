<script setup lang="ts">
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/background2.mp4" type="video/mp4" />
    </video>

    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>
