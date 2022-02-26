import './App.css';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
