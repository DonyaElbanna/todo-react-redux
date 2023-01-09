import React from "react";
import { useDispatch } from "react-redux";
import { removeGoalAction } from "../actions/goals";
import "../App.css";

const TodoItem = ({ id, goal, complete }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeGoalAction(id));
  };

  return (
    <div>
      {goal}
      <button type="button" onClick={deleteItem} className="btn">
        x
      </button>
    </div>
  );
};

export default TodoItem;
