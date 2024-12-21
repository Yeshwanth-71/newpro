import React from "react";
import { Upcoming } from "../Data/Upcoming"; // Import the movie data
import Header from "../Components/Header";

function UpcomingPage() {
  return (
    
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
      <Header /><br /><br />
      <h1 style={{ textAlign: "center", color: "white" }}>Upcoming Movies</h1>
      <div
        className="movies-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}
      >
        {Upcoming.map((item) => (
            <div style={{ textAlign: "center", color: "white" }}>
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
    </div>
  );
}

export default UpcomingPage;
