import './App.css';
import { data } from "./helpers/data";
import Card from './Card';

function App() {
  return (
    <div className="search">
      <input type="text" />
      <button>Search</button>
      <Card data={data} />
    </div>
  );
}

export default App;
