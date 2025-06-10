<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    let vo = { e_id: ".", m_name: "", tel: "", email: "" };

    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const pe_id = urlParams.get("e_id");

        let resp = await axios.get("http://localhost:8080/emp_detail.ajax", {
            params: {
                e_id: pe_id,
            },
        });
        console.log(resp);
        vo = resp.data.vo;
    });

    const fn_mod = async () => {
        navigate(`/emp_mod.do?e_id=${vo.e_id}`);
    };
    const fn_del = async () => {
        let flag_c = confirm(
            "한번 지워진 데이터는 복구불가합니다.\n삭제하시렵니까?",
        );
        if (!flag_c) {
            return;
        }

        let resp = await axios.post("http://localhost:8080/emp_del.ajax", vo);
        let cnt = resp.data.cnt;
        if (cnt == 1) {
            alert("정상적으로 삭제되었습니다.");
            navigate(`/emp_list.do`);
        } else {
            alert("삭제도중 문제가 생겼습니다.");
        }
    };
</script>

EMP DETAIL 화면
<table>
    <tbody>
        <tr>
            <td>사번</td>
            <td>
                {vo.e_id}
            </td>
        </tr>
        <tr>
            <td>이름</td>
            <td>
                {vo.e_name}
            </td>
        </tr>
        <tr>
            <td>전화</td>
            <td>
                {vo.gen}
            </td>
        </tr>
        <tr>
            <td>이메일</td>
            <td>
                {vo.addr}
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="button" value="수정" onclick={fn_mod} />
                <input type="button" value="삭제" onclick={fn_del} />
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
