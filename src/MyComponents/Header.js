import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          {props.title}
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

          </ul>

          {props.searchbar && (
            <div className="container mt-1">
              <div className="input-group shadow">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search anything..."
                />
                <button className="btn btn-dark">🔍</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;

Header.defaultProps = {
  title: "Your Title Here",
  searchbar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool,
};