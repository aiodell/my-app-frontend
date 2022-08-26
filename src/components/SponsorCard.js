import React, { useState, useEffect } from "react";

function SponsorCard({sponsor}) {
    const [ foxName, setFoxName ] = useState([])

    // obtain the fox names associated with the sponsor id
    useEffect( () => {
        fetch(`http://localhost:9292/sponsors/${sponsor.id}`)
        .then( res => res.json() )
        .then( fox => {setFoxName(fox)})
    }, [ sponsor.id])

    const names = foxName.map((name) => {
        return(
            <li key ={name}>{name}</li>
        )
    })

    return(
        <div className="sponsorCard">
            <h1>{sponsor.name}</h1>
            <img src={sponsor.image_url} alt="cute fox"/>
            <h3>Location: {sponsor.location}</h3>
            <h3>Foxes sponsored: </h3>
            <p>{names}</p>
        </div>
    )
}

export default SponsorCard;