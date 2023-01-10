import React, { useState } from "react";
import { asyncAddGoal } from "../actions/goals";
import { useSelector, useDispatch } from "react-redux";
import GoalItem from "./GoalItem";

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
      <input
        className="input"
        type="text"
        value={input}
        placeholder="Add a goal"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={addItem} className="btn">
        Add
      </button>

      <fieldset>
        <legend>Goals List</legend>
        {loading
          ? "Loading..."
          : goals.map((goal) => (
              <GoalItem
                key={goal.id}
                id={goal.id}
                name={goal.name}
                goal={goal}
              />
            ))}
      </fieldset>
    </div>
  );
};

export default Goals;
