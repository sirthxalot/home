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
      <h1 class="font-heading" v-html="$t('name')" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UTooltip :text="$t('color.button.text')">
        <div><UColorModeButton /></div>
      </UTooltip>

      <UTooltip :text="$t('github.text')">
        <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/sirthxalot"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        />
      </UTooltip>
      <UTooltip :text="$t('i18n.lang.select.text')">
        <div><LanguageSelect /></div>
      </UTooltip>
    </template>
  </UHeader>
</template>
