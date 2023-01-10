import React from "react";
import { useDispatch } from "react-redux";
import { addGoal, removeGoal } from "../actions/goals";
import "../App.css";
import API from "goals-todos-api";

const TodoItem = ({ id, goal, complete }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeGoal(id));

    return API.deleteGoal(id).catch(() => {
      dispatch(addGoal({ id: id, name: goal }));
      alert("An error occurred, try again.");
    });
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
