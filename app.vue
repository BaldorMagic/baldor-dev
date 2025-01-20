<template>
  <div>
    <Navbar />
    <HeroSection />
    <Projects />
  </div>
</template>
<script setup lang="ts">
  const gradientFrom = {
    orange: 'from-orange-300',
    teal: 'from-teal-200',
    sky: 'from-sky-200',
    purple: 'from-purple-200',
    rose: 'from-rose-200'
  }

  const gradientTo = {
    amber: 'to-amber-200',
    emerald: 'to-emerald-200',
    blue: 'to-blue-200',
    violet: 'to-violet-200',
    pink: 'to-pink-200'
  }

  const iconColor = {
    orange: 'text-orange-600',
    teal: 'text-teal-600',
    sky: 'text-sky-600',
    purple: 'text-purple-600'
  }
</script>
