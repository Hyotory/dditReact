<script setup>
import {onMounted, onUnmounted, ref} from 'vue'

const msg = ref('LIFE01')

onMounted(() => {
  console.log("LIFE01 onMounted")
})

onUnmounted(() => {
  console.log("LIFE01 onMounted")
})

</script>

<template>
  {{ msg }}

</template>

<style scoped>

</style>
