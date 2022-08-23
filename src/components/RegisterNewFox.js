import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

function RegisterNewFox({ addFox }) {
    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState(0)
    const [ personality, setPersonality ] = useState('')
    const [ favoriteToy, setFavoriteToy ] = useState('')
    const [ image, setImage ] = useState('')

    // submit the fox information
    function handleSubmit(e) {
        e.preventDefault();
        const newFox = {
            name: name,
            age: age,
            personality: personality,
            favorite_toy: favoriteToy,
            image_url: image
        }

        fetch('http://localhost:9292/foxes', {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(newFox)
        })

        .then(res => res.json())
        .then((foxData) => {addFox(foxData)})
        e.target.reset()
    }

    return(
        <Container>
            <h1>Register A New Fox Buddy!</h1>
            <Form onSubmit = { handleSubmit }>

                {/* Enter fox name */}
                <Form.Group className="mb-3" controlId="name" onChange= {(e) => setName(e.target.value)}>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder= "Fox name"/>
                </Form.Group>

                {/* Enter fox age */}
                <Form.Group className="mb-3" controlId="age" onChange= {(e) => setAge(e.target.value)}>
                    <Form.Label>Age: </Form.Label>
                    <Form.Control type="number" placeholder= "Fox age"/>
                </Form.Group>
                
                {/* Enter fox toy */}
                <Form.Group className="mb-3" controlId="age" onChange= {(e) => setFavoriteToy(e.target.value)}>
                    <Form.Label>Favorite Toy: </Form.Label>
                    <Form.Control type="text" placeholder= "Favorite toy"/>
                </Form.Group>

                {/* Enter persoanality */}
                <Form.Group className="mb-3" controlId="personality" onChange= {(e) => setPersonality(e.target.value)}>
                    <Form.Label>Personality: </Form.Label>
                    <Form.Control type="text" placeholder= "Enter personality"/>
                </Form.Group>

                {/* Enter fox personality */}
                <Form.Group className="fox-image" controlid="image_url" onChange= {(e) => setImage(e.target.value)}>
                    <Form.Label>Image: </Form.Label>
                    <Form.Control type="text" placeholder= "Show the floof"/>
                </Form.Group>

                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Register"
                    className="submit"
                />

            </Form>
        </Container>
    )
}

export default RegisterNewFox