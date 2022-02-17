import './Header.css';
import giphy from '../../../assets/giphy.webp';
import { useList } from '../../../context/ListContext';

export default function Header() {
  const { items } = useList();
  return (
    <div className="Header" style={{ backgroundImage: `url(${giphy})` }}>
      {items.length === 1 ? (
        <span>You have {items.length} thoughtful thing to do today.</span>
      ) : (
        <span>You have {items.length} thoughtful things to do today.</span>
      )}
    </div>
  );
}
