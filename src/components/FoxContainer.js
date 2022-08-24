import React from "react";
import FoxCard from './FoxCard';

function FoxContainer( {foxes, handleDeleteClick, onUpdateFox} ){
    const displayFoxes = foxes.map( fox => {
        return(
            <FoxCard 
            key = {fox.id}
            fox = {fox}
            handleDeleteClick = { handleDeleteClick }
            onUpdateFox = { onUpdateFox }
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