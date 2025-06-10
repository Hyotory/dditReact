<template>
  <div>
    <h2>EMP ADD 화면</h2>
    <table>
      <tbody>
      <tr>
        <td>사번</td>
        <td>자동추가</td>
      </tr>
      <tr>
        <td>이름</td>
        <td>
          <input type="text" v-model="vo.e_name" />
        </td>
      </tr>
      <tr>
        <td>전화</td>
        <td>
          <input type="text" v-model="vo.gen" />
        </td>
      </tr>
      <tr>
        <td>이메일</td>
        <td>
          <input type="text" v-model="vo.addr" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="button" value="저장" @click="fn_add" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EmpAdd',
  data() {
    return {
      vo: { e_id: "", e_name: "", gen: "", addr: "" }
    }
  },
  methods: {
    async fn_add() {
      try {
        const resp = await axios.post('http://localhost:8080/api/emp/add', this.vo)
        if (resp.data.success && resp.data.cnt > 0) {
          alert("정상적으로 추가되었습니다.")
          this.$router.push('/emp_list')
        } else {
          alert(resp.data.message || "추가도중 문제가 생겼습니다.")
        }
      } catch (error) {
        console.error('추가 실패:', error)
        alert("추가도중 문제가 생겼습니다.")
      }
    }
  }
}
</script>

<style scoped>
table,
tr,
td {
  border: 1px solid darkolivegreen;
  text-align: center;
}

input[type="text"] {
  width: 50px;
}

a {
  color: blue;
  text-decoration: underline;
}
</style>