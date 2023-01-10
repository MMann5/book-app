import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import MovieCard from "./MovieCard";
import "./App.css";

const App = () => {
  const API_URL = "http://www.omdbapi.com?apikey=56d18197";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("harry potter");
  }, []);

  useEffect(() => {
    search.length > 2 && searchMovie(search);
  }, [search]);

  return (
    <div className="app">
      <h1>
        Mo<span className="land">vieLand</span>
      </h1>

      <div className="search">
        <input
          placeholder="Search for Movies "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearchAlt
          className="search-icons"
          onClick={() => searchMovie(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movieObject={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No movies found</h3>
        </div>
      )}
    </div>
  );
};

export default App;
