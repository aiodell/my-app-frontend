/* eslint-disable no-undef */
import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";


function RegisterSponsor(){
    const [inputName, setInputName] = useState('')
    const [inputLocation, setInputLocation] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newSponsor = {
            name: inputName,
            location: inputLocation,
        }
    }

    fetch( 'http://localhost:9292/addsponsor', {
        method: "POST",
        headers: {
          'Accept': 'application.json',
          'Content-Type': 'application/json'
        },
        // eslint-disable-next-line no-undef
        body: JSON.stringify(newSponsor)
      })
      .then(res => res.json())
      .then((data) => console.log(data))
  
      // eslint-disable-next-line no-undef
      submitFunction(newSponsor)
      // eslint-disable-next-line no-undef
      e.target.reset()
    }



 


        <div>
            <Form>
                <h3>Sponsor Sign Up</h3>
                <Form.Group className="input-text" controlID="name" >
                    <Form.Label>Name</Form.Label>
                    // eslint-disable-next-line no-undef, no-undef, no-undef, no-undef
                    <Form.Control type="text" placeholder="Enter first and last name" onChange={(e) => setInputName(e.target.value)}/>
                </Form.Group>
                <br />
                <Form.Group className="input-text" controlID="location" onChange={(e) => setInputLocation(e.target.value)}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" />
                </Form.Group>
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Register"
                    className="submit"
                />
            </Form>
        </div>
    


export default RegisterSponsor

