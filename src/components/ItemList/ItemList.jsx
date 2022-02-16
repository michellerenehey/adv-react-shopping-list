import './ItemList.css';
import Item from '../Item/Item';

export default function ItemList({ items, editItem, deleteItem }) {
  return (
    <div className="ItemList">
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} editItem={editItem} deleteItem={deleteItem} />
        </li>
      ))}
    </div>
  );
}
