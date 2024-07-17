This is my app

```js
import React, { Suspense } from 'react';
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
import {Link} from 'react-router-dom';

export function Home() {
return (
<div>
<h2>Home</h2>
<p>
<ol>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ol>
</p>
</div>
);
};

export function About() {
return (
<div>
<h2>About</h2>
<p>
<ol>
<li><Link to="/home">Home</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ol>
</p>
</div>
);
};

export function Contact() {
return (
<div>
<h2>Contact</h2>
<p>
<ol>
<li><Link to="/home">Home</Link></li>
<li><Link to="/about">About</Link></li>
</ol>
</p>
</div>
);
};

export function App() {
function subChapterMap(subChapters) {
return (
<React.Fragment>
<ul>
{subChapters.map((subChapter) => {
const SubComponent = subChapter.ContentPath
? React.lazy(() =>
import(`${subChapter.ContentPath}`).catch(() => ({
default: () => null,
}))
)
: () => null;

            return (
              <li key={subChapter.id}>
                {subChapter.name}
                {subChapter.ContentPath && (
                  <Suspense fallback={<div className="spinner"></div>}>
                    <SubComponent />
                  </Suspense>
                )}
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
<Chapter1 data-role="chapter" h2Title="What is React?" subChapterMap={subChapterMap} />
<Chapter2 data-role="chapter" h2Title="Intro to React Elements" subChapterMap={subChapterMap} />
<Chapter3 data-role="chapter" h2Title="React Components" subChapterMap={subChapterMap} />
<Chapter4 data-role="chapter" h2Title="React State in the Component Tree" subChapterMap={subChapterMap} />
<Chapter5 data-role="chapter" h2Title="Handling Forms in React" subChapterMap={subChapterMap} />
<Chapter6 data-role="chapter" h2Title="Asynchronous React" subChapterMap={subChapterMap} />
<Chapter7 data-role="chapter" h2Title="React Router" subChapterMap={subChapterMap} />
<Chapter8 data-role="chapter" h2Title="React Testing and Deployment" subChapterMap={subChapterMap} />
<Conclusion h2Title="Conclusion" subChapterMap={subChapterMap} />
</div>
);
}

export default App;

```

This is my test

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react-js-essential-training-1483612/i);
  console.assert(linkElement, "linkElement: ", linkElement);
  expect(linkElement).toBeInTheDocument();
});

```

How can I test for the correct number of chapters?