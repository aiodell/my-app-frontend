import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function UpdateFox({ onSponsorAdd, sponsors }) {
    const [ fox, setFox ] = useState([])
    const [ formData, setFormData ] = useState({ })

    let { id } = useParams();
    
    // pull for the selected fox
    useEffect( () => {
    fetch(`http://localhost:9292/foxes/${id}`)
      .then( res => res.json() )
      .then( fox => {setFox(fox)})
    }, [ id ])

    function addSponsor(e) {
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
        onSponsorAdd(updatedFox);
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
            <Form onSubmit = {addSponsor} className="foxUpdateCard">
            <h1>Add or Change {fox.name}'s Sponsor</h1>
            <img src= {fox.image_url} alt = "foxes"/>
                <Form.Group className="mb-3" controlId="sponsor_id" onChange={ handleChange }>
                    <Form.Select>
                        <option value= {sponsor_name}>Choose Sponsor</option>
                        { sponsor_name }
                    </Form.Select>
                </Form.Group>
                <br />
                <Button type ="submit" className="submit">Update Sponsor</Button>
            </Form>
        </Container>
    )   
  }


export default UpdateFox