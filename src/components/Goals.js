import React, { useState } from "react";
import { addGoalAction } from "../actions/goals";
import { useSelector, useDispatch } from "react-redux";
import GoalItem from "./GoalItem";

const Goals = () => {
  const goals = useSelector((state) => state.goals);
  function generateId() {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  }
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addGoal = (e) => {
    e.preventDefault();

    dispatch(addGoalAction({ id: generateId(), goal: input }));
    setInput("");
  };

  return (
    <div>
      <h2>Goals</h2>
      <input
        type="text"
        value={input}
        placeholder="Add a goal"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={addGoal}>
        Add
      </button>

      <fieldset>
        <legend>Goals List</legend>
        {goals.map((goal) => (
          <GoalItem key={goal.id} id={goal.id} goal={goal.goal} />
        ))}
      </fieldset>
    </div>
  );
};

export default Goals;
