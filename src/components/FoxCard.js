import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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
    <Container>
    <Card.Header className= "fox-card-title">{fox.name}</Card.Header>
      <Card className= "fox-card">
        <Card.Img className = "card-img"
        variant="top" onClick={toggleCard} 
        src={fox.image_url} alt="cute fox"
        />
        <Card.Body className= "card-body">
        
          <Card.Text className = "text-center">{showDetails ? details : noDetails}</Card.Text>

          <span>
          {/* birthday button */}
          <Link to={`/foxes/${id}`}>
            <Button className="card-btn">It's My birthday!</Button>
          </Link>

          {/* sponsor button */}
          <Link to={`/foxes/${id}/addsponsor`}>
            <Button className="card-btn">Add or Change Sponsor</Button>
          </Link>
          </span>

        </Card.Body>
      </Card>
        {/* delete button */}
        <Button className="delete-btn"onClick= {handleDelete}>Delete Fox</Button>
    </Container>
  )
}

export default FoxCard;