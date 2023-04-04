import { render, screen } from '@testing-library/react';
import React from 'react';
import CardsLists from './CardsLists';

describe('CardsLists', () => {
  it('cards amount should be 21', () => {
    render(<CardsLists />);
    const card = screen.queryAllByTestId('card');
    expect(card).toHaveLength(21);
  });
});
