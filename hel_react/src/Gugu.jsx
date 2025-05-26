import { useState } from 'react';
import './Gugu.css';

function Gugu() {
    const [dan, setDan] = useState('');
    const [result, setResult] = useState('');

    const calculateGugu = () => {
        const num = parseInt(dan);
        if (isNaN(num) || num < 1 || num > 9) {
            setResult('1부터 9까지의 숫자를 입력해주세요.');
            return;
        }

        let output = '';
        for (let i = 1; i <= 9; i++) {
            output += `${num} x ${i} = ${num * i}\n`;
        }
        setResult(output);
    };

    return (
        <div className="gugu-container">
            <h2 className="gugu-title">구구단 계산기</h2>
            <table className="gugu-table">
                <tbody>
                <tr>
                    <td className="gugu-label">출력단수:</td>
                    <td className="gugu-input-cell">
                        <input
                            type="text"
                            value={dan}
                            onChange={(e) => setDan(e.target.value)}
                            placeholder="1-9"
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" className="gugu-button-cell">
                        <button
                            onClick={calculateGugu}
                            className="gugu-button"
                        >
                            출력하기
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" className="gugu-result-cell">
                            <textarea
                                value={result}
                                readOnly
                                rows="10"
                                cols="25"
                                className="gugu-textarea"
                                placeholder="결과가 여기에 표시됩니다"
                            />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Gugu;