import React from "react";
import SponsorCard from "./SponsorCard";

function SponsorContainer( { sponsors, foxes } ){
    const displaySponsors = sponsors.map( sponsor => {
        return(
            <SponsorCard
            key = {sponsor.id}
            sponsor = {sponsor}
            image = {sponsor.image_url}
            location = {sponsor.location}
            />
        )
    })

    return(
        <div>
            <h2 className="sponsorCards">{displaySponsors}</h2>
        </div>
    )
}

export default SponsorContainer
