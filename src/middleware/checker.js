import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";

const checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("lol")
  ) {
    return alert("Enough playing lol!");
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("lol")
  ) {
    return alert("Enough playing lol!");
  }

  return next(action);
};

export default checker;
