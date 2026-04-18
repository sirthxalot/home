<template>
  <UContainer class="flex flex-col min-h-[33vh] xl:min-h-[calc(100vh-var(--ui-header-height))]">
        <div class="hidden md:flex py-8 flex-col gap-6 m-auto text-center max-w-[80ch]">
          <h1 :aria-label="$t('index.introduction.title.p.3')" class="font-heading text-center text-5xl text-pretty tracking-tight font-bold text-highlighted leading-[1.2] uppercase">
            &quot;{{ $t('index.introduction.title') }}
            <typed :strings="[$t('index.introduction.title.p.1'), $t('index.introduction.title.p.2'), $t('index.introduction.title.p.3')]" :typeSpeed="50">
              <span class="typing"></span>
            </typed>&quot;
          </h1>
        </div>
        <div class="md:hidden flex py-8 flex-col gap-6 m-auto text-center max-w-[80ch]">
          <h1 class="font-heading text-center text-5xl text-pretty tracking-tight font-bold text-highlighted leading-[1.2] uppercase">
            &quot;{{ $t('index.introduction.title') }} <span>{{ $t('index.introduction.title.p.3') }}</span>&quot;
          </h1>
        </div>
  </UContainer>
</template>
