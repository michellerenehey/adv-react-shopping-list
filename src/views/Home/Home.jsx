// import { useReducer } from 'react';
import './Home.css';
import AddItem from '../../components/Add/AddItem';
import ItemList from '../../components/ItemList/ItemList';
import foroe from '../../assets/foroe-islands.jpg';
import { useList } from '../../context/ListContext';

export default function Home() {
  const { items, handleAddItem, handleEditItem, handleDeleteItem } = useList();

  return (
    <div className="Home" style={{ backgroundImage: `url(${foroe})` }}>
      <h1>Self Care CheckList</h1>
      <AddItem addItem={handleAddItem} />
      <ItemList items={items} editItem={handleEditItem} deleteItem={handleDeleteItem} />
    </div>
  );
}
