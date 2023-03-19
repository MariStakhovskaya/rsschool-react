import { render, screen } from '@testing-library/react';
import CardsLists from './CardsLists';

describe('CardsLists', () => {
  it('cards amount should be 21', () => {
    render(<CardsLists />, screen);
    let card = screen.queryAllByTestId('card');
    expect(card).toHaveLength(21);
  });
});
