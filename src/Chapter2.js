
import React from 'react';

function Chapter2({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Adding React to your project" },
    { id: 2, name: "Creating React Elements" },
    { id: 3, name: "Refactoring Elements using JSX" },
    { id: 4, name: "Incorporating Babel" },
    { id: 5, name: "Working with JSX Syntax" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter2;