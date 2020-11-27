import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Form, Card, Row, Col, Button, Container} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {createContact} from '../actions/contactActions'

import Message from './Message'
import {CONTACT_CREATE_RESET} from '../constants/contactConstants'


const Contact = ({history}) => {
    const dispatch = useDispatch()

    const [name, setName]=useState('')
    const [emailAddress, setemailAddress]=useState('')
    const [subject, setSubject]=useState('')
    const [messageBody, setMessageBody] = useState('') 

    const contactCreate = useSelector((state)=>state.contactCreate)
    const {contact, success, error}=contactCreate


    useEffect(()=>{
         if(success){              
           setName('')
           setemailAddress('')
           setSubject('')
           setMessageBody('')
           dispatch({type:CONTACT_CREATE_RESET})
        }            
}, [success, contact, dispatch, history])

const placeReportHandler= (e)=>{
   e.preventDefault()
  dispatch(createContact({
    name,
    emailAddress,
    subject,
    messageBody
  }))
}

    return (
        <Container fluid="md" style={{marginTop:'15px'}}>
            <Row>
             <Col md={6} className='my-5'>
                <h2>Get in Touch</h2>
                <p>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. Dignissimos 
                harum corporis fuga corrupti. Doloribus quis
                 soluta nesciunt veritatis vitae nobis?</p>
                 <Row>
                     <Col md={3}>
                     <i class="fas fa-phone-alt"></i>
                     </Col>
                     <Col md={9}>
                        <h2>Call Numbers</h2>                        
                        <p>(+233): 0245789654 </p>                     
                     </Col>
                     <Col md={3}>
                     <i class="fas fa-map-marker-alt"></i>
                     </Col>
                     <Col md={9}>
                        <h2>Location</h2>                        
                        <p> Sunyani Ghana </p>                     
                     </Col>
                     <Col md={3}>
                     <i class="fas fa-envelope"></i>
                     </Col>
                     <Col md={9}>
                        <h2>Email</h2>                        
                        <p> abc@gmail.com </p>                     
                     </Col>
                    
                 </Row>
             </Col>
                <Col md={6} className='my-5'>
                <FormContainer >
                    <Card style={{width:'35rem'}}>
                        <Card.Body>
                        <Card.Title>
                        {success && <Message variant='success'>Message Send Successfully</Message>}                            
                        <h2>Mesage Us</h2>
                        </Card.Title>
                            <Form onSubmit={placeReportHandler}>
                                <Row>
                                    <Col md={6}>
                                    <Form.Group>                               
                                        <Form.Control 
                                        style={{height:'40px'}}
                                            type='text'
                                            placeholder='Enter Name'
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)}                               
                                        ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group controlId='emailAddress'>                                
                                        <Form.Control
                                        style={{height:'40px'}}                                           
                                            type='text'
                                            placeholder='Enter Email'
                                            value={emailAddress}
                                            required
                                            onChange={(e) => setemailAddress(e.target.value)}                              
                                        ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                
                                <Form.Control 
                                style={{height:'40px'}}
                                    type='text'
                                    placeholder='Enter Subject'
                                    value={subject}
                                    required
                                    onChange={(e) => setSubject(e.target.value)}                                
                                ></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                
                                <Form.Control 
                                as='textarea'
                                type='text'                                
                                placeholder='Enter Message'
                                rows="5" 
                                value={messageBody}
                                required
                                onChange={(e) => setMessageBody(e.target.value)}                               
                                ></Form.Control>
                                </Form.Group>
                                {error && <Message variant='danger'>{error}</Message>}
                                <Button type="submit" className="btn btn-success" block>Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </FormContainer>


                </Col>
            </Row>
        </Container>
    );
};

export default Contact;