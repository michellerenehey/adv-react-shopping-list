import './Home.css';
import AddItem from '../../components/Add/AddItem';
import ItemList from '../../components/ItemList/ItemList';
import foroe from '../../assets/foroe-islands.jpg';

export default function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${foroe})` }}>
      <h1>Self Care Checklist</h1>
      <AddItem />
      <ItemList />
    </div>
  );
}
