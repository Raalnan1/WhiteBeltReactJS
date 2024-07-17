# This is my component

```js
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
            <input ref={txtTitle} type="text" value={color} readOnly placeholder="Color Title" />
            <input ref={hexColor} type="color" value={color} onChange={handleColorChange} />
        </form>
    );
}

export default SubChapter1;

```

I want the color title to show whatever the hexColor is.
I'm getting the following error:
'hexColor' is not defined.eslintno-undef