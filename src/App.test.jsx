import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const header = screen.getByRole('heading', { name: /self care checklist/i });
  expect(header).toBeInTheDocument();
});

test('user can add item', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/add item/i);
  userEvent.type(input, 'take a bath');

  const addButton = screen.getByRole('button', { name: /add item/i });
  userEvent.click(addButton);

  expect(screen.getByText(/take a bath/i)).toBeInTheDocument();
});
