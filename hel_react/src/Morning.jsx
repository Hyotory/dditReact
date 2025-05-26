import {useState} from 'react'

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
