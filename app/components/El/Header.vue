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
          :toggle="{ class: 'hidden' }"
>
    <template #title>
      <h1 class="heading">Alexander Bösch</h1>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UTooltip :text="$t('ui.header.menu.color.button.text')">
        <div><UColorModeButton /></div>
      </UTooltip>

      <UTooltip :text="$t('ui.header.menu.github.text')">
        <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/sirthxalot"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        />
      </UTooltip>
      <UTooltip :text="$t('ui.header.menu.language.select.text')">
        <div><LanguageSelect /></div>
      </UTooltip>
    </template>
  </UHeader>
</template>
