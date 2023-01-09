export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

// Action Creators

export function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

export function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}
