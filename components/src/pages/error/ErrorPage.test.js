import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  test('it renders', () => {
    render(<ErrorPage />);

    expect(screen.getByText('Error page')).toBeInTheDocument();
  });
});
