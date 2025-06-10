// components/EmpList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmpList = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([
        { e_id: "1", e_name: "1", gen: "1", addr: "1" },
        { e_id: "2", e_name: "2", gen: "2", addr: "2" },
        { e_id: "3", e_name: "3", gen: "3", addr: "3" },
    ]);

    const fn_list = async () => {
        try {
            const resp = await axios.get("http://localhost:80/emp_list.ajax");
            setList(resp.data.list);
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };

    const fn_one = (e_id) => {
        navigate(`/emp_detail.do?e_id=${e_id}`);
    };

    const fn_add = () => {
        navigate('/emp_add.do');
    };

    useEffect(() => {
        fn_list();
    }, []);

    return (
        <div>
            <h2>EMP LIST 화면</h2>
            <table className="emp-table">
                <thead>
                <tr>
                    <td>사번</td>
                    <td>이름</td>
                    <td>전화</td>
                    <td>이메일</td>
                </tr>
                </thead>
                <tbody>
                {list.map((vo) => (
                    <tr key={vo.e_id}>
                        <td>
                            <a
                                href="#!"
                                onClick={(e) => {
                                    e.preventDefault();
                                    fn_one(vo.e_id);
                                }}
                                className="link"
                            >
                                {vo.e_id}
                            </a>
                        </td>
                        <td>{vo.e_name}</td>
                        <td>{vo.gen}</td>
                        <td>{vo.addr}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <input type="button" value="추가" onClick={fn_add} />
        </div>
    );
};

export default EmpList;