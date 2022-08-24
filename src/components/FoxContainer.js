import React from "react";
import FoxCard from './FoxCard';

function FoxContainer( {foxes, handleDeleteClick} ){
    const displayFoxes = foxes.map( fox => {
        return(
            <FoxCard 
            key = {fox.id}
            fox = {fox}
            handleDeleteClick = {handleDeleteClick}
            />
        )
    })

    return(
        <div>
            "Cute Foxes Live Here!"
            {displayFoxes}
        </div>
    )
}

export default FoxContainer