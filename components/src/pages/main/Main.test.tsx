import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';

describe('Main', () => {
  test('it renders', () => {
    render(<Main />);

    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
