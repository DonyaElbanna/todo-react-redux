import React, { useState } from "react";
import { addTodo } from "../actions/todos";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
// import { connect } from "react-redux";
import API from "goals-todos-api";

const Todos = ({ loading }) => {
  const todos = useSelector((state) => state.todos);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    return API.saveTodo(input)
      .then((todo) => {
        dispatch(addTodo(todo));
        setInput("");
      })
      .catch(() => alert("An error occured, try again."));
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
                todo={todo.name}
                complete={todo.complete}
              />
            ))}
      </fieldset>
    </div>
  );
};

export default Todos;
