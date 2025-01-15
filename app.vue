<template>
  <div>
    <Navbar />
    <HeroSection />
  </div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.apiUrl);
console.log(runtimeConfig.public.directus);
</script>
