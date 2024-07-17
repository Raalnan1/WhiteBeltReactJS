
import React from 'react';

function Chapter6({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Fetching data with Hooks", ContentPath: "./Chapter6/SubChapter1.js"  },
    { id: 2, name: "Displaying data from an API" },
    { id: 4, name: "Handling Loading States", ContentPath: "./Chapter6/SubChapter3.js"  },
    { id: 5, name: "Fetching data with GraphQL" , ContentPath: "./Chapter6/SubChapter4.js"  },
    { id: 6, name: "Working with Props" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter6;