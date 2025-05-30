import { useState } from 'react'

function MyProp({src, alt}) {
    return (
        <div>
            <div>속성: {alt}</div>
            <img src={src} />
        </div>
    )
}

export default MyProp