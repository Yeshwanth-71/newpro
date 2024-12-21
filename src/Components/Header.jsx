import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white gap-3" to="/">
            MoviesDb
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-light"
                  style={{ marginRight: "20px" }}
                >
                  Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/toprating"
                  className="nav-link text-light"
                  style={{ marginRight: "20px" }}
                >
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/upcoming"
                  className="nav-link text-light"
                  style={{ marginRight: "20px" }}
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Movie Name"
                aria-label="Search"
              />
              <button
                className="btn btn-secondary btn-outline-light"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
