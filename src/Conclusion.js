
import React from 'react';

function Conclusion({ h2Title, subChapterMap }) {
  const subChapters = [{ id: 1, name: "Next Steps" }];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Conclusion;