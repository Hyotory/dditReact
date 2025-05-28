import {useEffect, useState} from 'react'

function Life01() {
    const [msg, setMsg] = useState('LIFE01')
    useEffect(() => {
        console.log("LIFE01 onMount")
        return () => {
            console.log("LIFE01 unmount")
        }
    }, [])
    return (
        <>
            {msg}
        </>
    )
}

export default Life01
