<template>
  <div>
    <h1>소개</h1>
    <div class="about-content">
      <h2>사원 관리 시스템</h2>
      <p>이 시스템은 Vue.js와 Spring Boot를 사용하여 개발된 사원 관리 애플리케이션입니다.</p>

      <h3>주요 기능</h3>
      <ul>
        <li>사원 목록 조회</li>
        <li>사원 상세 정보 확인</li>
        <li>사원 정보 추가</li>
        <li>사원 정보 수정</li>
        <li>사원 정보 삭제</li>
      </ul>

      <h3>기술 스택</h3>
      <ul>
        <li>Frontend: Vue.js 3, Vue Router</li>
        <li>Backend: Spring Boot, REST API</li>
        <li>Database: MyBatis</li>
        <li>HTTP Client: Axios</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouteAbout'
}
</script>

<style scoped>
h1 {
  color: darkolivegreen;
  text-align: center;
}

.about-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2, h3 {
  color: darkolivegreen;
  margin-top: 30px;
}

ul {
  margin: 15px 0;
  padding-left: 30px;
}

li {
  margin: 8px 0;
  line-height: 1.5;
}

p {
  line-height: 1.6;
  margin: 15px 0;
}
</style>