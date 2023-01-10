import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../actions/todos";
import "../App.css";
import API from "goals-todos-api";
// import { connect } from 'react-redux'

const TodoItem = ({ id, todo, complete }) => {
  const dispatch = useDispatch();

  const toggleItem = () => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert("An error occurred, try again.");
    });
  };

  const deleteItem = () => {
    dispatch(removeTodo(id));

    return API.deleteTodo(id).catch(() => {
      dispatch(addTodo({ id: id, name: todo, complete: complete }));
      alert("An error occurred, try again.");
    });
  };

  return (
    <div>
      <input
        className="todo-item"
        type="checkbox"
        checked={complete}
        onChange={toggleItem}
        id={todo}
      />
      <label
        className="todo-item"
        style={{ textDecoration: complete ? "line-through" : "none" }}
        htmlFor={todo}
      >
        {todo}
      </label>
      <button type="button" onClick={deleteItem} className="btn">
        x
      </button>
    </div>
  );
};

export default TodoItem;
