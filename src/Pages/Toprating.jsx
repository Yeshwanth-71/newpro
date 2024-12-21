import React from "react";
import { Telugu } from "../Data/Telugu";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function TopRating() {
  const topRatedTeluguMovies = Telugu.filter((item) => item.rating >= 4.5).sort((a, b) => b.rating - a.rating);

  return (
    <div className="top-rating" style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <br />
      <h2 style={{ textAlign: "center", margin: "20px", color: "white" }}>Top Rated Telugu Movies</h2>
      <div
        className="movies-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
      >
        {topRatedTeluguMovies.map((movie) => (
          <Link to={`/telmovie/${movie.id}`} style={{ textDecoration: "none" }} key={movie.id}>
            <div style={{ textAlign: "center", color: "white" }}>
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "200px",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                }}
              />
              <h4>{movie.title}</h4>
              <p>Rating: {movie.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopRating;
