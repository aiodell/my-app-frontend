import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function RegisterSponsor({submitFunction}){
    const [inputName, setInputName] = useState('')
    const [inputLocation, setInputLocation] = useState('')
    const [inputImage, setInputImage]= useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newSponsor = {
            name: inputName,
            location: inputLocation,
            image_url: inputImage,
            num_of_foxes: 0,
        }
    

    fetch( 'http://localhost:9292/sponsors', {
        method: "POST",
        headers: {
          'Accept': 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSponsor)
      })
      .then(res => res.json())
      .then((data) => console.log(data))
  
      submitFunction(newSponsor)
      e.target.reset()
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>Sponsor Sign Up</h1>
                <Form.Group className="mb-3" controlID="name" >
                    <Form.Label>Name:  </Form.Label>
                    <Form.Control type="text" placeholder="Enter first and last name" onChange={(e) => setInputName(e.target.value)}/>
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlID="location" onChange={(e) => setInputLocation(e.target.value)}>
                    <Form.Label>Location:  </Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="imageUrl"  >
                    <Form.Label>Sponsor Picture:  </Form.Label>
                    <Form.Control type="text" placeholder="Picture...." onChange={(e) => setInputImage(e.target.value)} />
                 </Form.Group>
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Register Sponsor"
                    className="submit"
                />
            </Form>
        </div>
    )
}

export default RegisterSponsor
