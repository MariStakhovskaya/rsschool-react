import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormCard from './FormCard';
import Form from './Form';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  it('formCards renders', () => {
    render(
      <FormCard
        card={{
          title: '',
          date: '',
          category: '',
          checkbox: '',
          gender: '',
          file: '',
        }}
      />
    );
    expect(screen.queryAllByTestId('formCard')).toBeTruthy();
  });

  it('formCards renders', () => {
    render(
      <FormCard
        card={{
          title: '',
          date: '',
          category: '',
          checkbox: '',
          gender: '',
          file: '',
        }}
      />
    );
    expect(screen.getByText('Category:')).toBeInTheDocument();
  });

  it('It should have value of the input', () => {
    render(<Form />);
    const input = screen.getByLabelText('title') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');
  });

  it('date', () => {
    render(<Form />);
    const date = screen.getByLabelText('date') as HTMLInputElement;
    userEvent.type(date, '2023-04-01');
    expect(date.value).toBe('2023-04-01');
  });

  it('checkbox', () => {
    render(<Form />);
    const checkInput = screen.getByLabelText('checkbox') as HTMLElement;
    userEvent.click(checkInput);
    expect(checkInput).toBeChecked();
  });
});
