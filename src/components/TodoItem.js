import React from "react";
import { useDispatch } from "react-redux";
import { asyncToggleTodo, asyncRemoveTodo } from "../actions/todos";
import "../App.css";

const TodoItem = ({ id, name, complete, todo }) => {
  const dispatch = useDispatch();
  const toggleItem = () => {
    dispatch(asyncToggleTodo(id));
  };

  const deleteItem = () => {
    dispatch(asyncRemoveTodo(todo));
  };

  return (
    <div>
      <input
        className="todo-item"
        type="checkbox"
        checked={complete}
        onChange={toggleItem}
        id={name}
      />
      <label
        className="todo-item"
        style={{ textDecoration: complete ? "line-through" : "none" }}
        htmlFor={name}
      >
        {name}
      </label>
      <button type="button" onClick={deleteItem} className="delete btn">
        x
      </button>
    </div>
  );
};

export default TodoItem;
