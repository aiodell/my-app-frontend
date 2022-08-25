import React from "react";

function SponsorCard({name, image, location, numOfFoxes}) {
    
    return(
        <div className="sponsorCard">
            <h1>{name}</h1>
            <img src={image} alt="cute fox"/>
            <h3>Location: {location}</h3>
            <h3>Number of Foxes: {numOfFoxes}</h3>
        </div>
    )
}

export default SponsorCard;