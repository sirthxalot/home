<script setup lang="ts">
const offers = {
  1: {
    title: $t('offer.1.title'),
    list: [
      $t('offer.1.1'),
      $t('offer.1.2'),
      $t('offer.1.3'),
      $t('offer.1.4'),
      $t('offer.1.5'),
      $t('offer.1.6'),
      $t('offer.1.7')
    ]
  },
  2: {
    title: $t('offer.2.title'),
    list: [
      $t('offer.2.1'),
      $t('offer.2.2'),
      $t('offer.2.3'),
      $t('offer.2.4'),
      $t('offer.2.5'),
      $t('offer.2.6'),
      $t('offer.2.7')
    ]
  },
  3: {
    title: $t('offer.3.title'),
    list: [
      $t('offer.3.1'),
      $t('offer.3.2'),
      $t('offer.3.3'),
      $t('offer.3.4'),
      $t('offer.3.5')
    ]
  }
}
</script>

<template>
<section id="alexander-boesch-offer" class="py-16 bg-orange-500 dark:bg-gray-900">
  <u-container>
    <h2 class="text-center text-3xl font-bold mb-8 text-white">{{ $t('offer.title') }}</h2>
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
      <div class="border border-gray-300 rounded-md shadow-md bg-white dark:bg-gray-700" v-for="(offer) in offers">
        <h3 class="text-xl uppercase py-4 border-b border-gray-300 text-orange-500">{{ offer.title }}</h3>
        <div class="py-4">
          <ul class="text-left list-disc pt-2 pb-4">
            <li v-for="item in offer.list" class="text-sm mx-8">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
</u-container>
</section>
</template>
