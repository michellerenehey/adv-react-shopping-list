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

test('user can delete an item', () => {
  render(<App />);

  const listItem = screen.getByText(/meditate/i);
  const deleteButton = screen.getByTestId('0');
  userEvent.click(deleteButton);

  expect(listItem).not.toBeInTheDocument();
});

test('user can edit an item', () => {
  render(<App />);

  // click edit button
  const editButton = screen.getByTestId('edit-0');
  userEvent.click(editButton);
  // see item show up
  const editableListItem = screen.getByDisplayValue(/meditate/i);

  // change item to NEW item
  userEvent.type(editableListItem, 'testing input field');

  // grab & click save button
  const saveButton = screen.getByTestId('save-0');
  userEvent.click(saveButton);
  // expect NEW item to show up on screen
  expect(screen.getByText(/testing input field/i)).toBeInTheDocument();
});
