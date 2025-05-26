<script setup>
import {ref} from 'vue'

let mine = ref('');
let com = ref('');
let result = ref('');

const myclick = () => {
  // 입력값이 비어있는지 먼저 체크
  if (mine.value.trim() === '') {
    result.value = '홀 또는 짝을 입력하세요';
    alert(result.value);
    return;
  }

  // 컴퓨터 랜덤 숫자 생성 (1-10)
  const randomNum = Math.floor(Math.random() * 10) + 1;

  // 사용자 입력 검증 (홀/짝 입력)
  const userChoice = mine.value.toLowerCase().trim();
  if (userChoice !== '홀' && userChoice !== '짝') {
    result.value = '홀 또는 짝을 입력하세요';
    alert(result.value);
    return;
  }

  // 컴퓨터 숫자가 홀수인지 짝수인지 판정
  const isOdd = randomNum % 2 === 1;
  const computerResult = isOdd ? '홀' : '짝';

  // 컴퓨터 결과를 "홀" 또는 "짝"으로 표시
  com.value = computerResult;

  // 결과 판정
  if (userChoice === computerResult) {
    result.value = '당신 승리!';
  } else {
    result.value = '컴퓨터 승리!';
  }
};
</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>내 선택</td>
      <td>
        <input type="text" v-model="mine" placeholder="홀 또는 짝">
      </td>
    </tr>
    <tr>
      <td>컴퓨터 결과</td>
      <td>
        <input type="text" v-model="com" readonly>
      </td>
    </tr>
    <tr>
      <td>결과</td>
      <td>
        <input type="text" v-model="result" readonly>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" @click="myclick" value="게임하기">
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style>
input[type="text"] {
  width: 100px;
  padding: 4px;
  text-align: center;
}

table {
  margin: 20px auto;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

td {
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
}

input[type="button"] {
  width: 100%;
  padding: 8px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

input[type="button"]:hover {
  background-color: #45a049;
}
</style>

