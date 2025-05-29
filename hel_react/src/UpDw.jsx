import { useState, useEffect } from 'react'

function UpDw() {
    const [com, setCom] = useState(parseInt((Math.random() * 99) + 1))
    const [mine, setMine] = useState('');
    const [mydiv, setMydiv] = useState('')
    const [attempts, setAttempts] = useState(0)

    // useEffect는 여기에 써야 함!
    useEffect(() => {
        console.log("컴포넌트가 처음 실행될 때!");
        // 여기에 원하는 코드 작성
    }, []); // 빈 배열 = 처음 한 번만 실행

    useEffect(() => {
        console.log("attempts가 바뀔 때마다 실행:", attempts);
    }, [attempts]); // attempts가 바뀔 때마다 실행

    const myClick = () => {
        const myNumber = parseInt(mine);

        if (isNaN(myNumber) || myNumber < 1 || myNumber > 100) {
            setMydiv("1~100 사이의 숫자를 입력하세요!");
            return;
        }

        setAttempts(attempts + 1);

        if (com > myNumber) {
            setMydiv("UP! 더 큰 수를 입력하세요");
        } else if (com < myNumber) {
            setMydiv("DOWN! 더 작은 수를 입력하세요");
        } else {
            setMydiv(`정답! ${attempts + 1}번 만에 맞췄습니다! 🎉`);
        }
    }

    const resetGame = () => {
        setCom(parseInt((Math.random() * 99) + 1));
        setMine('');
        setMydiv('');
        setAttempts(0);
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">숫자 맞추기 게임</h2>
            <p className="text-center text-gray-600 mb-4">1~100 사이의 숫자를 맞춰보세요!</p>

            <table className="w-full">
                <tbody>
                <tr>
                    <td className="py-2 pr-4 text-gray-700">맞출 수:</td>
                    <td className="py-2">
                        <input
                            type="number"
                            value={mine}
                            onChange={(e) => setMine(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="1-100"
                            min="1"
                            max="100"
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className="py-4">
                        <button
                            onClick={myClick}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            맞춰보기
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className="py-2">
                        <div className="text-center p-3 bg-gray-100 rounded min-h-[50px] flex items-center justify-center">
                            {mydiv && <span className="text-lg font-medium text-gray-800">{mydiv}</span>}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className="py-2">
                        <button
                            onClick={resetGame}
                            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                        >
                            새 게임
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            {attempts > 0 && (
                <p className="text-center mt-4 text-sm text-gray-500">
                    시도 횟수: {attempts}
                </p>
            )}
        </div>
    )
}

export default UpDw