import React from "react";

function SponsorCard({image, name, location,}) {
    return(
        <div className="sponsorCard">
            <h1>{name}</h1>
            <img src={image} alt="cute fox"/>
            <h3>Location: {location}</h3>
            <h3>Foxes sponsored: </h3>
            <p></p>
        </div>
    )
}

export default SponsorCard;