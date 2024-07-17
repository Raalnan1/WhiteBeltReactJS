import React from 'react';
import { useRef, useState } from 'react';


function SubChapter1() {
    const [title,setTitle]=useState('Black');
    const [color,setColor]=useState('#000000');
    const txtTitle=useRef();
    const hexColor=useRef();
const submit = (e)=>{
e.preventDefault();
const title=txtTitle.current.value;
const color=hexColor.current.value;
console.log(title,color);
};

  return (
    <form onSubmit={submit}>
        <input value={title} ref={txtTitle} type="text" onChange={e=>{
            setTitle(e.target.value);
        }} placeholder="Color Title" />
        <input value={color} ref={hexColor} type="color" onChange={e=>{
            setColor(e.target.value);
        }} placeholder="Color" />
        <button type="submit">Submit</button>
    </form>
  );
}

export default SubChapter1;
