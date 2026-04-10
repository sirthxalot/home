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
      <IndexHero :title="$t('index.hero.title')">
        <p>{{ $t('index.hero.description.1') }}</p>
        <p>{{ $t('index.hero.description.2') }}</p>
      </IndexHero>
    </div>
</template>
