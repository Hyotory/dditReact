<template>
  <div>
    <h2>EMP DETAIL 화면</h2>
    <table>
      <tbody>
      <tr>
        <td>사번</td>
        <td>{{ vo.e_id }}</td>
      </tr>
      <tr>
        <td>이름</td>
        <td>{{ vo.e_name }}</td>
      </tr>
      <tr>
        <td>전화</td>
        <td>{{ vo.gen }}</td>
      </tr>
      <tr>
        <td>이메일</td>
        <td>{{ vo.addr }}</td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="button" value="수정" @click="fn_mod" />
          <input type="button" value="삭제" @click="fn_del" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EmpDetail',
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
    fn_mod() {
      this.$router.push(`/emp_mod?e_id=${this.vo.e_id}`)
    },
    async fn_del() {
      const flag_c = confirm(
          "한번 지워진 데이터는 복구불가합니다.\n삭제하시렵니까?"
      )
      if (!flag_c) {
        return
      }

      try {
        const resp = await axios.post('http://localhost:8080/api/emp/delete', {
          e_id: this.vo.e_id
        })
        if (resp.data.success && resp.data.cnt == 1) {
          alert("정상적으로 삭제되었습니다.")
          this.$router.push('/emp_list')
        } else {
          alert(resp.data.message || "삭제도중 문제가 생겼습니다.")
        }
      } catch (error) {
        console.error('삭제 실패:', error)
        alert("삭제도중 문제가 생겼습니다.")
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