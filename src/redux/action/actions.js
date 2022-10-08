import { ActionTypes } from "./actionTypes";
export const SetMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};
