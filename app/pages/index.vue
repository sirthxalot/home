<script setup lang="ts">
useSeoMeta({
    title: 'Alexander Bösch',
    ogTitle: 'Alexander Bösch',
    description: $t('index.seo.description'),
    ogDescription: $t('index.seo.description'),
})
</script>

<template>
    <div>
        <IndexAboutSection />
        <IndexHeroSection />
        <IndexLogoSection />
        <IndexCodingSection />
        <IndexEmailSection />
    </div>
</template>
