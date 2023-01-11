import React from "react";
import { useDispatch } from "react-redux";
import { asyncToggleTodo, asyncRemoveTodo } from "../actions/todos";
import { Checkbox, Button, Icon } from "semantic-ui-react";

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
      <Checkbox label={name} checked={complete} onChange={toggleItem} />
      <Button animated="fade" onClick={deleteItem}>
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="delete" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default TodoItem;
