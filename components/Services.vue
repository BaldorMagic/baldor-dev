<template>
    <section id="services" class="py-20 bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-700">Services & Pricing</h2>
            <div class="grid md:grid-cols-3 gap-8">
                {{ fetchCollections() }}
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">

interface Services {
    id: number;
    title: string;
    description: string;
    price: string;
    icon: string;
    icon_color: string;
    bg_color: string;
}
const { getCollections } = useDirectusCollections();
const router = useRouter();
const fetchCollections = async () => {  const collections = await getCollections();};

</script>