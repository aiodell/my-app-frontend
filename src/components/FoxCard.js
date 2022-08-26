import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FoxCard({fox, handleDeleteClick}) { 
  const [showDetails, setShowDetails] = useState(false)
  const { id } = fox

  // display card information
  const toggleCard = () => { setShowDetails((previousDetails)=> !previousDetails) }

  const details =  (
    <div>
        <p>Age: {fox.age}</p>
        <p>Personality: {fox.personality}</p>
        <p>Favorite Toy: {fox.favorite_toy}</p>
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
    <Card 
    className= "foxCard"
    border= "dark">
      <Card.Title className = "card-title">{fox.name}</Card.Title>
      <Card.Img onClick={toggleCard} src={fox.image_url} alt="cute fox"/>
        <Card.Body>
          <Card.Text>{showDetails ? details : noDetails}</Card.Text>
        </Card.Body>
          {/* birthday button */}
          <Link to={`/foxes/${id}`}>
            <Button className="submit">It's My birthday!</Button>
          </Link>

          {/* sponsor button */}
          <Link to={`/foxes/${id}/addsponsor`}>
            <Button className="submit">Add or Change Sponsor</Button>
          </Link>

          {/* delete button */}
          <Button className="submit"onClick= {handleDelete}>Bye Bye Foxie</Button>
    </Card>
  )
}

export default FoxCard;