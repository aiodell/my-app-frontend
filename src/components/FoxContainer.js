import React from "react";
import FoxCard from './FoxCard';

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
    <div className="foxCards">
      {displayFoxes}
    </div>
  )
}

export default FoxContainer