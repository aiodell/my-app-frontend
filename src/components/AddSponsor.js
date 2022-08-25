import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


function AddSponsor({ onSponsorUpdate, sponsors }){
    const [ fox, setFox ] = useState([])
    const [formData, setFormData] = useState({ })

    let { id } = useParams();

    // obtain fox data
    useEffect( () => {
    fetch(`http://localhost:9292/foxes/${ id }`)
      .then( res => res.json() )
      .then( fox => { setFox(fox)} )
    }, [ id ])

    // map through the sponsor's names
    const sponsor_name = sponsors.map(( sponsor ) => {
        const name = sponsor.name
        return( <option key={ sponsor.id } value={ sponsor.id }>{ name }</option> )
    })

    function handleNewSponsor(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/foxes/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(res => res.json() )
        .then( addedSponsor => {
            console.log(addedSponsor);
        })
        console.log(formData)
    }

    function handleUpdate(e){ setFormData({...formData, [e.target.id] : e.target.value }) }

    return(
        <Container>
            <h1>Choose {fox.name}'s Sponsor!</h1>
            <Form onSubmit= { handleNewSponsor }></Form>
                <Form.Group controlId="sponsor_id" onChange={ handleUpdate }>
                    <Form.Select>
                    <option value="None">Choose Sponsor</option>
                    { sponsor_name }
                    </Form.Select>
                </Form.Group>
            <br />
            <Button type= "submit" className= "submit">Sponsor Fox</Button>
        </Container>
    )
}

export default AddSponsor;