<template>
  <section id="usp">
    <UContainer class="flex flex-col min-h-[33vh] xl:min-h-[calc(100vh-var(--ui-header-height))]">
          <div class="hidden md:flex py-8 flex-col gap-6 m-auto text-center max-w-[80ch]">
            <h2 aria-label="Unique Selling Proposition" class="font-heading text-center text-4xl sm:text-5xl text-pretty tracking-tight font-bold text-highlighted leading-[1.2] uppercase">
              <typed class="hidden lg:inline-flex" :strings="[$t('usp.1'), $t('usp.2'), $t('usp.3')]" :typeSpeed="50">
                <span class="typing"></span>
              </typed>
              <span class="inline-flex sm:hidden">{{ $t('usp.3') }}</span>
            </h2>
          </div>
    </UContainer>
  </section>
</template>
