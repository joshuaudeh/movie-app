import React from "react";

const image_url = "https://image.tmdb.org/t/p/w500";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

function Movie({ title, name, overview, poster_path, vote_average }) {
  const img =
    "https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg";

  return (
    <div className="movie">
      <img src={poster_path ? image_url + poster_path : img} alt={title} />
      <div className="movie-info">
        <h3>{title || name}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
