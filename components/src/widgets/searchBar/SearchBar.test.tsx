import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('Search component renders with placeholders', () => {
    render(<SearchBar setSearchValue={() => {}} />);

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
