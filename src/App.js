import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import Home from './pages/Home';
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
      <Route component={NotFound404} />
    </Switch>
  </BrowserRouter>
);

export default App;
