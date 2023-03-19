import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main component', () => {
  test('it renders', () => {
    render(<Main />);

    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
