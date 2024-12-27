import React, { useState } from 'react';
import { Telugu } from '../Data/Telugu';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function Mobile() {
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 5; // Number of movies per page

    // Calculate total pages
    const totalPages = Math.ceil(Telugu.length / moviesPerPage);

    // Get movies for the current page
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = Telugu.slice(indexOfFirstMovie, indexOfLastMovie);

    // Handler for navigating to the next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handler for navigating to the previous page
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="car" style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
            <Header />
            <br /><br />
            <center><h1 style={{ color: "white" }}>Popular Movies</h1></center>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {currentMovies.map((item) => (
                    <Link to={`/telmovie/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
                        <div className="move" style={{ padding: "10px", textAlign: "center", width: '200px' }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                }}
                            />
                            <p style={{ color: "white" }}>{item.title}</p>
                            <p style={{ color: "white" }}>{item.rating}</p>
                        </div>
                    </Link>
                ))}
            </div> <br /><br /><br />
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
                        borderRadius: "5px"
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
                        borderRadius: "5px"
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Mobile;
