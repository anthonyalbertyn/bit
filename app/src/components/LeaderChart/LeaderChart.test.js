import React from 'react';
import { render } from '@testing-library/react';
import LeaderChart from './LeaderChart';

describe('LeaderChart component tests', () => {
  const data = [
    {
      name: 'Linda',
      id: '100',
      points: 22,
    },
    {
      name: 'Peter',
      id: '50',
      points: 10,
    },
    {
      name: 'Mark',
      id: '80',
      points: -10,
    },
  ];

  test('renders a title', () => {
    const { getByText } = render(<LeaderChart data={data} />);
    const titleElement = getByText(/Table Tennis/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('renders a leader chart', () => {
    const { getAllByText } = render(<LeaderChart data={data} />);
    const name1 = getAllByText(/Linda/i);
    const name2 = getAllByText(/Peter/i);
    const name3 = getAllByText(/Mark/i);
    expect(name1[0]).toBeInTheDocument();
    expect(name2[0]).toBeInTheDocument();
    expect(name3[0]).toBeInTheDocument();
  });

  test('renders a leader table', () => {
    const { getAllByText } = render(<LeaderChart data={data} />);
    const name1 = getAllByText(/Linda/i);
    const name2 = getAllByText(/Peter/i);
    const name3 = getAllByText(/Mark/i);
    expect(name1[1]).toBeInTheDocument();
    expect(name2[1]).toBeInTheDocument();
    expect(name3[1]).toBeInTheDocument();
  });
});
