import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Player from './pages/Player';
import './App.css';

const NotFound404 = () => (
  <div>
    <h1>404!</h1>
    <Link to="/">Home</Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/player" component={Player} />
      <Route component={NotFound404} />
    </Switch>
  </BrowserRouter>
);

export default App;
