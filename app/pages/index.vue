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
<UContainer class="flex flex-col min-h-[calc(100vh-var(--ui-header-height))]">
        <div class="py-8 flex flex-col gap-6 m-auto text-center max-w-[80ch]">
          <h1 :aria-label="$t('index.introduction.title.p.3')" class="font-heading text-center text-5xl text-pretty tracking-tight font-bold text-highlighted leading-[1.2] uppercase">
            &quot;{{ $t('index.introduction.title') }}
            <typed :strings="[$t('index.introduction.title.p.1'), $t('index.introduction.title.p.2'), $t('index.introduction.title.p.3')]" :typeSpeed="50">
      <span class="typing"></span>
    </typed>&quot;
            </h1>
        </div>
  </UContainer>
    </div>
</template>
