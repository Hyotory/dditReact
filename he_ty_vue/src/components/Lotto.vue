<script setup lang="ts">
import { ref, Ref } from 'vue'

let lottNumbers: Ref<number[]> = ref([0, 0, 0, 0, 0, 0])

const myclick = (): void => {
  let lottArr: number[] = [];

  while(lottArr.length < 6){
    let lottNumber: number = Math.floor(Math.random() * 45) + 1;

    if(!lottArr.includes(lottNumber)){
      lottArr.push(lottNumber);
    }
  }
  // lottArr.sort((a,b) => a-b);
  bubbleSort(lottArr);

  function bubbleSort(arr: number[]): number[] {
    let temp: number = 0;
    for(let i = 0; i < arr.length - 1; i++){
      for(let j = 1; j < arr.length - i; j++){
        if(arr[j] < arr[j-1]) {
          temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }

  console.log(lottArr);
  lottNumbers.value = lottArr;
}
</script>

<template>
  <table>
    <tbody>
    <tr>
      <!-- v-for 사용 (key는 필수) -->
      <td v-for="(number, index) in lottNumbers" :key="index">
        <span class="myspan">{{ number || '_' }}</span>
      </td>
    </tr>
    <tr>
      <td colspan="6">
        <button @click="myclick">로또생성하기</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
table, tr, td{
  border: 1px solid grey;
}
</style>