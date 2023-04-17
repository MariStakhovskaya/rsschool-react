import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { store } from 'app/store/store';

describe('SearchBar', () => {
  test('Search component renders with placeholders', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
