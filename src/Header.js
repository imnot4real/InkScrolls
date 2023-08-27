import React, { useState } from 'react';
import './styles.css'; // Make sure to include your CSS file
import { FaUser, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  // State to track user authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user sign-in
  const handleSignIn = () => {
    // Perform sign-in logic here
    setIsAuthenticated(true);
  };

  // Function to handle user sign-out
  const handleSignOut = () => {
    // Perform sign-out logic here
    setIsAuthenticated(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="top-section">
          <div className="left-section">
            {/* Search box */}
            <div className="search-box input-group">
              <input type="text" className="form-control" placeholder="Search..." />
              <button className="btn btn-outline-secondary search-button" type="button">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="title-section">
            {/* Website title */}
            <h1 className="website-name">InkScrolls</h1>
          </div>
          <div className="right-section">
            {/* Circular profile icon */}
            <div className="profile-dropdown dropdown">
              <div className="profile-icon dropdown-toggle" data-bs-toggle="dropdown">
                <FaUser />
              </div>
              {/* Dropdown menu */}
              <div className="dropdown-menu dropdown-menu-end">
                {isAuthenticated ? (
                  <>
                    {/* Show Sign Out when authenticated */}
                    <span className="dropdown-item" onClick={handleSignOut}>
                      Sign Out
                    </span>
                    <Link to="/create" className="dropdown-item">
                      Create
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                      Settings
                    </Link>
                  </>
                ) : (
                  <>
                    {/* Show Sign Up when not authenticated */}
                    <Link to="/signup" className="dropdown-item">
                      Sign Up
                    </Link>
                    <Link to="/signin" className="dropdown-item">
                      Sign In
                    </Link>
                  </>
                )}
                {/* Add additional dropdown items if needed */}
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          {/* Navigation menu */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Logo</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/categories">Categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
