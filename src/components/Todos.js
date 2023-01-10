import React, { useState } from "react";
import { asyncAddTodo } from "../actions/todos";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
// import { connect } from "react-redux";

const Todos = ({ loading }) => {
  const todos = useSelector((state) => state.todos);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    dispatch(asyncAddTodo(input, () => setInput("")));
  };

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
    </div>
  );
};

export default Todos;
