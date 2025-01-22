<template>
  <div>
    <Navbar />
    <HeroSection />
    <Projects />
    <Services />
    <Contact />
    <Footer />
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
    orange: ['text-orange-600', 'text-orange-400'],
    teal: ['text-teal-600', 'text-teal-500'],
    sky: ['text-sky-600', 'text-sky-500'],
    purple: 'text-purple-600',
  }

  const bgColor = {
    teal: 'bg-teal-50',
    orange: 'bg-orange-50',
    sky: 'bg-sky-50'
  }
  // const useProjects = () => {
  //   return useAsyncData('projects', () => {
  //       const { getItems } = useDirectusItems();
  //       return getItems({
  //           collection: 'projects'
  //       });
  //   }, {
  //       server: true
  //   });
  // }
  // const services = await getItems<Services>({
  //   collection: "services"
  // });

</script>
