import { useState } from 'react';

function Hol() {
    const [mine, setMine] = useState('');
    const [com, setCom] = useState('');
    const [result, setResult] = useState('');

    const myclick = () => {
        // 입력값이 비어있는지 먼저 체크
        if (mine.trim() === '') {
            setResult('홀 또는 짝을 입력하세요');
            alert('홀 또는 짝을 입력하세요');
            return;
        }

        // 컴퓨터 랜덤 숫자 생성 (1-10)
        const randomNum = Math.floor(Math.random() * 10) + 1;

        // 사용자 입력 검증 (홀/짝 입력)
        const userChoice = mine.toLowerCase().trim();
        if (userChoice !== '홀' && userChoice !== '짝') {
            setResult('홀 또는 짝을 입력하세요');
            alert('홀 또는 짝을 입력하세요');
            return;
        }

        // 컴퓨터 숫자가 홀수인지 짝수인지 판정
        const isOdd = randomNum % 2 === 1;
        const computerResult = isOdd ? '홀' : '짝';

        // 컴퓨터 결과를 "홀" 또는 "짝"으로 표시
        setCom(computerResult);

        // 결과 판정
        if (userChoice === computerResult) {
            setResult('당신 승리!');
        } else {
            setResult('컴퓨터 승리!');
        }
    };

    return (
        <div>
            <table style={{
                margin: '20px auto',
                borderCollapse: 'collapse',
                border: '1px solid #ccc'
            }}>
                <tbody>
                <tr>
                    <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>내 선택</td>
                    <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                        <input
                            type="text"
                            value={mine}
                            onChange={(e) => setMine(e.target.value)}
                            placeholder="홀 또는 짝"
                            style={{
                                width: '100px',
                                padding: '4px',
                                textAlign: 'center'
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>컴퓨터 결과</td>
                    <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                        <input
                            type="text"
                            value={com}
                            readOnly
                            style={{
                                width: '100px',
                                padding: '4px',
                                textAlign: 'center'
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>결과</td>
                    <td style={{
                        padding: '8px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                        <input
                            type="text"
                            value={result}
                            readOnly
                            style={{
                                width: '100px',
                                padding: '4px',
                                textAlign: 'center'
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{
                        padding: '8px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}>
                        <button
                            onClick={myclick}
                            style={{
                                width: '100%',
                                padding: '8px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                borderRadius: '4px'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                        >
                            게임하기
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Hol;