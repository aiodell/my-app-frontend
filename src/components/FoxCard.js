import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function FoxCard({fox, handleDeleteClick, onUpdateFox}) { 
  
  const {id} = fox
  const [showDetails, setShowDetails] = useState(false)

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

  // redirect to add sponsor page and add fox pages
    // const routeToUpdateFox = () =>{ 
    //     let path = `/`; 
    // }

    // const routeTo = () =>{ 
    //     let path = `/`; 
    // }
    
  const noDetails = <p>Click on me to learn more about me!</p>

  //handle deletion of foxes
  function handleDelete(){
    fetch(`http://localhost:9292/foxes/${id}`, {
      method: "DELETE",
   })
     .then((r) => r.json())
     .then((id) => handleDeleteClick(id));
  }

  function updateFoxDetails(){

  }

  function addSponsor(){

  }

  return(
        <Card>
        <LinkContainer to={ `/foxes/${id}` } >
          <Link>
            <Card.Img
              variant="top"
              src={ fox.image_Url }
              alt= "fox"
            />
          </Link>
        </LinkContainer>
        <Card.Body className="card-body">
          <LinkContainer to={ `/foxes/${id}` } >
            <Link to="#">
              <Card.Text>{ fox.name }</Card.Text>
            </Link>
          </LinkContainer>
        </Card.Body>
        <Card.Footer className="d-grid gap-2">
          <Button onClick={ updateFoxDetails }>Update Information</Button>
          <Button onClick={ addSponsor }>Add a Sponsor</Button>
          <Button onClick={ handleDelete }>Say Good-bye</Button>
        </Card.Footer>
      </Card>
      // <div >
      //     <h1>{fox.name}</h1>
      //     <img onClick={toggleCard} src={fox.image_url} alt="cute fox"/>
      //       {showDetails ? details : noDetails}
      //       <button onClick= {handleDelete}>Bye Bye Foxie</button>
      //       <button onClick= {updateFoxDetails}>Update Fox</button>
      //       <button onClick= { addSponsor }>Add Sponsor</button>
      // </div>
  )
}

export default FoxCard;