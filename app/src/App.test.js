import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  test('renders the app title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Coding challenge/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the app footer', () => {
    const { getByText } = render(<App />);
    const footerElement = getByText(/Anthony Albertyn/i);
    expect(footerElement).toBeInTheDocument();
  });
});
