import React from "react";
import FoxCard from './FoxCard';
import Container from 'react-bootstrap/Container'

function FoxContainer( {foxes, handleDeleteClick, sponsors} ){
  const displayFoxes = foxes.map( fox => {
    return(
        <FoxCard 
        key = {fox.id}
        fox = {fox}
        handleDeleteClick = { handleDeleteClick }
        sponsors = { sponsors }
        />
    )
  })

  return(
    <Container className="fox-cards">
      {displayFoxes}
    </Container>
  )
}

export default FoxContainer