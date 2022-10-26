import './App.css';
import { data } from "./helpers/data";
import Card from './Card';

function App() {
  return (
    <div>
      <Card data={data} />
    </div>
  );
}

export default App;
