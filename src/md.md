To bring your old code into the new `create-react-app` structure, you'll need to follow these steps:

1. Replace the default content in `src/App.js` with your custom components and structure.
2. Create individual component files for better organization (optional but recommended).
3. Ensure that the `subChapterMap` function is defined and passed as a prop to the relevant components.

Here's a structured approach to migrate your old code into the new `create-react-app` project:

### Step 1: Create Component Files
Create new files for each component in the `src` directory.

#### `src/Heading.js`
```js
import React from 'react';

function Heading() {
  return (
    <React.Fragment>
      <h1>react-js-essential-training-1483612</h1>
    </React.Fragment>
  );
}

export default Heading;
```

#### `src/Introduction.js`
```js
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
```

#### `src/Chapter1.js`
```js
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
```

#### `src/Chapter2.js`
```js
import React from 'react';

function Chapter2({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Adding React to your project" },
    { id: 2, name: "Creating React Elements" },
    { id: 3, name: "Refactoring Elements using JSX" },
    { id: 4, name: "Incorporating Babel" },
    { id: 5, name: "Working with JSX Syntax" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter2;
```

#### `src/Chapter3.js`
```js
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
```

#### `src/Chapter4.js`
```js
import React from 'react';

function Chapter4({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Generating a project with Create React App" },
    { id: 2, name: "Touring a Create React App Project" },
    { id: 4, name: "Destructuring arrays and objects" },
    { id: 5, name: "Understanding the useState hook" },
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

#### `src/Chapter5.js`
```js
import React from 'react';

function Chapter5({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Fetching data with Hooks" },
    { id: 2, name: "Displaying data from an API" },
    { id: 4, name: "Handling Loading States" },
    { id: 5, name: "Fetching data with GraphQL" },
    { id: 6, name: "Working with Props" },
  ];

  return (
    <React.Fragment>
      <h2>{h2Title}</h2>
      {subChapterMap(subChapters)}
    </React.Fragment>
  );
}

export default Chapter5;
```

#### `src/Chapter6.js`
```js
import React from 'react';

function Chapter6({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Fetching data with Hooks" },
    { id: 2, name: "Displaying data from an API" },
    { id: 4, name: "Handling Loading States" },
    { id: 5, name: "Fetching data with GraphQL" },
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
```

#### `src/Chapter7.js`
```js
import React from 'react';

function Chapter7({ h2Title, subChapterMap }) {
  const subChapters = [
    { id: 1, name: "Installing React Router v6" },
    { id: 2, name: "Configuring React Router" },
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
```

#### `src/Chapter8.js`
```js
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
```

#### `src/Conclusion.js`
```js
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
```

### Step 2: Update `src/App.js`
Replace the default content in `src/App.js` with the following code:

```js
import React from 'react';
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

function App() {
  function subChapterMap(subChapters) {
    return (
      <React.Fragment>
        <ul>
          {subChapters.map((subChapter) => (
            <li key={subChapter.id}>{subChapter.name}</li>
          ))}
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
      <

Chapter5 h2Title="Handling Forms in React" subChapterMap={subChapterMap} />
      <Chapter6 h2Title="Asynchronous React" subChapterMap={subChapterMap} />
      <Chapter7 h2Title="React Router" subChapterMap={subChapterMap} />
      <Chapter8 h2Title="React Testing and Deployment" subChapterMap={subChapterMap} />
      <Conclusion h2Title="Conclusion" subChapterMap={subChapterMap} />
    </div>
  );
}

export default App;
```

### Step 3: Import CSS (Optional)
Ensure that `src/App.css` includes any necessary styling for your components.

This setup breaks down each component into its own file for better organization and imports them into the main `App` component. The `subChapterMap` function is passed as a prop to the relevant components to render the subchapters.