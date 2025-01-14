<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
            <div class="bg-white rounder-2xl p-8 shadow-md">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-700">Get Your Free Consultation</h2>
                <form 
                    action="https://formeezy.com/api/v1/forms/675313ee886113000892a167/submissions"
                    method="post"
                    class="space-y-6"
                >
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-gray-600 mb-2">Business Name</label>
                            <input 
                                type="text"
                                name="business-name"
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label class="block text-gray-600 mb-2">Your Name</label>
                            <input 
                                type="text"
                                name="name"
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-gray-600 mb-2">Email</label>
                            <input 
                                type="email"
                                name="email"
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label class="block text-gray-600 mb-2">Phone</label>
                            <input 
                                type="tel"
                                name="phone"
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-600 mb-2">What are you looking to achieve?</label>
                        <textarea 
                            rows="4"
                            name="message"
                            class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                        />
                    </div>
                    <button type="submit"class="w-full bg-orange-400 text-white py-4 px-8 rounded-lg hover:bg-orange-500 transition-colors font-medium">
                        Schedule Free Consultation
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup></script>