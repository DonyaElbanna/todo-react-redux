import React from "react";
import { useDispatch } from "react-redux";
import { asyncRemoveGoal } from "../actions/goals";
import { List, Button, Icon } from "semantic-ui-react";

const GoalItem = ({ id, name, goal }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(asyncRemoveGoal(goal));
  };

  return (
    <List>
      <Icon name="angellist" style={{ fontSize: "1.3rem" }} />
      {name}
      <Button animated="fade" onClick={deleteItem}>
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="delete" />
        </Button.Content>
      </Button>
    </List>
  );
};

export default GoalItem;
