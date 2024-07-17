
import React from 'react';

function Chapter8({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Using Create React App as a testing platform" },
    { id: 2, name: "Testing small functions with Jest" },
    { id: 4, name: "Introducing React Testing Library" },
    { id: 5, name: "Testing events with React Testing Library" },
    { id: 6, name: "Deploying to Netlify" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter8;