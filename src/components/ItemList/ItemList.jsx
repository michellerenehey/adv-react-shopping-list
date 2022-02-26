import './ItemList.css';
import Item from '../Item/Item';
import { useList } from '../../context/ListContext';

export default function ItemList() {
  const { items } = useList();

  return (
    <div className="ItemList">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
