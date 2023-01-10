import React from "react";
import { useDispatch } from "react-redux";
import { asyncRemoveGoal } from "../actions/goals";
import "../App.css";

const GoalItem = ({ id, name, goal }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(asyncRemoveGoal(goal));
  };

  return (
    <div>
      {name}
      <button type="button" onClick={deleteItem} className="delete btn">
        x
      </button>
    </div>
  );
};

export default GoalItem;
