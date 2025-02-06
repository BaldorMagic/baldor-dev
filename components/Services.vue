<template>
<section id="services" class="py-20 bg-gradient-to-b from-teal-50 to-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-16 text-gray-700">Services & Pricing</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(service, index) in services" :key="index"
        class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
        <div :class="`mb-4 ${bgColor[index]} w-12 h-12 rounded-xl flex items-center justify-center`">
          <Icon :name=service.icon class="!p-0 w-8 h-8" :class="iconColor[index]" />
        </div>
        <h3 class="text-xl font-bold mb-2 text-gray-700">{{ service.title }}</h3>
        <p class="text-gray-600 mb-4">{{ service.description }}</p>
        
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-gray-500 mb-1">Best For</h4>
          <p class="text-gray-600">{{ service.best_for }}</p>
        </div>
        
        <div v-if="service.timeframe" class="mb-4">
          <h4 class="text-sm font-semibold text-gray-500 mb-1">Timeframe</h4>
          <p class="text-gray-600">{{ service.timeframe }}</p>
        </div>
        
        <div class="mt-auto pt-4 border-t border-gray-100">
          <div class="text-sm text-gray-500 mb-1">Starting from</div>
          <div class="text-3xl font-bold text-orange-600">{{ service.price }}</div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface Services {
    id?: number;
    title: string;
    description: string;
    best_for: string;
    timeframe: string;
    price: string;
    icon: string;
}

const services = ref<Services[]>([]);
const iconColor: string[] = ['text-sky-500', 'text-orange-400', 'text-purple-600', 'text-pink-500'];
const bgColor: string[] = ['bg-sky-50', 'bg-orange-50', 'bg-purple-50', 'bg-pink-50'];



onMounted(async () => {
    const { getItems } = useDirectusItems();
    const data = await getItems({
        collection: 'services'
    });
    services.value = data as Services[];
});
</script>