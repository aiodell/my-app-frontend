import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function RegisterNewFox({ addFox }) {
    const [formData, setFormData] = useState({ })
    
    const handleSubmit = (e) => {
        e.preventDefault();

          fetch("http://localhost:9292/foxes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
          .then((r) => r.json())
          .then((foxData) => {
            addFox(foxData)
            setFormData({ })
          })
          e.target.reset()
    }

    function handleChange(e){ setFormData({...formData, [e.target.id] : e.target.value }) }

    return(
        <Container>
            <h1>Register A New Fox Buddy!</h1>
            <Form onSubmit = { handleSubmit }>

                {/* Enter fox name */}
                <Form.Group className="mb-3" controlId="name" onChange= { handleChange }>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder= "Fox name"/>
                </Form.Group>

                {/* Enter fox age */}
                <Form.Group className="mb-3" controlId="age" onChange= { handleChange }>
                    <Form.Label>Age: </Form.Label>
                    <Form.Control type="number" placeholder= "Fox age"/>
                </Form.Group>
                
                {/* Enter fox toy */}
                <Form.Group className="mb-3" controlId="favorite_toy" onChange= { handleChange }>
                    <Form.Label>Favorite Toy: </Form.Label>
                    <Form.Control type="text" placeholder= "Favorite toy"/>
                </Form.Group>

                {/* Enter personality */}
                <Form.Group className="mb-3" controlId="personality" onChange= { handleChange }>
                    <Form.Label>Personality: </Form.Label>
                    <Form.Control type="text" placeholder= "Enter personality"/>
                </Form.Group>

                {/* Enter fox personality */}
                <Form.Group className="fox-image" controlid="image_url" onChange= { handleChange }>
                    <Form.Label>Image: </Form.Label>
                    <Form.Control type="text" placeholder= "Show the floof"/>
                </Form.Group>
                <br />
                <Button type ="submit" variant="success">Register Fox</Button>
            </Form>
        </Container>
    )
}

export default RegisterNewFox