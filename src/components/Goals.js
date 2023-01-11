import React, { useState } from "react";
import { asyncAddGoal } from "../actions/goals";
import { useSelector, useDispatch } from "react-redux";
import GoalItem from "./GoalItem";
import { Input, Button, Icon, Form } from "semantic-ui-react";

const Goals = ({ loading }) => {
  const goals = useSelector((state) => state.goals);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    dispatch(asyncAddGoal(input, () => setInput("")));
  };

  return (
    <div>
      <h2>Goals</h2>
      <Input
        placeholder="Add a goal"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button animated="vertical" onClick={addItem} color="violet">
        <Button.Content hidden>Add</Button.Content>
        <Button.Content visible>
          <Icon name="add" />
        </Button.Content>
      </Button>
      <fieldset>
        <legend>Goals List</legend>
        {loading ? (
          <Form loading />
        ) : (
          goals.map((goal) => (
            <GoalItem key={goal.id} id={goal.id} name={goal.name} goal={goal} />
          ))
        )}
      </fieldset>
    </div>
  );
};

export default Goals;
