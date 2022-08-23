import React from "react";
import FoxCard from './FoxCard';

function FoxContainer( {foxes} ){
    const displayFoxes = foxes.map( fox => {
        return(
            <FoxCard 
            key = {fox.id}
            name = {fox.name}
            favoriteToy = {fox.favorite_toy}
            personality = { fox.personality}
            image = {fox.image_url}
            />
        )
    })

    console.log(displayFoxes)

    return(
        <div>
            "Cute Foxes Live Here!"
            {displayFoxes}
        </div>
    )
}

export default FoxContainer