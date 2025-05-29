import { useState, useRef } from 'react'

function MyFocus() {
    // useRef로 input 엘리먼트 참조 생성
    const inputRef = useRef(null)

    const handleFocus = () => {
        // current를 통해 DOM 엘리먼트에 접근
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <>
            <input
                type="text"
                ref={inputRef}
                placeholder="여기에 포커스됩니다"
                style={{
                    padding: '8px',
                    marginRight: '8px',
                    border: '2px solid #ccc',
                    borderRadius: '4px'
                }}
            />
            <button
                onClick={handleFocus}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                FOCUS
            </button>
        </>
    )
}

export default MyFocus