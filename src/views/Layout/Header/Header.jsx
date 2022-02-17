import './Header.css';
import giphy from '../../../assets/giphy.webp';
import { useList } from '../../../context/ListContext';

export default function Header() {
  const { items, handleClearItems } = useList();
  return (
    <div className="Header" style={{ backgroundImage: `url(${giphy})` }}>
      {items.length === 1 ? (
        <span aria-label={`Single item: ${items.length}`}>
          You have {items.length} thoughtful thing to do today.
        </span>
      ) : (
        <span aria-label={`Multiple items: ${items.length}`}>
          You have {items.length} thoughtful things to do today.
        </span>
      )}
      <button onClick={() => handleClearItems()}>Clear Checklist</button>
    </div>
  );
}
