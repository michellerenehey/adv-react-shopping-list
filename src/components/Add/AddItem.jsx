import './AddItem.css';
import { useState } from 'react';

export default function AddItem({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    addItem(newItem);
  };
  return (
    <div className="AddItem">
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          value={newItem}
          placeholder="add item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
}
