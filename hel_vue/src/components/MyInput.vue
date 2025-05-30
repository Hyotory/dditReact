<script setup>
import { ref } from 'vue'  // ref import 추가!
console.log("alalalalla")
const props = defineProps({
  value: String
});

const mvalue = ref(props.value || '');

defineExpose({
  value: props.value,
  mvalue,
  setValue: (newValue) => {
    mvalue.value = newValue;
  }
});
</script>

<template>
  <input type="text" v-model="mvalue" />
</template>

<style scoped>
</style>