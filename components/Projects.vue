<template>
    <section id="projects" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-700">
                Real Results for Businesses
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects as Projects[]" :key="index"
                    class="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                    @mouseenter="activeProject = index" @mouseleave="activeProject = 0">
                    <div :class="`bg-gradient-to-br ${project.gradient_from} ${project.gradient_to} rounded-xl p-4 w-fit flex items-center justify-center`">
                        <Icon :name=project.icon class="!p-0 w-8 h-8" :class="project.icon_color"/>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-700">{{ project.title }}</h3>
                    <p class="text-gray-600 mb-4 text-sm">{{ project.description }}</p>
                    <div class="space-y-2 mb-4">
                        <div v-for="(metric, i) in project.metrics" :key="i"
                            class="flex items-center text-sm text-gray-600">
                            <LucideStar class="w-4 h-4 text-orange-400 mr-2" />
                            {{ metric }}
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex"
                            class="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-600">
                            {{ tag }}
                        </span>
                    </div>
                    <NuxtLink to="project.demoUrl"
                        class="text-gray-600 hover:text-orange-400 flex items-center text-sm">
                        <LucideExternalLink :size="16" class="mr-1" /> View Case Study
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const activeProject = ref(0);

interface Projects {
    
    id: number;
    title: string;
    description: string;
    metrics: JSON;
    tags: JSON;
    url: string;
    gradient_from: string;
    gradient_to: string;
    icon: string;
    icon_color: string;
}


const useProjects = () => {
    return useAsyncData('projects', () => {
        const { getItems } = useDirectusItems();
        return getItems({
            collection: 'projects'
        });
    }, {
        server: true
    });
}

const projects = ref<Projects[]>([]);

onMounted(async () => {
    const { data } = await useProjects();
    if (data.value) {
        projects.value = data.value as Projects[];
    }
});</script>