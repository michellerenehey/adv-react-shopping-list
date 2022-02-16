import './Item.css';
import { useState } from 'react';

export default function Item({ item, editItem, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);

  let itemContent;

  if (isEditing) {
    itemContent = (
      <div>
        <input
          value={item.text}
          onChange={(e) => {
            editItem({ ...item, text: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)} data-testid={`save-${item.id}`}>
          Save
        </button>
      </div>
    );
  } else {
    itemContent = (
      <div className="item-edit">
        <p>{item.text}</p>
        <button onClick={() => setIsEditing(true)} data-testid={`edit-${item.id}`}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="Item">
      {itemContent}
      <button onClick={() => deleteItem(item.id)} data-testid={item.id}>
        Delete
      </button>
    </div>
  );
}
