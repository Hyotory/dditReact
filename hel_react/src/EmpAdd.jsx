// components/EmpAdd.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmpAdd = () => {
    const navigate = useNavigate();
    const [vo, setVo] = useState({ e_id: "", e_name: "", gen: "", addr: "" });

    const InputChange = (field, value) => {
        setVo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const fn_add = async () => {
        try {
            const resp = await axios.post('http://localhost:8080/api/emp/add', vo);
            const cnt = resp.data.cnt;
            if (cnt === 1) {
                alert("정상적으로 추가되었습니다.");
                navigate('/emp_list.do');
            } else {
                alert("추가도중 문제가 생겼습니다.");
            }
        } catch (error) {
            console.error('Error adding:', error);
            alert("추가도중 문제가 생겼습니다.");
        }
    };

    return (
        <div>
            <h2>EMP ADD 화면</h2>
            <table className="emp-table">
                <tbody>
                <tr>
                    <td>사번</td>
                    <td>자동추가</td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>
                        <input
                            type="text"
                            value={vo.e_name}
                            onChange={(e) => InputChange('e_name', e.target.value)}
                            className="input-text"
                        />
                    </td>
                </tr>
                <tr>
                    <td>전화</td>
                    <td>
                        <input
                            type="text"
                            value={vo.gen}
                            onChange={(e) => InputChange('gen', e.target.value)}
                            className="input-text"
                        />
                    </td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>
                        <input
                            type="text"
                            value={vo.addr}
                            onChange={(e) => InputChange('addr', e.target.value)}
                            className="input-text"
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="저장" onClick={fn_add} />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmpAdd;