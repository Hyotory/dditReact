<script setup>
import {defineComponent} from "vue";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/emp_list.do">사원관리</RouterLink>
  <br />

  <!-- Route Content -->
  <RouterView />

</template>

<style scoped></style>
