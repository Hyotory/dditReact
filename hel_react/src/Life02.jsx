import {useEffect, useState} from 'react'

function Life02() {
    const [msg, setMsg] = useState('LIFE02')
    useEffect(() => {
        console.log("LIFE02 mount")
        return () => {
            console.log("LIFE02 unmount")
        }
    }, [])
    return (
        <>
            {msg}
        </>
    )
}

export default Life02
