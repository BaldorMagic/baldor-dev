<template>
    <nav class="fixed top-0 w-full bg-white/90 background-blur-sm shadow-sm z-50">
        <div class="max-auto px-4 py-4 flex justify-between items-center">
            <span class="text-xl font-bold text-gray-700">
                Web Solutions for Businesses
            </span>
            <button class="lg:hidden text-gray-600 hover:text-orange-400 transition-colors" @click="isOpen = !isOpen"
                aria-label="Toggle menu">
                <Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
            </button>
            <div class="hidden lg:flex space-x-8 flex-wrap items-center justify-center gap-2">
                <NuxtLink to="#projects" class="text-gray-600 hover:text-orange-400 transition-colors">Results
                </NuxtLink>
                <NuxtLink to="#services" class="text-gray-600 hover:text-orange-400 transition-colors">Services
                </NuxtLink>
                <NuxtLink to="#contact"
                    class="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors">Get
                    Qhote</NuxtLink>
            </div>
                <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="isOpen"
          class="lg:hidden mt-4 pb-4 space-y-4 flex flex-col items-start"
        >
          <NuxtLink 
            to="#projects" 
            class="text-gray-600 hover:text-orange-400 transition-colors"
            @click="isOpen = false"
          >
            Results
          </NuxtLink>
          <NuxtLink 
            to="#services" 
            class="text-gray-600 hover:text-orange-400 transition-colors"
            @click="isOpen = false"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="#contact" 
            class="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
            @click="isOpen = false"
          >
            Get Quote
          </NuxtLink>
        </div>
      </Transition>
        </div>
    </nav>
</template>
<script setup lang="ts">
const isOpen = ref(false);
</script>