<template>
    <div class="flex flex-col py-16 bg-black dark:bg-gray-900 text-white min-h-[80px] w-full">
        <div class="text-center m-auto">
            <h2 class="font-black uppercase text-3xl mb-3">
                {{ $t('mail.section.title') }}
            </h2>
            <a class="heading" href="mailto:call@sirthxalot.com">
                <strong>{{ $t('mail.section.description') }}</strong><br />
                <span>call@sirthxalot.com</span>
            </a>
        </div>
    </div>
</template>
