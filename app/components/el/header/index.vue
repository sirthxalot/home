<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
    <UHeader title="Alexander Bösch">
        <template #right>
            <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                {{ locale.name }}
            </NuxtLink>
            <UColorModeButton />
        </template>
    </UHeader>
</template>
