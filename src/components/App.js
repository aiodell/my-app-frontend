import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import FoxContainer from './FoxContainer';
import RegisterNewFox from './RegisterNewFox';
import RegisterSponsor from './RegisterSponsor';
import '../styles.css';
import SponsorContainer from './SponsorContainer';

function App() {

  const [foxes, setFoxes ] = useState( [] )
  const [sponsors, setSponsors] = useState ( [] )

  // get all foxes
  useEffect( () => {
    fetch( 'http://localhost:9292/foxes')
    .then ( res => res.json() )
    .then(foxData => setFoxes(foxData))
  }, [] );

  const addFox = (newFox) => {
    setFoxes([...foxes, newFox])
  }

  // get all sponsors
  useEffect( () => {
    fetch( 'http://localhost:9292/sponsors')
    .then ( res => res.json() )
    .then(sponsorData => setSponsors(sponsorData))
  }, [] );


  function handleDeleteClick(deletedFox){
    const updatedFoxes = foxes.filter((fox) => fox.id!==deletedFox)
    setFoxes(updatedFoxes)
  }



  function submitFunction(obj){
    setSponsors([...sponsors, obj])
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/foxes">
          <FoxContainer 
          foxes = { foxes }
          handleDeleteClick = {handleDeleteClick}
          sponsors = { sponsors }
          />
        </Route>
        <Route exact path="/addfox">
          <RegisterNewFox 
          addFox = { addFox }
          foxes = { foxes }/>
        </Route>
        <Route exact path="/addsponsor">
          <RegisterSponsor submitFunction={submitFunction}/>
          <SponsorContainer sponsors = { sponsors }/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;