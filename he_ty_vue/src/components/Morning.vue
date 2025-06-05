<script setup lang="ts">
import { ref, Ref } from 'vue'

const msg: Ref<string> = ref('Good Morning')

const myclick = (): void => {
  msg.value = 'Good Evening'
}
</script>

<template>
  {{ msg }}
  <button type="button" @click="myclick">CLICK</button>
</template>

<style scoped>
</style>