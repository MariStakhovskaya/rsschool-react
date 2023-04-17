import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import Header from './Header';
import React from 'react';

describe('Header', () => {
  it('renders header', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });
});
