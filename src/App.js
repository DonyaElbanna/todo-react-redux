import "./App.css";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveData } from "./actions/shared";
import { useEffect } from "react";

function App() {
  const state = useSelector((state) => state);
  // console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todos & Goals</h1>
      <div className="container">
        <Todos todos={state.todos} loading={state.loading} />
        <Goals goals={state.goals} loading={state.loading} />
      </div>
    </div>
  );
}

export default App;
