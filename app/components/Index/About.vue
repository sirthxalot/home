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
  <UContainer class="lg:py-8">
      <div class="m-auto flex flex-col gap-4 md:max-w-[33vw] p-4 rounded border">
        <p class="text-lg">Hey! Mein Name ist Alexander Bösch und ich bin leidenschaftlicher Webentwickler. Du befindest Dich auf meiner Webseite &ndash; Herzlich Willkommen!</p>
        <span class="text-center">
          <UModal fullscreen scrollable title="Über Mich" :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }">
        <UButton label="Erfahre mehr über mich" color="neutral" class="text-lg uppercase" />

        <template #body>
          <div>
            <h2 class="font-heading border-b text-3xl mb-4">Perönliche Daten</h2>
            <h2 class="font-heading border-b text-3xl mb-4">Zeitleiste</h2>
            <UTimeline :items="timeline" />
            <h2 class="font-heading border-b text-3xl mb-4">Fähigkeiten</h2>
            <h2 class="font-heading border-b text-3xl mb-4">Hobbies</h2>
          </div>
        </template>
      </UModal>
        </span>
      </div>
  </UContainer>
</template>
