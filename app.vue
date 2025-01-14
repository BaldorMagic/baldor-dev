<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.public.directus)
</script>
