<template>
  <div>
    <h2>EMP LIST 화면</h2>
    <table>
      <thead>
      <tr>
        <td>사번</td>
        <td>이름</td>
        <td>전화</td>
        <td>이메일</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="vo in list" :key="vo.e_id">
        <td>
          <a @click="fn_one(vo.e_id)" style="cursor: pointer">{{ vo.e_id }}</a>
        </td>
        <td>{{ vo.e_name }}</td>
        <td>{{ vo.gen }}</td>
        <td>{{ vo.addr }}</td>
      </tr>
      </tbody>
    </table>
    <input type="button" value="추가" @click="fn_add" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EmpList',
  data() {
    return {
      list: [
        { e_id: "1", e_name: "1", gen: "1", addr: "1" },
        { e_id: "2", e_name: "2", gen: "2", addr: "2" },
        { e_id: "3", e_name: "3", gen: "3", addr: "3" },
      ]
    }
  },
  async mounted() {
    await this.fn_list()
  },
  methods: {
    async fn_list() {
      try {
        const resp = await axios.get('http://localhost:8080/api/emp/list')
        if (resp.data.success) {
          this.list = resp.data.list
        } else {
          console.error('데이터 로드 실패:', resp.data.message)
          alert(resp.data.message)
        }
      } catch (error) {
        console.error('데이터 로드 실패:', error)
        alert('서버와의 통신에 실패했습니다.')
      }
    },
    fn_one(e_id) {
      this.$router.push(`/emp_detail?e_id=${e_id}`)
    },
    fn_add() {
      this.$router.push('/emp_add')
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