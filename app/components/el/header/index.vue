<script setup lang="ts">
import {useHead} from "#imports";

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
    <UHeader ref="header"
             id="top"
             class="header"
    >
        <template #title>
            <h1 class="heading">Alexander Bösch</h1>
        </template>
        <template #right>
            <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                {{ locale.name }}
            </NuxtLink>
            <UColorModeButton />
        </template>
    </UHeader>
</template>
