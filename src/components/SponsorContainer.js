import React from "react";
import SponsorCard from "./SponsorCard";

function SponsorContainer( { sponsors } ){
    const displaySponsors = sponsors.map( sponsor => {
        return( <SponsorCard key = {sponsor.id} sponsor = {sponsor}/> )
    })

    return( <h2 className="sponsorCards">{displaySponsors}</h2> )
}

export default SponsorContainer
