<script setup>
// defineProps로 props 정의
const props = defineProps({
  alt: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>속성: {{ props.alt }}</div>
</template>

<style scoped>

</style>