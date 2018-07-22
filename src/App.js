import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import Upload from './pages/Upload';
import Home from './pages/Home';
import Player from './pages/Player';
import Nav from './pages/Nav';
import './App.css';

const NotFound404 = () => (
  <div>
    <h1>404!</h1>
    <Link to="/">Home</Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/player" component={Player} />
        <Route exact path="/upload" component={Upload} />
        <Route component={NotFound404} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
