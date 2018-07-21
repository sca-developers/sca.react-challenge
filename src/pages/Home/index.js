import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/upload">Upload</Link>
      </li>
      <li>
        <Link to="/player">Player</Link>
      </li>
    </ul>
  </div>
);


export default Home;
