import React from 'react';
import './styles.css';
import { FaUser, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="top-section">
          <div className="left-section">
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <button><FaSearch /></button>
            </div>
          </div>
          <div className="center-section">
            <h1 className="website-name">InkScrolls</h1>
          </div>
          <div className="right-section">
            <div className="profile-dropdown">
              <button><FaUser /></button>
              <div className="dropdown-content">
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <a href="#">Log Out</a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          {/* Your navigation menu items here */}
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/articles">Articles</a>
          <a href="/contact">Contact</a>
          {/* Add other menu items as needed */}
        </div>
      </div>
    </header>
  );
}

export default Header;



