
import React from 'react';

function Chapter7({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Installing React Router v6" },
    {
      id: 2,
      name: "Configuring React Router",
      ContentPath: "./Chapter7/SubChapter2.js"
    },
    { id: 4, name: "Incorporating the link component" },
    { id: 5, name: "Nesting Links with React Router v6" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter7;