import React from "react";
import SponsorCard from "./SponsorCard";

function SponsorContainer( { sponsors } ){
    const displaySponsors = sponsors.map( sponsor => {
        return(
            <SponsorCard
            key = {sponsor.id}
            name = {sponsor.name}
            image = {sponsor.image_url}
            location = {sponsor.location}
            numOfFoxes = {sponsor.num_of_foxes}
            />
        )
    })
    return(
        <div className="sponsorCards">
            {displaySponsors}
        </div>
    )
}

export default SponsorContainer
