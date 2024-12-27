import React, { useState } from "react";
import { Upcoming } from "../Data/Upcoming"; // Import the movie data
import Header from "../Components/Header";

function UpcomingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5; // Number of movies per page

  // Calculate total pages
  const totalPages = Math.ceil(Upcoming.length / moviesPerPage);

  // Get movies for the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = Upcoming.slice(indexOfFirstMovie, indexOfLastMovie);

  // Handlers for navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <br />
      <br />
      <h1 style={{ textAlign: "center", color: "white" }}>Upcoming Movies</h1>
      <div
        className="movies-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
      >
        {currentMovies.map((item, index) => (
          <div key={index} style={{ textAlign: "center", color: "white" }}>
            <img
              src={item.Image}
              alt={item.title}
              style={{
                width: "200px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
            />
            <h4>{item.title}</h4>
            <p>{item.Rating}</p>
          </div>
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

export default UpcomingPage;
