import React, { useState } from "react";
import { addTodoAction } from "../actions/todos";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  function generateId() {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  }

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    dispatch(
      addTodoAction({
        id: generateId(),
        todo: input,
        complete: false,
      })
    );
    setInput("");
  };

  return (
    <div>
      <h2>Todos</h2>
      <input
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
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            complete={todo.complete}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default Todos;
