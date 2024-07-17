import React from 'react';

function Chapter4({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Generating a project with Create React App" },
    { id: 2, name: "Touring a Create React App Project" },
    { id: 4, name: "Destructuring arrays and objects" },
    { id: 5, name: "Understanding the useState hook", ContentPath: "./Chapter4/SubChapter5.js" },
    { id: 6, name: "Working with useEffect" , ContentPath: "./Chapter4/SubChapter6.js" },
    { id: 7, name: "Understanding the Dependency array" },
    { id: 8, name: "Incorporating useReducer" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter4;
