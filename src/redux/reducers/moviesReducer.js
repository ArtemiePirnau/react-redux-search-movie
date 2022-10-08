import { ActionTypes } from "../action/actionTypes";

const initialState = {
  movies: [],
};

export const moviesList = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
