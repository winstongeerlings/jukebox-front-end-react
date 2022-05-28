import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumOverviewScreen from './album-overview';

// TODO: implement tests
test('renders learn react link', () => {
  render(<AlbumOverviewScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
