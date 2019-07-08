import React from 'react';
import './App.scss';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Not_Found from './components/pages/Not_Found';
import Nav from './components/Nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={Not_Found} />
      </Switch>
    </Router>
  );
}

export default App;
