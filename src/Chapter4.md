# This is my component

```js

import React from 'react';

function Chapter4({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Generating a project with Create React App" },
    { id: 2, name: "Touring a Create React App Project" },
    { id: 4, name: "Destructuring arrays and objects" },
    { id: 5, name: "Understanding the useState hook", ContentPath:"./Chapter4/SubChapter5.js"},
    { id: 6, name: "Working with useEffect" },
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
```

# This is my App

```js

import Heading from './Heading';
import Introduction from './Introduction';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Conclusion from './Conclusion';
import './App.css';
import React, { Suspense } from 'react';

function App() {
  function subChapterMap(subChapters) {
    return (
      <React.Fragment>
        <ul>
          {subChapters.map((subChapter) => {
            const SubComponent = React.lazy(() =>
              import(`./Chapter4/SubChapter${subChapter.id}.js`).catch(() => ({ default: () => null }))
            );

            return (
              <li key={subChapter.id}>
                {subChapter.name}
                <Suspense fallback={<div>Loading...</div>}>
                  <SubComponent />
                </Suspense>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      <Heading />
      <Introduction h2Title="Introduction" subChapterMap={subChapterMap} />
      <Chapter1 h2Title="What is React?" subChapterMap={subChapterMap} />
      <Chapter2 h2Title="Intro to React Elements" subChapterMap={subChapterMap} />
      <Chapter3 h2Title="React Components" subChapterMap={subChapterMap} />
      <Chapter4 h2Title="React State in the Component Tree" subChapterMap={subChapterMap} />
      <Chapter5 h2Title="Handling Forms in React" subChapterMap={subChapterMap} />
      <Chapter6 h2Title="Asynchronous React" subChapterMap={subChapterMap} />
      <Chapter7 h2Title="React Router" subChapterMap={subChapterMap} />
      <Chapter8 h2Title="React Testing and Deployment" subChapterMap={subChapterMap} />
      <Conclusion h2Title="Conclusion" subChapterMap={subChapterMap} />
    </div>
  );
}

export default App;

```

In some cases, the subChapters need to contain additional information. When it does, I want the component to be displayed in the List Item, right after the subChapter.name. I want a way to point to the component.