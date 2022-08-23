import React from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import FoxContainer from './FoxContainer';
import RegisterNewFox from './RegisterNewFox';
import RegisterSponser from './RegisterSponsor';
import '../styles.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/foxes">
          <FoxContainer />
        </Route>
        <Route exact path="/addfox">
          <RegisterNewFox />
        </Route>
        <Route exact path="/addsponsor">
          <RegisterSponsor />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

