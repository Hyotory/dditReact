import {useRef, useState} from 'react';
import MyInput from "./MyInput.jsx";

function App() {
    const [obj, setObj] = useState("HAAHAHA");
    const [obj_value, setObj_value] = useState("LALALALAL");

    const myclick = () => {
        setObj("GOGOGGOGOO");
        setObj_value("NONONONONOO");
    }

    return (
        <>
            <input type="text"  value={obj}/>
            <MyInput value={obj_value} />
            <button onClick={myclick}>Uraraaa</button>
        </>

    );
}

export default App;