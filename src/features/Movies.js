import React from "react";

import { useSelector } from "react-redux";

import Movie from "./Movie";

function Movies() {
  const { movies } = useSelector((state) => ({
    movies: state.search.movies,
  }));

  return (
    <>
      <div className="movie-container">
        {movies?.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
