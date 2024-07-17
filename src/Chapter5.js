
import React from 'react';

function Chapter5({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Working with Uncontrolled components", ContentPath: "./Chapter5/SubChapter1.js"  },
    { id: 2, name: "Creating controlled form elements", ContentPath: "./Chapter5/SubChapter2.js"  },
    { id: 3, name: "Building a custom hook", ContentPath: "./Chapter5/SubChapter3.js"  },
    { id: 4, name: "Choosing a form library" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter5;