import React, { useState } from "react";
import { addGoal } from "../actions/goals";
import { useSelector, useDispatch } from "react-redux";
import GoalItem from "./GoalItem";
import API from "goals-todos-api";

const Goals = ({ loading }) => {
  const goals = useSelector((state) => state.goals);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    return API.saveGoal(input)
      .then((goal) => {
        dispatch(addGoal(goal));
        setInput("");
      })
      .catch(() => alert("An error occured, try again."));
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
              <GoalItem key={goal.id} id={goal.id} goal={goal.name} />
            ))}
      </fieldset>
    </div>
  );
};

export default Goals;
