<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    let list = [
        { e_id: "1", e_name: "1", gen: "1", addr: "1" },
        { e_id: "2", e_name: "2", gen: "2", addr: "2" },
        { e_id: "3", e_name: "3", gen: "3", addr: "3" },
    ];

    onMount(async () => {
        fn_list();
    });

    const fn_list = async () => {
        let resp = await axios.get("http://localhost:8080/emp_list.ajax");
        list = resp.data.list;
    };

    const fn_one = async (e) => {
        let e_id = e.target.dataset.e_id;
        navigate(`/emp_detail.do?e_id=${e_id}`);
    };

    const fn_add = async () => {
        navigate(`/emp_add.do`);
    };
</script>

EMP LIST 화면
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
        {#each list as vo}
            <tr>
                <td><a onclick={fn_one} data-e_id={vo.e_id}>{vo.e_id}</a></td>
                <td>{vo.e_name}</td>
                <td>{vo.gen}</td>
                <td>{vo.addr}</td>
            </tr>
        {/each}
    </tbody>
</table>
<input type="button" value="추가" onclick={fn_add} />

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
