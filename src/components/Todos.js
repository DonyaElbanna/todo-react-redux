import React, { useState } from "react";
import { asyncAddTodo } from "../actions/todos";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { Input, Button, Icon, Form } from "semantic-ui-react";

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
      <Input
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button animated="vertical" onClick={addItem} color="violet">
        <Button.Content hidden>Add</Button.Content>
        <Button.Content visible>
          <Icon name="add" />
        </Button.Content>
      </Button>

      <fieldset>
        <legend>Todos List</legend>
        {loading ? (
          <Form loading />
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              complete={todo.complete}
              todo={todo}
            />
          ))
        )}
      </fieldset>
      <br />
      {loading ? (
        ""
      ) : todos.length === 0 ? (
        ""
      ) : unfinishedTodosN === 0 ? (
        <div className="todos-left">
          <Icon name="clipboard check" />
          Nothing left to do!
        </div>
      ) : (
        <div className="todos-left">
          <Icon name="tasks" />
          Unfinished todos: {unfinishedTodosN}
        </div>
      )}
    </div>
  );
};

export default Todos;
