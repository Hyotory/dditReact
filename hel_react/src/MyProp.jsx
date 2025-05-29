import { useState } from 'react'

function MyProp({ alt = '' }) {
    return (
        <div>속성: {alt}</div>
    )
}

export default MyProp