<template>
  <section id="usp">
    <UContainer class="bg-no-repeat bg-cover bg-[url(/img/lochlainn-riordan-G6CR8v_bts0-unsplash.jpg)] flex flex-col min-h-[33vh] xl:min-h-[calc(100vh-var(--ui-header-height))]">
          <div class="flex py-8 flex-col gap-6 m-auto text-center max-w-[80ch]">
            <h2 aria-label="Unique Selling Proposition" class="font-heading text-white text-center text-4xl sm:text-5xl text-pretty tracking-tight font-bold text-highlighted leading-[1.2] uppercase">
              <span class="hidden md:inline-flex">
                <typed :strings="[$t('usp.1'), $t('usp.2'), $t('usp.3')]" :typeSpeed="50">
                  <span class="typing"></span>
                </typed>
              </span>
              <span class="inline-flex md:hidden" v-html="$t('usp.3')" />
            </h2>
          </div>
    </UContainer>
  </section>
</template>
