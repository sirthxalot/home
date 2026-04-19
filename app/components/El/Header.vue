<script setup lang="ts">
import {useHead} from "#imports";
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [])
</script>

<template>
<UHeader  ref="header"
          id="top"
          class="header"
          :toggle="{  }"
>
    <template #title>
      <h1 class="font-heading" v-html="$t('name')" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <menu-header />
    </template>

    <template #content="{ close }">
      <menu-header-content :close="close" />
    </template>
  </UHeader>
</template>
