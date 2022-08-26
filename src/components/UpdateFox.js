import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function UpdateFox({ onUpdateFox, sponsors }) {
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

    // map through the sponsor's names
    const sponsor_name = sponsors.map(( sponsor ) => {
        const name = sponsor.name
        return( <option key={ sponsor.id } value={ sponsor.id }>{ name }</option> )
    })

    function handleChange(e){ 
      setFormData({...formData, [e.target.id] : e.target.value }) }

    return(
        <Container className="updateFox">
            <Form onSubmit = { updateFox } className="foxUpdateCard">
            <h1>It's {fox.name}'s birthday!</h1>
            <img src= {fox.image_url} alt = "foxes"/>
                {/* Enter fox age */}
                <Form.Group className="mb-3" controlId="age" onChange={ handleChange }>
                    <Form.Label>Age: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <br />
                <Button type ="submit" className="submit">Age Up</Button>
            </Form>
        </Container>
    )   
  }


export default UpdateFox