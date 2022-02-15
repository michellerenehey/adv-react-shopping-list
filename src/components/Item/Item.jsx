import './Item.css';
import { useState } from 'react';

export default function Item({ item, editItem }) {
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
      <div>
        <p>{item.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div>
      <p>{itemContent}</p>
    </div>
  );
}
