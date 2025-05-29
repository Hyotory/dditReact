<script setup>
import { ref } from 'vue'
import Life01 from "./components/Life01.vue";
import Life02 from "./components/Life02.vue";

const flagLife = ref(true)

const myclick = () => {
  flagLife.value = !flagLife.value
}
</script>

<template>
  <Life01 v-if="flagLife" />
  <Life02 v-else />
  <br>
  <button @click="myclick">toggle</button>
</template>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>