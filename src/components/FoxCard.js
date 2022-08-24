import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function FoxCard({fox, handleDeleteClick, onUpdateFox}) { 
  
  const [showDetails, setShowDetails] = useState(false)
  const {id} = fox

  const toggleCard = () => {
    setShowDetails((previousDetails)=> !previousDetails)
  }

  const details =  (
      <div>
          <p>Age: {fox.age}</p>
          <p>Personality: {fox.personality}</p>
          <p>Favorite Toy: {fox.favorite_toy}</p>
          <h4>Sponsored: {fox.sponsored ? "Yes" : "No"} </h4>
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

    // redirect the page to single fox page

  return(
       <div className="card">
          <h1>{fox.name}</h1>
          <img onClick={toggleCard} src={fox.image_url} alt="cute fox"/>
             {showDetails ? details : noDetails}
          <Link to={`/foxes/${id}`}>
            <button>Update Fox</button>
          </Link>
          <button onClick= {handleDelete}>Bye Bye Foxie</button>
             
             {/* <button onClick= { addSponsor }>Add Sponsor</button> */}
       </div>
  )
}

export default FoxCard;