import '../styles.css';
import Home from './Home';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import FoxContainer from './FoxContainer';
import RegisterNewFox from './RegisterNewFox';
import RegisterSponsor from './RegisterSponsor';
import SponsorContainer from './SponsorContainer';
import UpdateFox from './UpdateFox';
import AddSponsor from './AddSponsor'

function App() {

  const [foxes, setFoxes ] = useState( [] )
  const [sponsors, setSponsors] = useState ( [] )

  // get all foxes
  useEffect( () => {
    fetch( 'http://localhost:9292/foxes')
    .then ( res => res.json() )
    .then(foxData => setFoxes(foxData))
  }, [] );


  // get all sponsors
  useEffect( () => {
    fetch( 'http://localhost:9292/sponsors')
    .then ( res => res.json() )
    .then(sponsorData => setSponsors(sponsorData))
  }, [] );

  // add delete function
  function handleDeleteClick(deletedFox){
    const updatedFoxes = foxes.filter((fox) => fox.id !== deletedFox.id)
    setFoxes(updatedFoxes)
  }

  // add sponsors function
  function submitFunction(obj){
    setSponsors([...sponsors, obj])
  }

  // add fox function
  const addFox = (newFox) => {
    setFoxes([...foxes, newFox])
  }

  // add update fox function
  function onUpdateFox(updatedFox){
    const freshFox = foxes.map(fox => fox.id === updatedFox.id? updatedFox : fox)
    setFoxes(freshFox)
  }

    // add update fox function
  function onSponsorUpdate(addedSponsor){
    const newSponsor = foxes.map(fox => fox.id === addedSponsor.id? addedSponsor : fox)
    setFoxes(newSponsor)
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
          <RegisterNewFox addFox = { addFox }/>
        </Route>
        <Route exact path="/addsponsor">
          <SponsorContainer 
          sponsors = { sponsors }
          foxes = { foxes }/>
          <RegisterSponsor submitFunction={submitFunction}/>
        </Route>
        <Route exact path="/foxes/:id">
            <UpdateFox 
            onUpdateFox = { onUpdateFox } 
            sponsors = { sponsors }
            />
        </Route>
        <Route exact path="/foxes/:id/addsponsor">
          <AddSponsor 
            onSponsorUpdate = { onSponsorUpdate } 
            sponsors = {sponsors}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;