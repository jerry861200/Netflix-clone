import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const randomVal = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      console.log(request.data.results[randomVal]);
      setMovie(request.data.results[randomVal]);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n){
    return str?.length > n ? str.substr(0,n - 1) + "..." :str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* Title */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">List</button>
        </div>

       <h1 className="banner_description">
         {movie?.overview}
       </h1>
      </div>
    </header>
  );
}

export default Banner;
