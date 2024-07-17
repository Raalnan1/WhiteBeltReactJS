import React, { useRef } from 'react';
import useColor from './useColor.js'; // Adjust the import path as needed

function SubChapter3() {
    const [color, handleColorChange] = useColor('#000000');
    const txtTitle = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        console.log(title, color);
    };

    const explanation = `
        A custom hook is a special JavaScript function whose name starts with 'use' 
        and that may call other hooks. Custom hooks are a mechanism to reuse stateful 
        logic between components. They allow you to extract component logic into 
        reusable functions, making your code cleaner and more maintainable.
    `;

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
            <div className="Explanation" style={{ color: color }}>
                {explanation}
            </div>
        </form>
    );
}

export default SubChapter3;
