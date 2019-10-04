import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  render(<App />);
});

test('contains the word player', () => {
  const container = render(<App />);
  container.getByText(/player/i);
});
