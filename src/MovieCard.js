import React from "react";

const MovieCard = ({ movieObject }) => {
  return (
    <div className="movie">
      <div className="movieImage">
        <img
          src={
            movieObject.Poster !== "N/A"
              ? movieObject.Poster
              : "https://via.placeholder.com/300"
          }
          alt={movieObject.Title}
        />
        <span className="type">{movieObject.Type}</span>
        <h3>{movieObject.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
