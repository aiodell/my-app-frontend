import React from "react";
import FoxCard from './FoxCard';

function FoxContainer( {foxes, handleDeleteClick} ){
    const displayFoxes = foxes.map( fox => {
        return(
            <FoxCard 
            key = {fox.id}
            fox = {fox}
            handleDeleteClick = { handleDeleteClick }
            />
        )
    })

    return(
        <div>
            {displayFoxes}
        </div>
    )
}

export default FoxContainer