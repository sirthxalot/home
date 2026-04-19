<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: computed(() => t('index.seo.title')),
})
useSeoMeta({
    title: $t('index.seo.title'),
    ogTitle: $t('index.seo.title'),
    description: $t('index.seo.description'),
    ogDescription: $t('index.seo.description'),
    ogUrl: 'https://sirthxalot.com',
    script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": $t('name'),
        "jobTitle": $t('job.title'),
        "address": {
          "@type": "PostalAddress",
          "addressLocality": $t('city'),
          "addressCountry": "CH"
        },
        "sameAs": [
          "https://github.com/sirthxalot/",
          "https://www.linkedin.com/in/alexander-b%C3%B6sch-12b891129/",
          "http://proko.com/@sirthxalot/"
        ],
        "knowsAbout": ["PHP", "Laravel", "Shopware", "WordPress", "Nuxt.js", "Vue.js", "Docker", "TYPO3"]
      })
    }
  ]
})
</script>

<template>
    <main>
      <index-01 />
      <index-02 />
      <index-03 />
      <index-04 />
      <index-05 />
      <index-06 />
    </main>
</template>
