import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard component tests', () => {
  let spy;

  beforeEach(() => {
    const spy = jest.mock(window.promise, () => {
      return Promise.resolve([]);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    spy = null;
  });

  test('renders a dashboard', () => {
    const { getByText } = render(<Dashboard />);
    const linkElement = getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
    jest.clearAllMocks();
  });
});
