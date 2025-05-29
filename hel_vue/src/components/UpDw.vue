<script setup>
import {ref} from 'vue'

const ran = ref(parseInt(Math.random() * 99) + 1);
const history = ref("");

const myclick = () => {
  const mine = parseInt(Math.random() * 99) + 1;
  console.log('컴퓨터 추측:', mine);
  console.log('정답:', ran.value);

  let line = "";
  if (ran.value === mine) {
    line += mine + "\t" + "정답<br/>";
    alert("정답");
  } else if (ran.value > mine) {
    line += mine + "\t" + " 내가 작다<br/>";
  } else {
    line += mine + "\t" + " 내가 크다<br/>";
  }
  history.value += line;
}
</script>

<template>
  <table border="1px">
    <tbody>
    <tr>
      <td>맞출 수</td>
      <td>
        <input type="text" id="it" v-model="ran">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" @click="myclick" value="맞춰보기">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div id="mydiv" v-html="history"></div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
#it {
  width: 30px;
}
#mydiv {
  height: 150px;
}
</style>