import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../../containers/Player';

const View = () => (
  <div>
    <Link to="/">Home</Link>
    <h1>This is my awesome player</h1>
    <Player />
  </div>
);

export default View;
