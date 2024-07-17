import {
  render,
  screen
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the toBeInTheDocument matcher
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react-js-essential-training-1483612/i);
  console.assert(linkElement, "linkElement: ", linkElement);
  expect(linkElement).toBeInTheDocument();
});

test('renders the correct number of chapters', () => {
  const { container } = render(<App />);
  console.log(container.innerHTML); // Log the rendered HTML to debug
  const chapters = screen.getAllByTestId('chapter');
  console.log('Chapters: ',chapters.length);
  expect(chapters.length).toBe(8); // Expecting 8 chapters
});