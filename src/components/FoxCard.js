import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


function FoxCard({fox, handleDeleteClick, sponsors}) { 
  const [showDetails, setShowDetails] = useState(false)
  const {id} = fox

  // get sponsor names
  const sponsorDropDown = sponsors.map( sponsor => {
    const name = sponsor.name
    
    return(
      <Form.Select aria-label="sponsor names">
        <option key = {sponsor.id} value= { name }>{ name }</option>
      </Form.Select>
    )
  })
  
  // display card information
  const toggleCard = () => {
    setShowDetails((previousDetails)=> !previousDetails)
  }

  const details =  (
      <div>
          <p>Age: {fox.age}</p>
          <p>Personality: {fox.personality}</p>
          <p>Favorite Toy: {fox.favorite_toy}</p>
          <h4>Sponsored: {fox.sponsored ? "Yes" : <span>{ sponsorDropDown }</span>} </h4>
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
       <div>
          <h1>{fox.name}</h1>
          <img onClick={toggleCard} src={fox.image_url} alt="cute fox"/>
             {showDetails ? details : noDetails}
             <Link to={`/foxes/${id}`}>
              <button>Update Fox</button>
             </Link>
             <button onClick= {handleDelete}>Bye Bye Foxie</button>
       </div>
  )
}

export default FoxCard;