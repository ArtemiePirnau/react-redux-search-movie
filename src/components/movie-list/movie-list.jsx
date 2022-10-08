import "./movie-list.scss";
import { useSelector } from "react-redux";
export const MovieList = () => {
  const products = useSelector((state) => state.allMovies.movies);
  return (
    <ul className="movie__list">
      {products.map(({ imdbID, Title, Poster, Year }) => {
        return (
          <li className="movie__item" key={imdbID}>
          <img className="movie__item-img" src={Poster} alt={Title} />
          <div className="movie__item-info">
            <h3 className="movie__item-title">{Title}</h3>
            <p className="movie__item-year">{Year}</p>
          </div>
        </li>
        );
      })}
    </ul>
  );
};
