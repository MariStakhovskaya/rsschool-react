import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  test('it renders', () => {
    render(<About />);

    expect(screen.getByText('About page')).toBeInTheDocument();
  });
});
