<script setup>
import {ref} from 'vue'

const dan = ref( '')
const result = ref('')

const Gugu = () => {
  const num = +(dan.value)
  let output = '';
  for(let i=1; i<=9; i++) {
    output += `${num} x ${i} = ${num * i}\n`
  }
  result.value = output
}

</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>출력단수</td>
      <td>
        <input type="text" v-model="dan">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" id="출력하기" value="출력하기" @click="Gugu">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <textarea v-model="result" rows="13" cols="17" readonly></textarea>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style>
input[type="text"]{
  width: 40px;
}
</style>
