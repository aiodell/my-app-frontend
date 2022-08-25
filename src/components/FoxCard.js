import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function FoxCard({fox, handleDeleteClick}) { 
  const [showDetails, setShowDetails] = useState(false)
  const {id} = fox

  // display card information
  const toggleCard = () => {
    setShowDetails((previousDetails)=> !previousDetails)
  }

  const details =  (
      <div>
          <p>Age: {fox.age}</p>
          <p>Personality: {fox.personality}</p>
          <p>Favorite Toy: {fox.favorite_toy}</p>
          <p>Sponsor: {fox.sponsor_id}</p>
      </div>

  )

  const noDetails = <p>Click on me to learn more about me!</p>

  //handle deletion of foxes
  function handleDelete(){
    fetch(`http://localhost:9292/foxes/${id}`, {
      method: "DELETE",
   })
     .then((r) => r.json())
     .then((id) => handleDeleteClick(id));
  }

  return(
       <div className="foxCard">
          <h1>{fox.name}</h1>
          <img onClick={toggleCard} src={fox.image_url} alt="cute fox"/>
             {showDetails ? details : noDetails}
             <Link to={`/foxes/${id}`}>
              <button className="submit">Update Fox</button>
             </Link>
              {fox.sponsored ? <h3>Thank you for helping me!</h3> :
              <Link to={`/foxes/${id}/addsponsor`}>
              <button className="submit">Add Sponsor</button>
              </Link>}
             <button className="submit"onClick= {handleDelete}>Bye Bye Foxie</button>
       </div>
  )
}

export default FoxCard;