import React from "react";

function FoxCard({name, favoriteToy, personality, image}) {
    return(
        <div>
            <h1>Name: {name}</h1>
            <img src={image} alt="cute fox"/>
            <h3>Favorite Toy: {favoriteToy}</h3>
            <h3>Personality: {personality}</h3>
        </div>
    )
}

export default FoxCard;