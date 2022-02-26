import './Layout.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
