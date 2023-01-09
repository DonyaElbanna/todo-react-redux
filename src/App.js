import "./App.css";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <h1>Todos & Goals</h1>
      <div className="container">
        <Todos />
        <Goals />
      </div>
    </div>
  );
}

export default App;
