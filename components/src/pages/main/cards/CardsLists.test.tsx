import { render, screen } from '@testing-library/react';
import React from 'react';
import CardsLists from './CardsLists';
import { Provider } from 'react-redux';
import { store } from 'app/store/store';

describe('CardsLists', () => {
  it('cards amount should be 0', () => {
    render(
      <Provider store={store}>
        <CardsLists />
      </Provider>
    );
    const card = screen.queryAllByTestId('card');
    expect(card).toHaveLength(0);
  });
});
