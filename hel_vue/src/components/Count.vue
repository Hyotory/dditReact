<script setup>
import {ref} from 'vue'

const count = ref( + '100')

const myclick = () => {
  count.value ++;
}

</script>

<template>
  {{ count }}
  <button type="button" @click="myclick">INCREASE</button>

</template>

<style scoped>

</style>
