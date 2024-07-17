import { useState } from 'react';

function useColor(initialColor) {
    const [color, setColor] = useState(initialColor);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return [color, handleColorChange];
}

export default useColor;
