import React from 'react';
import ReactDOM from 'react-dom';
import ChoosePlayerForm from '../components/ChoosePlayerForm';
import { render, getByPlaceholderText } from '@testing-library/react';

test('ChoosePlayerForm renders w/o crashing', () => {
  render(<ChoosePlayerForm />);
});

test('get inputs with placeholders: player, country, Number of searches', () => {
  const container = render(<ChoosePlayerForm />);
  container.getByPlaceholderText('Country');
  container.getByPlaceholderText('Player Name');
  container.getByPlaceholderText('Number of searches');
});
