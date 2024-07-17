
import React from 'react';

function Introduction({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Building Modern user interfaces with React" },
    { id: 2, name: "What you should know before watching this course" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Introduction;
