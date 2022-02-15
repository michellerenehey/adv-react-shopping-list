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
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    itemContent = (
      <div className="item-edit">
        <p>{item.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div className="Item">
      {itemContent}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
}
