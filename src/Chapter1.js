
import React from 'react';

function Chapter1({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "What is React?" },
    { id: 2, name: "Setting up Chrome Tools for React" },
    { id: 3, name: "Setting up Firefox DevTools for React" },
    { id: 4, name: "Working with Visual Studio Code" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter1;