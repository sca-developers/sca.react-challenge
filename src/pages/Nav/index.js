import React from 'react';
import { Link } from 'react-router-dom';


const Nav = function () {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list">
          <Link to="/upload">Upload Files</Link>
        </li>
        <li className="nav-list">
          <Link to="/player">Player</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
