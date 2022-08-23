import React from "react";
import { useState } from "react";


function FoxCard({fox}) { 

  const [showDetails, setShowDetails] = useState(false)

  const toggleCard = () => {
    setShowDetails((previousDetails)=> !previousDetails)
  }


    const details =  (
        <div>
            <p>Age: {fox.age}</p>
            <p>Personality: {fox.personality}</p>
            <p>Favorite Toy: {fox.favorite_toy}</p>

        </div>

    )
    
    const noDetails = (
    <h1></h1>
    )   

    return(
        <div >
            <h1>{fox.name}</h1>
            <img onClick={toggleCard} src={fox.image_url} alt="cute fox"/>
             {showDetails ? details : noDetails}
         
          
          
        </div>
    )
}

export default FoxCard;