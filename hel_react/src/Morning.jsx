import {useState} from 'react'
import './App.css'

function Morning() {
    const [msg, setMsg] = useState('Good Morning')

    const myClick = () => {
        setMsg('Good Evening')
    }

    return (
        <>
            {msg}
            <button onClick={myClick}>Click me</button>
        </>
    )
}

export default Morning
