<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'


/*const list = ref([
     {'m_id': '1', 'm_name': '1', 'tel': '1', 'email': '1'},
     {'m_id': '2', 'm_name': '2', 'tel': '2', 'email': '2'},
     {'m_id': '3', 'm_name': '3', 'tel': '3', 'email': '3'}
])*/
const list = ref([])


onMounted(() => {
  fn_list() // 컴포넌트 로드 시 회원 리스트를 불러오는 함수를 호출합니다.
})

const vo = ref({'m_id': "", 'm_name': "", 'tel': "", 'email': ""})


const fn_list = async () => {

  const resp = await axios.get('http://localhost:8080/api/mem_list.ajax')
  list.value = resp.data
}

const fn_one = (m_id) => {
  console.log("fn_one() / m_id => ", m_id);
  axios.get(`http://localhost:8080/api/mem_detail?m_id=${m_id}`)
      .then(res => {
        vo.value = res.data;
        console.log("fn_one(m_id)/res : ", vo.value)
      })
}

const fn_add = async () => {
  if (!vo.value.m_id) {
    alert("사번을 입력해주세요.");
    return;
  }

  if (list.value.some(mem => mem.m_id === vo.value.m_id)) {
    alert("이미 있는 사번입니다.");
    return;
  }

  const resp = await axios.post('http://localhost:8080/api/mem_add', vo.value);
  console.log("추가 결과", resp.data)
  if (resp.data === 1) {
    alert("추가 완료!");
  } else {
    alert("추가 실패!");
  }
  fn_clear();
  await fn_list()
}
const fn_mod = async () => {

  const resp = await axios.post('http://localhost:8080/api/mem_mod', vo.value);
  if (resp.data === 1) {
    alert("수정 완료!");
  } else {
    alert("수정 실패!");
  }
  fn_clear()
  await fn_list()
}

const fn_del = async () => {
  if (confirm("한번 지워진 데이터는 복구 불가능합니다.\n정말 삭제하겠습니까?")) {
    const resp = await axios.post('http://localhost:8080/api/mem_del', vo.value)
    if (resp.data === 1) {
      alert("삭제 완료!");
    } else {
      alert("삭제 실패!");
    }
  }

  fn_clear()
  await fn_list()

}

const fn_clear = () => {
  vo.value = {m_id: "", m_name: "", tel: "", email: ""};
}
</script>
<template>
  EMP 화면

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
    <tr v-for="item in list" :key="item.m_id">
      <td @click.prevent="fn_one(item.m_id)">{{ item.m_id }}</td>
      <td>{{ item.m_name }}</td>
      <td>{{ item.tel }}</td>
      <td>{{ item.email }}</td>
    </tr>
    </tbody>
  </table>
  <br/>
  <table>
    <tbody>
    <tr>
      <td>사번</td>
      <td>
        <input type="text" v-model="vo.m_id"/>
      </td>
    </tr>
    <tr>
      <td>이름</td>
      <td>
        <input type="text" v-model="vo.m_name"/>
      </td>
    </tr>
    <tr>
      <td>전화</td>
      <td>
        <input type="text" v-model="vo.tel"/>
      </td>
    </tr>
    <tr>
      <td>이메일</td>
      <td>
        <input type="text" v-model="vo.email"/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" value="추가" @click="fn_add()"/>
        <input type="button" value="수정" @click="fn_mod()"/>
        <input type="button" value="삭제" @click="fn_del()"/>
      </td>
    </tr>
    </tbody>
  </table>

</template>
<style>
table, tr, td {
  border: 1px solid darkolivegreen;
  text-align: center;
}

input[type='text'] {
  width: 120px;
}

a {
  color: blue;
  text-decoration: underline;
}

</style>
