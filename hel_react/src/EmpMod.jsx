// components/EmpMod.js
import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import axios from 'axios';

const EmpMod = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [vo, setVo] = useState({ e_id: ".", e_name: "", gen: "", addr: "" });

    const loadDetail = async () => {
        const pe_id = searchParams.get('e_id');
        try {
            const resp = await axios.get('http://localhost:80/emp_detail.ajax', {
                params: { e_id: pe_id }
            });
            setVo(resp.data.vo);
        } catch (error) {
            console.error('Error fetching detail:', error);
        }
    };

    const InputChange = (field, value) => {
        setVo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const fn_mod = async () => {
        try {
            const resp = await axios.post('http://localhost:80/emp_mod.ajax', vo);
            const cnt = resp.data.cnt;
            if (cnt === 1) {
                alert("정상적으로 수정되었습니다.");
                navigate('/emp_list.do');
            } else {
                alert("수정도중 문제가 생겼습니다.");
            }
        } catch (error) {
            console.error('Error modifying:', error);
            alert("수정도중 문제가 생겼습니다.");
        }
    };

    useEffect(() => {
        loadDetail();
    }, []);

    return (
        <div>
            <h2>EMP MOD 화면</h2>
            <table className="emp-table">
                <tbody>
                <tr>
                    <td>사번</td>
                    <td>
                        <input
                            type="text"
                            value={vo.e_id}
                            onChange={(e) => InputChange('e_id', e.target.value)}
                            className="input-text"
                        />
                    </td>
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
                        <input type="button" value="저장" onClick={fn_mod} />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmpMod;