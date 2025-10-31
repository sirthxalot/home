<template>
    <div class="hero hero--index border-b w-full min-h-[66vh]">
        <UContainer class="min-h-[66vh] flex flex-col">
            <div class="flex flex-col gap-6 m-auto py-6 max-w-[75ch]">
                <h2 class="heading heading--1">{{ $t('hero.title') }}</h2>
                <p class="text-3xl">{{ $t('hero.description') }}</p>
                <p class="text-3xl">{{ $t('hero.description.2') }}</p>
            </div>
        </UContainer>
    </div>
</template>
<script setup lang="ts">
</script>
