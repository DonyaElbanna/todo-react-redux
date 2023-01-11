import "./App.css";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveData } from "./actions/shared";
import { useEffect } from "react";
import { Divider, Grid, Segment, Icon } from "semantic-ui-react";

function App() {
  const state = useSelector((state) => state);
  // console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveData());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Todos & Goals</h1>
      <Segment>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Todos todos={state.todos} loading={state.loading} />
          </Grid.Column>
          <Grid.Column>
            <Goals goals={state.goals} loading={state.loading} />
          </Grid.Column>
        </Grid>
        <Divider vertical style={{ color: "#9e9fea" }}>
          <Icon name="bullseye" />
        </Divider>
      </Segment>
    </div>
  );
}

export default App;
