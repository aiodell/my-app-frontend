import React from "react";
import FoxCard from './FoxCard';

function FoxContainer( {foxes} ){
    const displayFoxes = foxes.map( fox => {
        return(
            <FoxCard 
            key = {fox.id}
            fox = {fox}
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