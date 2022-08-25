import React from "react";
import FoxCard from './FoxCard';
import SponsorContainer from './SponsorContainer'

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
        <div className="cards">
            {displayFoxes}
        </div>
    )
}

export default FoxContainer