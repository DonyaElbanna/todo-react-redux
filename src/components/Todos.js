import React, { useState } from "react";
import { asyncAddTodo } from "../actions/todos";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = ({ loading }) => {
  const todos = useSelector((state) => state.todos);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    dispatch(asyncAddTodo(input, () => setInput("")));
  };

  let unfinishedTodosN = todos.filter((todo) => todo.complete === false).length;

  return (
    <div>
      <h2>Todos</h2>
      <input
        className="input"
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={addItem} className="btn">
        Add
      </button>

      <fieldset>
        <legend>Todos List</legend>
        {loading
          ? "Loading..."
          : todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                name={todo.name}
                complete={todo.complete}
                todo={todo}
              />
            ))}
      </fieldset>
      <br />
      {loading ? "" : todos.length === 0 ? "" : unfinishedTodosN === 0 ? (
        <div>Nothing left to do!</div>
      ) : (
        <div>Unfinished todos: {unfinishedTodosN}</div>
      )}
    </div>
  );
};

export default Todos;
