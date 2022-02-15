import './ItemList.css';
import Item from '../Item/Item';

export default function ItemList({ items, editItem }) {
  return (
    <div className="ItemList">
      {items.map((item) => (
        <div key={item.id}>
          {/* <p>{item.text}</p> */}
          <Item item={item} editItem={editItem} />
        </div>
      ))}
    </div>
  );
}
