import React, { useState, useRef } from 'react';

function SubChapter1() {
    const [color, setColor] = useState('#000000');
    const txtTitle = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        console.log(title, color);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <form onSubmit={submit}>
            <input 
                ref={txtTitle} 
                type="text" 
                value={color} 
                readOnly 
                placeholder="Color Title" 
                style={{ color: color }} 
            />
            <input 
                type="color" 
                value={color} 
                onChange={handleColorChange} 
            />
        </form>
    );
}

export default SubChapter1;
