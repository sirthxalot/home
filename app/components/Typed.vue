<script setup>
import Typed from 'typed.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const el = ref(null)
let typed = null
const props = defineProps({
  strings: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  typed = new Typed(el.value, {
    strings: props.strings,
    typeSpeed: 120,
    backSpeed: 30,
    loop: false
  })
})

// Wichtig für Performance: Beim Verlassen der Seite zerstören
onBeforeUnmount(() => {
  if (typed) typed.destroy()
})
</script>

<template>
  <span ref="el"></span>
</template>
