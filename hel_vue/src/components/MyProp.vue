<script setup>
// defineProps로 props 정의
const props = defineProps({
  alt: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>속성: {{ props.alt }}</div>
  <img :src="props.src" :alt="props.alt">
</template>

<style scoped>

</style>