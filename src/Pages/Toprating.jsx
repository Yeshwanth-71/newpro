import React, { useState } from "react";
import { Telugu } from "../Data/Telugu";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function TopRating() {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5; // Number of movies per page

  // Filter and sort the movies
  const topRatedTeluguMovies = Telugu.filter((item) => item.rating >= 4.5).sort((a, b) => b.rating - a.rating);

  // Calculate total pages
  const totalPages = Math.ceil(topRatedTeluguMovies.length / moviesPerPage);

  // Get movies for the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = topRatedTeluguMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Handlers for navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="top-rating" style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <br />
      <h2 style={{ textAlign: "center", margin: "20px", color: "white" }}>Top Rated Telugu Movies</h2>
      <div
        className="movies-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
      >
        {currentMovies.map((movie) => (
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{
            padding: "10px 20px",
            backgroundColor: currentPage === 1 ? "gray" : "blue",
            color: "white",
            border: "none",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            margin: "0 10px",
            borderRadius: "5px",
          }}
        >
          Previous
        </button>
        <span style={{ color: "white", alignSelf: "center", margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{
            padding: "10px 20px",
            backgroundColor: currentPage === totalPages ? "gray" : "blue",
            color: "white",
            border: "none",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            margin: "0 10px",
            borderRadius: "5px",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TopRating;
