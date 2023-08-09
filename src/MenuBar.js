import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
};

export default MenuBar;
