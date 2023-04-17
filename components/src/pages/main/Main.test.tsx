import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from 'app/store/store';

describe('Main', () => {
  test('it renders', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
