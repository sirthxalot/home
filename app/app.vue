<script setup lang="ts">
import { useHead } from '#imports'

const { finalizePendingLocaleChange, locale } = useI18n()

/**
 * Fade out page while loading the locale.
 */
const onBeforeEnter = async () => {
    await finalizePendingLocaleChange()
}

/**
 * Set script for cookiebot using locale.
 */
useHead({
    script: [
        {
            id: 'Cookiebot',
            src: "https://consent.cookiebot.com/uc.js",
            "data-cbid": "9c9bf308-c226-412b-ac3a-8c7ed80c5dc2",
            "data-culture": locale,
            "type": "text/javascript",
            async: true,
        }
    ]
})
</script>

<template>
    <UApp>
        <NuxtLayout>
            <NuxtRouteAnnouncer />
            <NuxtPage :transition="{
                name: 'i18n',
                mode: 'out-in',
                onBeforeEnter
            }"/>
            <UButton class="hidden"icon="i-lucide-moon" />
            <UButton class="hidden" icon="i-lucide-sun" />
        </NuxtLayout>
    </UApp>
</template>

<style scoped>
.i18n-enter-active,
.i18n-leave-active {
    transition: opacity 0.3s;
}
.i18n-enter,
.i18n-leave-active {
    opacity: 0;
}
</style>
