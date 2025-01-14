<template>
    <footer class="bg-gray-800 text-gray-300 py-12">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Ready to grow your business?</h3>
                    <p class="mb-4">Let's discuss how I can help you reach more customers and increase revenue.</p>
                    <div class="flex space-x-4">
                        <NuxtLink to="#" class="text-gray-300 hover:text-orange-300">
                            <LucideLinkedin size="24" />
                        </NuxtLink>
                        <NuxtLink to="#" class="text-gray-300 hover:text-orange-300">
                            <LucideMail size="24" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="md:text-right">
                    <div class="text-sm text-gray-400">Email</div>
                    <a hraf="mailto:james@baldor.dev" class="text-white hover:text-orange-300">james@baldor.dev</a>
                    <div class="text-sm text-gray-400 mt-4">Phone</div>
                    <a hraf="tel:+33661260844" class="text-white hover:text-orange-300">+33(0)6.61.26.08.44</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup></script>