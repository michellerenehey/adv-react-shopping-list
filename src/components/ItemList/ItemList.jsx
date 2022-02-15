import './ItemList.css';

export default function ItemList({ items }) {
  return (
    <div className="ItemList">
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
