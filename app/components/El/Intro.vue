<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <UContainer class="hero hero--container flex flex-col min-h-[calc(100vh-var(--ui-header-height))]">
        <div class="py-8 flex flex-col gap-6 m-auto text-center max-w-[80ch]">
          <h1 class="font-heading text-center text-5xl text-pretty tracking-tight font-bold text-highlighted leading-[1.2] uppercase">&quot;{{ props.title }}&quot;</h1>
          <div class="text-xl flex flex-col gap-6">
            <slot />
          </div>
        </div>
  </UContainer>
</template>
