<script setup lang="ts">
const timeline = ref([
    {
        date: '2019 - 2025',
        title: $t('tl.jobs.4.title'),
        description: $t('tl.jobs.4.description'),
        icon: 'i-lucide-code'
    },
    {
        date: '2015 - 2018',
        title: $t('tl.jobs.3.title'),
        description: $t('tl.jobs.3.description'),
        icon: 'i-lucide-code'
    },  
    {
        date: '2012 - 2014',
        title: $t('tl.jobs.2.title'),
        description: $t('tl.jobs.2.description'),
        icon: 'i-lucide-palette'
    },    
    {
        date: '2008 - 2011',
        title: $t('tl.jobs.1.title'),
        description: $t('tl.jobs.1.description'),
        icon: 'i-lucide-rocket'
    },    
])
</script>

<template>
    <div class="hero hero--index border-b w-full min-h-[66vh]">
        <UContainer class="min-h-[66vh] flex flex-col items-center justify-center">
            <div class="flex">
                <div class="hidden h-[550px]">
                    <img class="max-h-[550px]" src="~/assets/img/index/alexander-figure.png" alt="Figure">
                </div>
                <div class="flex flex-col gap-6 lg:ml-16 py-6 max-w-[75ch]">
                    <h2 class="heading heading--1">{{ $t('hero.title') }}</h2>
                    <p class="text-3xl">{{ $t('hero.description') }}</p>
                    <p class="text-3xl">{{ $t('hero.description.2') }}</p>

                    <UTimeline class="mt-6" :items="timeline" />
                </div>
            </div>

        </UContainer>
    </div>
</template>

<style scoped>

</style>
