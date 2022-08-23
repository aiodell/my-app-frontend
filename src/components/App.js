import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import FoxContainer from './FoxContainer';
import RegisterNewFox from './RegisterNewFox';
import RegisterSponsor from './RegisterSponsor';
import '../styles.css';

function App() {

  const [foxes, setfoxes ] = useState( [] )
  
  // get all foxes
  useEffect( () => {
    fetch( 'http://localhost:9292/foxes' )
    .then ( res => res.json() )
    .then(foxData => setfoxes(foxData))
  }, [] );

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/foxes">
          <FoxContainer foxes = { foxes }/>
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

export default App;