<script setup lang="ts">
import { useHead, useRoute } from '#imports'

const { finalizePendingLocaleChange, locale } = useI18n()

const onBeforeEnter = async () => {
    await finalizePendingLocaleChange()
}

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
        name: 'my',
        mode: 'out-in',
        onBeforeEnter
      }"
            />
        </NuxtLayout>
    </UApp>
</template>

<style scoped>
.my-enter-active,
.my-leave-active {
    transition: opacity 0.3s;
}
.my-enter,
.my-leave-active {
    opacity: 0;
}
</style>
