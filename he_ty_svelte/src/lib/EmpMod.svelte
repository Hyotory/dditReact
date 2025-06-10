<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    let vo = { e_id: ".", m_name: "", tel: "", email: "" };


    onMount(async ()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const pe_id = urlParams.get("e_id");

        let resp = await axios.get('http://localhost:8080/emp_detail.ajax', {
            params: {
                e_id : pe_id
            }
        })
        console.log(resp)
        vo = resp.data.vo
    })


    const fn_mod = async () => {
        let resp = await axios.post('http://localhost:8080/emp_mod.ajax', vo);
        let cnt = resp.data.cnt
        if (cnt == 1) {
            alert("정상적으로 수정되었습니다.");
            navigate(`/emp_list.do`);
        } else {
            alert("수정도중 문제가 생겼습니다.");
        }
    };
</script>

EMP MOD 화면
<table>
    <tbody>
        <tr>
            <td>사번</td>
            <td>    
                <input type="text" bind:value={vo.e_id}/>
            </td>
        </tr>
        <tr>
            <td>이름</td>
            <td>    
                <input type="text" bind:value={vo.e_name}/>
            </td>
        </tr>
        <tr>
            <td>전화</td>
            <td>
                <input type="text" bind:value={vo.gen}/>
            </td>
        </tr>
        <tr>
            <td>이메일</td>
            <td>
                <input type="text" bind:value={vo.addr}/>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="button" value="저장" onclick={fn_mod} />
            </td>
        </tr>
    </tbody>
</table>

<style>
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
