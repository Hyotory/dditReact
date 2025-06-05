import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Mem.css'

function Mem() {
    let [list, setList] = useState([
        {'m_id': '1', 'm_name': '홍길동', 'tel': '010-1234-5678', 'email': 'hong@test.com'},
        {'m_id': '2', 'm_name': '김철수', 'tel': '010-2345-6789', 'email': 'kim@test.com'},
        {'m_id': '3', 'm_name': '이영희', 'tel': '010-3456-7890', 'email': 'lee@test.com'}
    ])

    let [vo, setVo] = useState({'m_id': '', 'm_name': '', 'tel': '', 'email': ''})

    useEffect(() => {
        fn_list();
    }, []);

    const fn_one = (e) => {
        console.log(e.target.dataset.m_id);
    }

    const fn_list = async () => {
        let resp = await axios.get("http://localhost:8080/mem_list.ajax");
        console.log(resp);
        let _list = resp.data.list;
        setList(_list);
    }

    const fn_add = () => {
        if (vo.m_id && vo.m_name && vo.tel && vo.email) {
            setList([...list, {...vo}]);
            setVo({'m_id': '', 'm_name': '', 'tel': '', 'email': ''});
        } else {
            alert('모든 필드를 입력해주세요.');
        }
    }

    const fn_update = () => {
        const updatedList = list.map(item =>
            item.m_id === vo.m_id ? {...vo} : item
        );
        setList(updatedList);
        setVo({'m_id': '', 'm_name': '', 'tel': '', 'email': ''});
    }

    const fn_delete = () => {
        if (vo.m_id) {
            const filteredList = list.filter(item => item.m_id !== vo.m_id);
            setList(filteredList);
            setVo({'m_id': '', 'm_name': '', 'tel': '', 'email': ''});
        } else {
            alert('삭제할 사번을 입력해주세요.');
        }
    }

    const fn_select = (selectedVo) => {
        setVo({...selectedVo});
    }

    return (
        <>
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
                {list.map((vo, index) => (
                    <tr key={index}>
                        <td><a onClick={fn_one} data-m_id={vo.m_id}>{vo.m_id}</a></td>
                        <td>{vo.m_name}</td>
                        <td>{vo.tel}</td>
                        <td>{vo.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <table>
                <tbody>
                <tr>
                    <td>사번</td>
                    <td>
                        <input
                            type="text"
                            value={vo.m_id}
                            onChange={(e) => setVo({...vo, m_id: e.target.value})}
                        />
                    </td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>
                        <input
                            type="text"
                            value={vo.m_name}
                            onChange={(e) => setVo({...vo, m_name: e.target.value})}
                        />
                    </td>
                </tr>
                <tr>
                    <td>전화</td>
                    <td>
                        <input
                            type="text"
                            value={vo.tel}
                            onChange={(e) => setVo({...vo, tel: e.target.value})}
                        />
                    </td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>
                        <input
                            type="text"
                            value={vo.email}
                            onChange={(e) => setVo({...vo, email: e.target.value})}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="추가" onClick={fn_add}/>
                        <input type="button" value="수정" onClick={fn_update}/>
                        <input type="button" value="삭제" onClick={fn_delete}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Mem