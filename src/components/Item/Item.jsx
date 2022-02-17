import './Item.css';
import { useState } from 'react';
import { useList } from '../../context/ListContext';

export default function Item({ item }) {
  const { handleEditItem, handleDeleteItem } = useList();

  const [isEditing, setIsEditing] = useState(false);

  let itemContent;

  if (isEditing) {
    itemContent = (
      <div>
        <input
          value={item.text}
          onChange={(e) => {
            handleEditItem({ ...item, text: e.target.value });
          }}
        />
        <button
          onClick={() => setIsEditing(false)}
          data-testid={`save-${item.id}`}
          className="edit-button"
        >
          Save
        </button>
      </div>
    );
  } else {
    itemContent = (
      <div className="item-edit" style={{ textDecoration: item.done ? 'line-through' : null }}>
        {item.text}
        <button
          onClick={() => setIsEditing(true)}
          data-testid={`edit-${item.id}`}
          className="edit-button"
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="Item">
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          handleEditItem({ ...item, done: e.target.checked });
        }}
      />
      {itemContent}
      <button
        onClick={() => handleDeleteItem(item.id)}
        data-testid={item.id}
        className="edit-button"
      >
        Delete
      </button>
    </div>
  );
}
