<script setup>
import {ref} from 'vue'

let inputValue = ref('');
let results = ref([]);
let coms = ref([]);
let comNum = ref('');

function generateComs() {
  let com = "123";

  let arr9 = [1,2,3,4,5,6,7,8,9];
  for(let i=0; i<1000; i++) {
    let rnd = parseInt((Math.random() * 9).toString());
    let temp = arr9[0];
    arr9[0] = arr9[rnd];
    arr9[rnd] = temp;
  }
  com = `${arr9[0]}${arr9[1]}${arr9[2]}`;
  console.log('com',com)

  // com 문자열을 배열로 변환
  coms.value = com.split('');
  comNum.value = com;
  console.log(comNum.value);
}

function myclick() {
  let myVal = inputValue.value.trim();

  // 입력 검증
  if(isNaN(Number(myVal)) || myVal.length !== 3) {
    alert("정수 3자리만 입력 가능");
    inputValue.value = '';
    return;
  }

  let mine = myVal.split('');
  let uniqueTest = new Set(mine);
  if(uniqueTest.size !== 3) {
    alert("같은 숫자 입력 불가능");
    inputValue.value = '';
    return;
  }

  // 결과 계산
  let strike = 0;
  let ball = 0;

  for(let i = 0; i < 3; i++) {
    if(coms.value[i] === mine[i]) {
      strike++;
    } else if(coms.value.includes(mine[i])) {
      ball++;
    }
  }

  // 결과 추가
  results.value = [...results.value, `${myVal} ${strike}S ${ball}B`];

  // 정답 확인
  if(strike === 3) {
    setTimeout(() => {
      alert(`${comNum.value} 정답입니다! 축하합니다!`);
      resetGame();
    }, 100);
  }

  inputValue.value = '';
}

function resetGame() {
  results.value = [];
  generateComs();
}

// 게임 시작
generateComs();

</script>

<template>
  <div style="padding: 20px;">
    <h2>숫자야구 게임</h2>

    <div style="margin-bottom: 10px;">
      <label>맞출 수: </label>
      <input
          type="text"
          v-model="inputValue"
          style="width: 80px; padding: 5px;"
          maxlength="3"
          @keydown.enter="myclick"
      />
    </div>

    <button @click="myclick" style="margin-bottom: 20px; padding: 8px 16px;">
      맞춰보기
    </button>

    <button @click="resetGame" style="margin-left: 10px; padding: 8px 16px;">
      새게임
    </button>

    <div style="border: 1px solid #ccc; height: 200px; padding: 10px; overflow-y: auto; background: #f9f9f9;">
      <div v-for="(result, index) in results" :key="index">{{ result }}</div>
    </div>
  </div>
</template>

<style scoped>
</style>
