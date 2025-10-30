<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
    await finalizePendingLocaleChange()
}

const { state } = useCookieConsent()

// Using the composable in your script
const allowedStatisticsAndMarketing = computed(() => {
    return state.value.statistic && state.value.marketing
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
