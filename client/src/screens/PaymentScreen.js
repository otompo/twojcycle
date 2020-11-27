import React, { useState } from 'react'
import { Form, Button, Col, Card, Row, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if(!shippingAddress){
        history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')
//   const [city, setCity] = useState(shippingAddress.city)
  

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <Card className='my-5'>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col md={12}>
              <CheckoutSteps step1 step2 step3 />         
              </Col>
              <Col md={12}>
              
              <Card.Header><h1>Payment Method</h1></Card.Header>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
          <Form onSubmit={submitHandler}>
                  <Form.Group>
                      <Form.Label as='legend'>Select Method</Form.Label>     
                      <Col>
                      <ListGroup variant="flush">
                      <ListGroup.Item> </ListGroup.Item> 
                        <ListGroup.Item>
                        <Form.Check 
                              className='p-2'
                              type='radio' 
                              label='Pay or Credit Card'
                              id='PayPal' 
                              name='paymentMethod' 
                              value='PayPal' 
                              checked 
                              onChange={(e)=>setPaymentMethod(e.target.value)}>
                          </Form.Check>

                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Form.Check 
                          className='p-2'
                              type='radio' 
                              label='Stripe'
                              id='Stripe' 
                              name='paymentMethod' 
                              value='Stripe'               
                              onChange={(e)=>setPaymentMethod(e.target.value)}>
                          </Form.Check>
                        </ListGroup.Item>

                      <ListGroup.Item>
                      <Form.Check 
                              className='p-2'
                              type='radio' 
                              label='Mobile Money'
                              id='mobileMoney' 
                              name='paymentMethod' 
                              value='Mobile Money'               
                              onChange={(e)=>setPaymentMethod(e.target.value)}>
                          </Form.Check>
                       </ListGroup.Item>
                       <ListGroup.Item>
                       <Form.Check 
                              className='p-2'
                              type='radio' 
                              label='Pay on Delivery'
                              id='payonDelivery' 
                              name='paymentMethod' 
                              value='Pay on Delivery'               
                              onChange={(e)=>setPaymentMethod(e.target.value)}>
                          </Form.Check>
                          </ListGroup.Item>
                          <ListGroup.Item> </ListGroup.Item>                   
                         
                      </ListGroup>                 
              
                      </Col>   
                  </Form.Group>  
                      <Button type='submit' variant='success' block>
                          Continue
                      </Button>
                </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      
      
     
    </FormContainer>
  )
}

export default PaymentScreen
