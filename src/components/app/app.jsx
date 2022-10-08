import { MovieList } from "../movie-list/movie-list.jsx";
import { Header } from "../header/header.jsx";
import { SearchForm } from "../search-form/search-form.jsx";
import "./app.scss";

export const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <SearchForm />
        <MovieList />
      </div>
    </div>
  );
};
