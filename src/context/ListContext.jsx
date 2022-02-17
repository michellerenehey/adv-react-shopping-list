import { createContext, useContext, useReducer } from 'react';

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
    case 'edited': {
      return state.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return state.filter((item) => item.id !== action.taskId);
    }
    default: {
      throw Error(`unknown action: ${action.type}`);
    }
  }
}

// use createContext
const ListContext = createContext();

// set up provider
const ListProvider = ({ children }) => {
  // useReducer hook to handle state
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  // dispatch in functions
  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text,
    });
  };

  const handleEditItem = (task) => {
    dispatch({
      type: 'edited',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      taskId,
    });
  };
  return (
    <ListContext.Provider value={{ items, handleAddItem, handleEditItem, handleDeleteItem }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) throw new Error('Error: useList must be wrapped in ListProvider');
  return context;
};
