<script setup>
import {onMounted, onUnmounted, ref} from 'vue'

const msg = ref('LIFE02')

onMounted(() => {
  console.log("LIFE02 onMounted")
})

onUnmounted(() => {
  console.log("LIFE02 onMounted")
})

</script>

<template>
  {{ msg }}

</template>

<style scoped>

</style>
