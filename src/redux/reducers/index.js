import { combineReducers } from "redux";
import { moviesList } from "./moviesReducer";
export const reducers = combineReducers({
  allMovies: moviesList,
});
