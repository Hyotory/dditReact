<script setup>
import { ref } from 'vue'
import MyInput from "./components/MyInput.vue";

let obj = ref(null);
let obj_value =ref(null);

const myclick= () => {
  obj.value.value= "bye"
  obj_value.value.setValue("bye");
}

</script>

<template>
  <input type="text" value="hello" ref="obj"/><br/>
  <MyInput value="hallo" ref="obj_value"/><br/>
  <button @click="myclick">CHANGE TEXT</button><br/>
</template>