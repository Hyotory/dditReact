<script setup>
import {ref} from 'vue'

const msg = ref('Good Morning')

const myclick = () => {
  msg.value = 'Good Evening'
}

</script>

<template>
  {{ msg }}
  <button type="button" @click="myclick">CLICK</button>

</template>

<style scoped>

</style>
