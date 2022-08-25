import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

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
            e.target.reset()
          })
          e.target.reset()
    }

    function handleChange(e){ setFormData({...formData, [e.target.id] : e.target.value }) }

    return(
        <div className="registerFox">
        <Container className="registerForm">
            <h1>Register A New Fox Buddy!</h1>
            <Form onSubmit = { handleSubmit } >

                {/* Enter fox name */}
                <Form.Group class="mb-3" controlId="name" onChange= { handleChange }>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder= "Fox name"/>
                </Form.Group>
                <br />
                {/* Enter fox age */}
                <Form.Group class="mb-3" controlId="age" onChange= { handleChange }>
                    <Form.Label>Age: </Form.Label>
                    <Form.Control type="number" placeholder= "Fox age"/>
                </Form.Group>
                <br />
                {/* Enter fox toy */}
                <Form.Group class="mb-3" controlId="favorite_toy" onChange= { handleChange }>
                    <Form.Label>Favorite Toy: </Form.Label>
                    <Form.Control type="text" placeholder= "Favorite toy"/>
                </Form.Group>
                <br />
                {/* Enter personality */}
                <Form.Group class="mb-3" controlId="personality" onChange= { handleChange }>
                    <Form.Label>Personality: </Form.Label>
                    <Form.Control type="text" placeholder= "Enter personality"/>
                </Form.Group>
                <br />
                {/* /* Enter fox personality */}
                <Form.Group class="fox-image" controlid="image_url" onChange= { handleChange }>
                    <Form.Label>Image: </Form.Label>
                    <Form.Control type="text" placeholder= "Show the floof"/>
                </Form.Group>
                <br />
                <Button type ="submit" className="submit">Register Fox</Button>
            </Form>
        </Container>
        </div>
    )
}

export default RegisterNewFox
