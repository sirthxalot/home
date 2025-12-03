<template>
    <div id="start" class="hero hero--index border-b w-full">
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="card__column bg-linear-150 from-cyan-500/10 to-blue-500/30" tabindex="1">
                <div class="card">
                    <h2 class="card__header">
                        1. {{ $t('offer.1.title') }}
                    </h2>
                    <div class="card__body animate-fade-in">
                        <ul class="text-lg leading-8">
                            <li>{{ $t('offer.1.1') }}</li>
                            <li>{{ $t('offer.1.2') }}</li>
                            <li>{{ $t('offer.1.3') }}</li>
                            <li>{{ $t('offer.1.4') }}</li>
                            <li>{{ $t('offer.1.5') }}</li>
                            <li>{{ $t('offer.1.6') }}</li>
                            <li>{{ $t('offer.1.7') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card__column bg-linear-150 from-yellow-500/10 to-orange-500/30" tabindex="2">
                <div class="card">
                    <h2 class="card__header">
                       2. {{ $t('offer.2.title') }}
                    </h2>
                    <div class="card__body animate-fade-in">
                        <ul class="text-lg leading-8">
                            <li>{{ $t('offer.2.1') }}</li>
                            <li>{{ $t('offer.2.2') }}</li>
                            <li>{{ $t('offer.2.3') }}</li>
                            <li>{{ $t('offer.2.4') }}</li>
                            <li>{{ $t('offer.2.5') }}</li>
                            <li>{{ $t('offer.2.6') }}</li>
                            <li>{{ $t('offer.2.7') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card__column bg-linear-150 from-pink-500/10 to-purple-500/30" tabindex="3">
                <div class="card">
                    <h2 class="card__header">
                       3. {{ $t('offer.3.title') }}
                    </h2>
                    <div class="card__body animate-fade-in">
                        <ul class="text-lg leading-8">
                            <li>{{ $t('offer.3.1') }}</li>
                            <li>{{ $t('offer.3.2') }}</li>
                            <li>{{ $t('offer.3.3') }}</li>
                            <li>{{ $t('offer.3.5') }}</li>
                            <li>{{ $t('offer.3.4') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "../../../../assets/css/sirthxalot.css";

/** CARD COLUMN */

.card__column {
    @apply flex flex-col items-center justify-items-center
    cursor-crosshair;

    @apply min-h-screen lg:min-h-[66vh]
    opacity-100 lg:opacity-65 hover:opacity-100 focus:opacity-100;
}

/** CARD COLUMN HOVER EFFECTS */

.card__column:hover > .card,
.card__column:focus > .card {
    .card__body {
        @apply lg:block;
    }
    .card__header {
        @apply lg:relative lg:inline-block;
    }
    .card__header::after,
    .card__header::before {
        @apply lg:transform-[scaleX(1)]
    }
}

/** CARD */

.card {
    @apply flex flex-col w-full lg:max-w-[60ch] m-auto gap-12 px-4 lg:px-0;
}

/** CARD HEADER */

.card__header {
    @apply text-2xl lg:text-4xl uppercase text-center border-t border-b py-4 lg:p-0 lg:border-none;
}

.dark .card__header {
    @apply after:bg-white before:bg-white;
}

.card__header::after,
.card__header::before {
    content: '';
    @apply absolute bg-black w-full h-[0.8px] bottom-[-5px] left-0 origin-right;
    transform: scaleX(0);
    transition: transform 0.4s ease-out;
}

.card__header::before {
    @apply top-[-5px] origin-left;
}

/** CARD BODY */

.card__body {
    @apply block lg:hidden;
}
</style>
