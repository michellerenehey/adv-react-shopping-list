import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListProvider from './context/ListContext';
import App from './App';

beforeEach(() => {
  render(
    <ListProvider>
      <App />
    </ListProvider>
  );
});

test('renders page header', () => {
  const header = screen.getByRole('heading', { name: /self care checklist/i });
  expect(header).toBeInTheDocument();
});

test('a list of items appears', () => {
  const itemList = screen.getAllByRole('listitem');
  expect(itemList).toHaveLength(3);
});

test('user can add item', () => {
  const input = screen.getByPlaceholderText(/add item/i);
  userEvent.type(input, 'take a bath');

  const addButton = screen.getByRole('button', { name: /add item/i });
  userEvent.click(addButton);

  expect(screen.getByText(/take a bath/i)).toBeInTheDocument();
});

test('user can delete an item', () => {
  const listItem = screen.getByText(/meditate/i);
  const deleteButton = screen.getByTestId('0');
  userEvent.click(deleteButton);

  expect(listItem).not.toBeInTheDocument();
});

test('user can edit an item', () => {
  // click edit button
  const editButton = screen.getByTestId('edit-1');
  userEvent.click(editButton);

  // see item show up
  const editableListItem = screen.getByDisplayValue(/Go for 20 minute walk/i);

  // change item to NEW item
  userEvent.type(editableListItem, 'testing input field');

  // grab & click save button
  const saveButton = screen.getByTestId('save-1');
  userEvent.click(saveButton);

  // expect NEW item to show up on screen
  expect(screen.getByText(/testing input field/i)).toBeInTheDocument();
});

test('user can edit casey way', () => {
  const walk = screen.getByText(/Go for 20 minute walk/i);
  expect(walk).toBeInTheDocument();

  const editButton = within(walk).getByRole('button', { name: /edit/i });
  expect(editButton).toBeInTheDocument();
});

test('header shows number of items', () => {
  const itemList = screen.getAllByRole('listitem');
  expect(itemList).toHaveLength(3);
  const headerNumber = screen.getByLabelText(`Multiple items: 3`);
  expect(headerNumber).toBeInTheDocument();
});

test('clear button clears list', () => {
  const clearButton = screen.getByRole('button', { name: /Clear Checklist/i });
  userEvent.click(clearButton);
  const itemList = screen.getByRole('list');
  expect(itemList.children).toHaveLength(0);
});
