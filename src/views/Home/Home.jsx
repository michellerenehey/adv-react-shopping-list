import { useReducer } from 'react';
import './Home.css';
import AddItem from '../../components/Add/AddItem';
import ItemList from '../../components/ItemList/ItemList';
import foroe from '../../assets/foroe-islands.jpg';

// manipulate id numbers
let nextId = 3;

//set up initial items
const initialItems = [
  { id: 0, text: 'Meditate', done: false },
  { id: 1, text: 'Go for 20 minute walk', done: false },
  { id: 2, text: 'Drink a glass of water', done: false },
];

//create reduce function
function itemsReducer(state, action) {
  switch (action.type) {
    case 'added': {
      return [...state, { id: action.id, text: action.text, done: false }];
    }
    default: {
      throw Error(`unknown action: ${action.type}`);
    }
  }
}

//
export default function Home() {
  // useReducer hook to handle state
  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  console.log(items);
  // dispatch in functions
  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text,
    });
  };

  return (
    <div className="Home" style={{ backgroundImage: `url(${foroe})` }}>
      <h1>Self Care Checklist</h1>
      <AddItem addItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
