import './Footer.css';
import giphy from '../../../assets/giphy.webp';

export default function Footer() {
  return (
    <div className="Footer" style={{ backgroundImage: `url(${giphy})` }}>
      <p>
        Made by <a href="https://www.linkedin.com/in/michellenygren/">Michelle</a>
      </p>
    </div>
  );
}
