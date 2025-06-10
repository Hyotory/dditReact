<template>
  <div>
    <h2>EMP MOD 화면</h2>
    <table>
      <tbody>
      <tr>
        <td>사번</td>
        <td>
          <input type="text" v-model="vo.e_id" />
        </td>
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
          <input type="button" value="저장" @click="fn_mod" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EmpMod',
  data() {
    return {
      vo: { e_id: ".", e_name: "", gen: "", addr: "" }
    }
  },
  async mounted() {
    const e_id = this.$route.query.e_id
    if (e_id) {
      try {
        const resp = await axios.get('http://localhost:8080/api/emp/detail', {
          params: { e_id: e_id }
        })
        console.log(resp)
        if (resp.data.success) {
          this.vo = resp.data.emp
        } else {
          console.error('데이터 로드 실패:', resp.data.message)
          alert(resp.data.message)
        }
      } catch (error) {
        console.error('데이터 로드 실패:', error)
        alert('서버와의 통신에 실패했습니다.')
      }
    }
  },
  methods: {
    async fn_mod() {
      try {
        const resp = await axios.post('http://localhost:8080/api/emp/update', this.vo)
        if (resp.data.success && resp.data.cnt == 1) {
          alert("정상적으로 수정되었습니다.")
          this.$router.push('/emp_list')
        } else {
          alert(resp.data.message || "수정도중 문제가 생겼습니다.")
        }
      } catch (error) {
        console.error('수정 실패:', error)
        alert("수정도중 문제가 생겼습니다.")
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