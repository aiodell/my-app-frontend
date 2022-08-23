import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

function RegisterNewFox({ addFox, foxes }) {
    const [foxData, setFoxData] = useState({ });

    // submit the fox information
    const handleSubmit = (e) => {
        e.preventDefault();

          fetch("http://localhost:9292/foxes",{
          method : "POST",
          headers : { "Content-Type" : "application/json"},
          body : JSON.stringify(foxData)
        })
        .then(resp => resp.json())
        .then((foxData) => {
          addFox(foxData);
          setFoxData({ });
          e.target.reset();
        })
    }

    // handle change 
    function handleChange(e){
      setFoxData({
        ...foxData,
        [e.target.id] : e.target.value
      })
    }

    const personalityDropDown = foxes.map( fox => {
        const personality = fox.personality;

        return(
            <option key ={ personality } value={ personality }>{ personality }</option>
        )
    })

    return(
        <Container>
            <h1>Register A New Fox Buddy!</h1>
            <Form onSubmit = { handleSubmit }>

                {/* Enter fox name */}
                <Form.Group className="fox-name" controlID="name" onChange = { handleChange }>
                    <Form.Label>Fox Name</Form.Label>
                    <Form.Control type="text" placeholder= "Fox name"/>
                </Form.Group>

                {/* Enter fox age */}
                <Form.Group className="fox-age" controlID="age" onChange = { handleChange }>
                    <Form.Label>Fox Name</Form.Label>
                    <Form.Control type="number" placeholder= "Fox age"/>
                </Form.Group>

                {/* Enter fox toy */}
                <Form.Group className="fox-fav-toy" controlID="favorite_toy" onChange = { handleChange }>
                    <Form.Label>Fox Name</Form.Label>
                    <Form.Control type="text" placeholder= "Favorite toy"/>
                </Form.Group>

                {/* Enter fox personality and add drop down to maintain uniform personality */}
                <Form.Group className="personality" controlID="personality" onChange = { handleChange }>
                    <Form.Label>Fox Name</Form.Label>
                    <Form.Select>
                        <option>Personality</option>
                        { personalityDropDown }
                    </Form.Select>
                    <Form.Control type="text" placeholder= "Personality"/>
                </Form.Group>

                {/* Enter fox personality */}
                <Form.Group className="fox-name" controlID="name" onChange = { handleChange }>
                    <Form.Label>Fox Name</Form.Label>
                    <Form.Control type="text" placeholder= "Fox name"/>
                </Form.Group>

                <Form.Group className="fox-name" controlID="name" onChange = { handleChange }>
                    <Form.Label>Fox Name</Form.Label>
                    <Form.Control type="text" placeholder= "Fox name"/>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default RegisterNewFox