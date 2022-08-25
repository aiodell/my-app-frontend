import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function UpdateFox({ onUpdateFox }) {
    const [ fox, setFox ] = useState([])
    const [ formData, setFormData ] = useState({ })

    let { id } = useParams();
    
    // pull for the selected fox
    useEffect( () => {
    fetch(`http://localhost:9292/foxes/${id}`)
      .then( res => res.json() )
      .then( fox => {setFox(fox)})
    }, [ id ])

    function updateFox(e) {
      e.preventDefault()
      fetch(`http://localhost:9292/foxes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json() )
      .then( updatedFox => {
        onUpdateFox(updatedFox);
      })
       e.target.reset()
    }

    function handleChange(e){ 
      setFormData({...formData, [e.target.id] : e.target.value }) }

    return(
        <Container>
            <h1>Update {fox.name}'s infomation!</h1>
            <Form onSubmit = { updateFox }>

                {/* Enter fox age */}
                <Form.Group className="mb-3" controlId="age" onChange={ handleChange }>
                    <Form.Label>Age: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <br />
                {/* Enter fox toy */}
                <Form.Group className="mb-3" controlId="favorite_toy" onChange={ handleChange }>
                    <Form.Label>Favorite Toy: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <br />
                {/* Enter personality */}
                <Form.Group className="mb-3" controlId="personality" onChange={ handleChange }>
                    <Form.Label>Personality: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <br />
                {/* Enter fox personality */}
                <Form.Group className="fox-image" controlId="image_url" onChange={ handleChange }>
                    <Form.Label>Image: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <br />
                <Button type ="submit" className="submit">Update Fox</Button>
            </Form>
        </Container>
    )   
  }


export default UpdateFox