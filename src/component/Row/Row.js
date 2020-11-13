import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";

const baseUrl = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //why return request here?
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt="movie.name"
          />
        ))}
      </div>
      {/* {container -> posters} */}
    </div>
  );
}

export default Row;
