<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
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
