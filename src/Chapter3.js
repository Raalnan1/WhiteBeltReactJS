
import React from 'react';

function Chapter3({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Creating a React Component" },
    { id: 2, name: "Adding Component Properties" },
    { id: 3, name: "Working with Lists" },
    { id: 4, name: "Adding Keys to List Items" },
    { id: 5, name: "Displaying Images with React" },
    { id: 6, name: "Using fragments" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter3;