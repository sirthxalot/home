<template>
    <section id="offer" class="mt-16 flex flex-col gap-16 pb-16">
        <UContainer>
            <h2 class="heading text-2xl text-center mb-9">{{ $t('offer.title') }}</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                    <UCard>
                        <template #header>
                            <strong class="uppercase font-bold heading">
                                {{ $t('offer.1.title') }}
                            </strong>
                        </template>
                        <ul>
                            <li>{{ $t('offer.1.1') }}</li>
                            <li>{{ $t('offer.1.2') }}</li>
                            <li>{{ $t('offer.1.3') }}</li>
                            <li>{{ $t('offer.1.4') }}</li>
                            <li>{{ $t('offer.1.5') }}</li>
                            <li>{{ $t('offer.1.6') }}</li>
                            <li>{{ $t('offer.1.7') }}</li>
                        </ul>
                    </UCard>
                </div>
                <div>
                    <UCard>
                        <template #header>
                            <strong class="uppercase font-bold font-heading">
                                {{ $t('offer.2.title') }}
                            </strong>
                        </template>
                        <ul>
                            <li>{{ $t('offer.2.1') }}</li>
                            <li>{{ $t('offer.2.2') }}</li>
                            <li>{{ $t('offer.2.3') }}</li>
                            <li>{{ $t('offer.2.4') }}</li>
                            <li>{{ $t('offer.2.5') }}</li>
                            <li>{{ $t('offer.2.6') }}</li>
                            <li>{{ $t('offer.2.7') }}</li>
                        </ul>
                    </UCard>
                </div>
                <div>
                    <UCard>
                        <template #header>
                            <strong class="uppercase font-bold font-heading">
                                {{ $t('offer.3.title') }}
                            </strong>
                        </template>
                        <ul>
                            <li>{{ $t('offer.3.1') }}</li>
                            <li>{{ $t('offer.3.2') }}</li>
                            <li>{{ $t('offer.3.3') }}</li>
                            <li>{{ $t('offer.3.5') }}</li>
                            <li>{{ $t('offer.3.4') }}</li>
                        </ul>
                    </UCard>
                </div>
            </div>
        </UContainer>
    </section>
</template>
<script setup lang="ts">
</script>
