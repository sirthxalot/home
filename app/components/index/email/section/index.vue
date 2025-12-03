<template>
    <div class="flex flex-col py-16 bg-black text-white min-h-[80px] w-full">
        <div class="text-center m-auto">
            <h3 class="heading text-3xl mb-3">
                {{ $t('mail.title') }}
            </h3>
            <a class="heading" href="mailto:call@sirthxalot.com">
                <strong>{{ $t('mail.description') }}</strong><br />
                <span>call@sirthxalot.com</span>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
