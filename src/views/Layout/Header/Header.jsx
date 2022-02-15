import './Header.css';
import giphy from '../../../assets/giphy.webp';

export default function Header() {
  return <div className="Header" style={{ backgroundImage: `url(${giphy})` }}></div>;
}
