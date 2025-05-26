import {useState} from 'react'
import './App.css'

function Count() {
    const [count, setCount] = useState(+'100')

    const myClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            {count}
            <button onClick={myClick}>INCREASE</button>
        </>
    )
}

export default Count
