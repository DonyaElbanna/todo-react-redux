// import API from "goals-todos-api";

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

// Action Creators

export function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

export function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

// export function asyncAddGoal(name, cb) {
//   return (dispatch) => {
//     return API.saveGoal(name)
//       .then((goal) => {
//         dispatch(addGoal(goal));
//         cb();
//       })
//       .catch(() => alert("An error occured, try again."));
//   };
// }

// export function asyncRemoveGoal(goal) {
//   return (dispatch) => {
//     dispatch(removeGoal(goal.id));

//     return API.deleteGoal(goal.id).catch(() => {
//       dispatch(addGoal(goal));
//       alert("An error occured, try again.");
//     });
//   };
// }
