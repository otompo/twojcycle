import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Col, Row, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Sidebar from '../components/Sidebar'
import medium from '../img/medium.png'
import double from '../img/double.png'
import large from '../img/large.png'
import {createPickup} from '../actions/pickupActions'
import Message from '../components/Message'
import {PICKUP_CREATE_RESET} from '../constants/pickupConstants'

const RequestPickupScreen = ({history}) => {
    const dispatch = useDispatch()

    const [locationAddress, setLocationAddress]=useState('')
    const [binSize, setBinSize] = useState('Large')
    const [paymentMethod, setPaymentMethod] = useState('Cash')
  
    const pickupCreate = useSelector((state)=>state.pickupCreate)
    const {order, success, error}=pickupCreate
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=>{
            if(!userInfo){
                 history.push('/')   
            }
            if(success){
               // alert('Review Submited!')               
                setLocationAddress('')
                dispatch({type:PICKUP_CREATE_RESET})
                // history.push(`/dashboard`)
            }
            // eslint-disable-next-line
        }, [userInfo,order, success,dispatch, history])

 const placeOrderHandler= (e)=>{
       e.preventDefault()
      dispatch(createPickup({
        locationAddress,
        binSize,
        paymentMethod,
      }))
    }

    return (
        
            <Row>
            <Col md={12} className="text-center">
            <h1>  </h1>
          
            </Col>
                <Col md={4} className='my-5'>
                    <Sidebar/>
                </Col>   

                <Col md={8}>
                    <FormContainer >
                        {/* <Card  style={{width:'100rem'}}> */}
                            <Card.Body>
                            <Card.Title className="text-center">{success && <Message variant='success' >Order Placed Successfully</Message>}</Card.Title>
                            
                            <Card.Text>
                            <Form  
                            className='pickupform'
                            onSubmit={placeOrderHandler}>
                            <>
                            <div className="dropdown-divider my-1"></div>
                            <h4 className='text-center lead' variant='flash'>Payment Method</h4>
                            <Row>                            
                               <Col md={5}>
                                    <Form.Group controlId='mobilemoney'>
                                    <Form.Check 
                                    className='p-2'
                                    type='radio' 
                                    label='Mobile Money'
                                    id='MobileMoney' 
                                    name='paymentmethod' 
                                    value='Mobile Money'                                     
                                    onChange={(e)=>setPaymentMethod(e.target.value)}>
                                 </Form.Check>
                                    </Form.Group>
                               </Col> 
                               <Col md={5}>
                                <Form.Group controlId='cash'>
                                <Form.Check 
                                    className='p-2'
                                    type='radio' 
                                    label='Cash on Pickup'
                                    id='Cash' 
                                    name='paymentmethod' 
                                    value='Cash'
                                    checked                                    
                                    onChange={(e)=>setPaymentMethod(e.target.value)}>
                                 </Form.Check>
                                </Form.Group>
                               </Col> 
                            </Row>
                            </>
                            <>
                            <div className="dropdown-divider my-4"></div>
                            <Row>
                                <Col md={12} >
                                    <Form.Group controlId='locationAddress'>
                                    <Form.Control
                                    type='text'
                                    placeholder='Enter Location'
                                    value={locationAddress}
                                    required
                                    onChange={(e) => setLocationAddress(e.target.value)}
                                ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            </>
                            <div className="dropdown-divider my-3"></div>
                            <Row>
                                <Col md={4}>                                
                                 <Form.Group controlId='double'>
                                 <Form.Check 
                                    className='p-2'
                                    type='radio' 
                                    label=''
                                    id='Double' 
                                    name='binsize' 
                                    value='Double'                                     
                                    onChange={(e)=>setBinSize(e.target.value)}>
                                 </Form.Check>
                                 </Form.Group>

                                 <Card className='text-center my-4'>
                                    <Card.Body>                                       
                                        <Card.Text>
                                        <Image  src={double} fluid  width='100' height='100' rounded/>
                                        </Card.Text>
                                        <Card.Title>
                                            Double Gh&#8373;(30 Monthly)
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                                {/* ************************************ */}
                                <Col md={4}>
                               
                                <Form.Group controlId='large'>
                                <Form.Check 
                                    className='p-2'
                                    type='radio' 
                                    label=''
                                    id='Large' 
                                    name='binsize' 
                                    value='Large' 
                                    checked 
                                    onChange={(e)=>setBinSize(e.target.value)}>
                                 </Form.Check>
                                </Form.Group>
                                 <Card className='text-center my-4'>
                                    <Card.Body>                                       
                                        <Card.Text>
                                        <Image  src={large} fluid  width='100' height='100' rounded/>
                                        </Card.Text>
                                        <Card.Title>
                                            Large Gh&#8373;(25 Monthly)
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                                {/* ************************************ */}
                                <Col md={4}>
                                    <Form.Group controlId='medium'>                                        
                                    <Form.Check 
                                        className='p-2'
                                        type='radio' 
                                        label=''
                                        id='Medium' 
                                        name='binsize' 
                                        value='Medium'
                                    
                                        onChange={(e)=>setBinSize(e.target.value)}>
                                    </Form.Check>
                                    </Form.Group>
                                 <Card  className='text-center my-4'>
                                    <Card.Body>                                       
                                        <Card.Text>
                                        <Image  src={medium} fluid  width='100' height='100' rounded/>
                                        </Card.Text>
                                        <Card.Title>
                                            Medium Gh&#8373;(20 Monthly)
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                                {/* ************************************ */}
                            </Row>
             
                          
                                {error && <Message variant='danger'>{error}</Message>}
                         
                            <Button 
                               type='submit' 
                               variant='success'                               
                               block>
                                Place Order
                            </Button>
                        </Form>
                            </Card.Text>
                            
                            </Card.Body>
                        {/* </Card> */}
                    </FormContainer>
                    
                </Col>           
            </Row>
    );
};

export default RequestPickupScreen;