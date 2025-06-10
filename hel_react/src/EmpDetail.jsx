// components/EmpDetail.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const EmpDetail = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [vo, setVo] = useState({ e_id: ".", e_name: "", gen: "", addr: "" });

    const loadDetail = async () => {
        const pe_id = searchParams.get('e_id');
        try {
            const resp = await axios.get("http://localhost:80/emp_detail.ajax", {
                params: { e_id: pe_id }
            });
            setVo(resp.data.vo);
        } catch (error) {
            console.error('Error fetching detail:', error);
        }
    };

    const fn_mod = () => {
        navigate(`/emp_mod.do?e_id=${vo.e_id}`);
    };

    const fn_del = async () => {
        const flag_c = window.confirm(
            "한번 지워진 데이터는 복구불가합니다.\n삭제하시렵니까?"
        );
        if (!flag_c) return;

        try {
            const resp = await axios.post("http://localhost:80/emp_del.ajax", vo);
            const cnt = resp.data.cnt;
            if (cnt === 1) {
                alert("정상적으로 삭제되었습니다.");
                navigate('/emp_list.do');
            } else {
                alert("삭제도중 문제가 생겼습니다.");
            }
        } catch (error) {
            console.error('Error deleting:', error);
            alert("삭제도중 문제가 생겼습니다.");
        }
    };

    useEffect(() => {
        loadDetail();
    }, []);

    return (
        <div>
            <h2>EMP DETAIL 화면</h2>
            <table className="emp-table">
                <tbody>
                <tr>
                    <td>사번</td>
                    <td>{vo.e_id}</td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>{vo.e_name}</td>
                </tr>
                <tr>
                    <td>전화</td>
                    <td>{vo.gen}</td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>{vo.addr}</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="수정" onClick={fn_mod} />
                        <input type="button" value="삭제" onClick={fn_del} />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmpDetail;