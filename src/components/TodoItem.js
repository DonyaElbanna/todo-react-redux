import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoAction, removeTodoAction } from "../actions/todos";
import { removeGoalAction } from "../actions/goals";
import "../App.css";

const TodoItem = ({ id, todo, complete }) => {
  const dispatch = useDispatch();

  const toggleTodo = () => {
    dispatch(toggleTodoAction(id));
  };

  const deleteItem = () => {
    dispatch(removeTodoAction(id)) && dispatch(removeGoalAction(id));
  };

  return (
    <div>
      <input
        className="todo-item"
        type="checkbox"
        checked={complete}
        onChange={toggleTodo}
      />
      <label className="todo-item" onClick={toggleTodo}>
        {todo}
      </label>
      <button type="button" onClick={deleteItem} className="btn">
        x
      </button>
    </div>
  );
};

export default TodoItem;
