import React, { useState } from 'react'
import "./Lotto.css"

const Lotto: React.FC = () => {
    // useState로 상태 관리 (React의 핵심!)
    const [lottNumbers, setLottNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0]);

    const myclick = () => {
        let lottArr: number[] = [];

        while (lottArr.length < 6) {
            let lottNumber: number = Math.floor(Math.random() * 45) + 1;

            if (!lottArr.includes(lottNumber)) {
                lottArr.push(lottNumber);
            }
        }

        // bubbleSort 함수
        function bubbleSort(arr: number[]): number[] {
            let temp: number = 0;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 1; j < arr.length - i; j++) {
                    if (arr[j] < arr[j - 1]) {
                        temp = arr[j - 1];
                        arr[j - 1] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        }

        bubbleSort(lottArr);
        console.log(lottArr);

        // setState로 상태 업데이트
        setLottNumbers(lottArr);
    }

    return (
        <table>
            <tbody>
            <tr>
                {/* React에서는 map 사용 */}
                {lottNumbers.map((number, index) => (
                    <td key={index}>
                        <span className="myspan">{number || '_'}</span>
                    </td>
                ))}
            </tr>
            <tr>
                <td colSpan="6">
                    <button onClick={myclick}>
                        로또생성하기
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default Lotto;