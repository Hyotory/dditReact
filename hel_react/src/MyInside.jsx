import {useState} from 'react'

function MyInside( {children} ) {


    return (
        <>
            MYINSIDE START<br/>
            {children}<br/>
            MYINSIDE END<br/>

        </>
    )
}

export default MyInside
