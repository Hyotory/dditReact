<script setup>
import { ref } from 'vue'

// ref를 사용하여 input 엘리먼트 참조 생성
const inputElement = ref(null)

const handleFocus = () => {
  // .value를 사용하여 실제 DOM 엘리먼트에 접근
  if (inputElement.value) {
    inputElement.value.focus()
  }
}
</script>

<template>
  <!-- Vue의 ref 디렉티브 사용 -->
  <input type="text" ref="inputElement" placeholder="여기에 포커스됩니다" />
  <!-- Vue의 이벤트 리스너 사용 -->
  <button @click="handleFocus">FOCUS</button>
</template>

<style scoped>
input {
  padding: 8px;
  margin-right: 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>