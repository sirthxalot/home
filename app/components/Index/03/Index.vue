<script setup lang="ts">
import { tooltip } from '#build/ui';

const users = ref([
  {
    name: $t('name'),
    description: 'sirthxalot',
    to: 'https://github.com/sirthxalot',
    target: '_blank',
    avatar: {
      src: 'https://github.com/sirthxalot.png',
      alt: 'sirthxalot',
      loading: 'lazy' as const
    }
  }
])
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
  <section id="alexander-boesch-professional-experience" class="py-8">
    <u-container>
      <h2 class="sr-only" v-html="$t('job.experience.label')" />
        <UPageList>
    <UPageCard
      v-for="(user, index) in users"
      :key="index"
      variant="ghost"
      :to="user.to"
      :target="user.target"
    >
      <template #body>
        <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
      </template>
    </UPageCard>
  </UPageList>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-6 py-8">
        <div class="flex flex-col gap-4">
          <h3 class="font-black text-3xl uppercase" v-html="$t('index.hero.production.title')" />
          <p v-html="$t('index.hero.production.description.1')" />
          <p v-html="$t('index.hero.production.description.2')" />
        </div>
        <div class="col-span-2">
          <UTimeline :items="timeline" />
        </div>
      </div>
    </u-container>
  </section>
</template>
