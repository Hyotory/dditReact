import React, {useState} from 'react'

const Morning: React.FC = () => {
    const [msg, setMsg] = useState<string>('Good Morning')

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
