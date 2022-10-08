import axios from "axios";
import { SetMovies } from "../../redux/action/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./search-form.scss";

export const SearchForm = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const API_KEY = "9e53252d";

  const onLabelChange = (e) => {
    setTerm(e.target.value);
  };

  const onSearchText = async (term) => {
    if (term === "") return;
    else {
      const response = await axios
        .get(`http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`)
        .catch((err) => console.log(`Error is ${err}`));
      dispatch(SetMovies(response.data.Search));
      setTerm(term);
    }
  };

  return (
    <div className="search__form">
      <input
        className="search__form-input"
        type="text"
        name="movie"
        placeholder="Movie name"
        value={term}
        onChange={onLabelChange}
      />
      <button className="search__form-btn" onClick={() => onSearchText(term)}>
        Search...
      </button>
    </div>
  );
};
