import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Sidebar from '../components/Sidebar'
import {createReport} from '../actions/reportbinActoins'
import Message from '../components/Message'
import {REPORT_CREATE_RESET} from '../constants/reportbinConstants'

const ReportPickupScreen = ({history}) => {
    const dispatch = useDispatch()

    const [locationAddress, setLocationAddress]=useState('')
    const [reportMethod, setReportMethod] = useState('') 

    const reportCreate = useSelector((state)=>state.reportCreate)
    const {reportbin, success, error}=reportCreate
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=>{
            if(!userInfo){
                 history.push('/')   
            }
            if(success){
               // alert('Review Submited!')               
                setLocationAddress('')
                dispatch({type:REPORT_CREATE_RESET})
                // history.push(`/dashboard`)
            }            
            // eslint-disable-next-line
        }, [userInfo, reportbin, success,dispatch, history])

 const placeReportHandler= (e)=>{
       e.preventDefault()
      dispatch(createReport({
        locationAddress,
        reportMethod,
      }))
    }

    return (        
            <Row>
            {/* <Col md={12} className="text-center">
            <h1>  </h1>
          
            </Col> */}
                <Col md={4} className='my-5'>
                    <Sidebar/>
                </Col>   

                <Col md={8}>
                    <FormContainer >
                        {/* <Card  style={{width:'100rem'}}> */}
                            <Card.Body>
                            <Card.Title className="text-center">{success && <Message variant='success' >Report Sent Successfully</Message>}</Card.Title>
                            
                            <Card.Text>
                            <Form  
                            className='pickupform'
                            onSubmit={placeReportHandler}>
                            <>
                            <div className="dropdown-divider my-1"></div>
                            <h3 className='text-center' variant='flash'>Select an Option to Report on</h3>
                            <div className="dropdown-divider my-4"></div>
                            <Row>                            
                               <Col md={4}>
                               <Form.Group controlId='overflowingdustbin'>
                                <Form.Check                                     
                                    type='radio' 
                                    id='Overflowingdustbin' 
                                    name='reportmethod' 
                                    value='OverFlowing Dustbin'                                                                      
                                    onChange={(e)=>setReportMethod(e.target.value)}>
                                 </Form.Check>
                                </Form.Group>   
                               </Col>
                               <Col md={8} className='mt-3'><h5> Report OverFlowing Dustbin</h5></Col>                              
                            </Row>
                            <div className="dropdown-divider my-4"></div>
                            <Row>
                                <Col md={4}>
                                <Form.Group controlId='dustbinnotpicked'>
                                <Form.Check                                     
                                    type='radio' 
                                    id='dustbinnotpicked' 
                                    name='reportmethod' 
                                    value='Dustbin not Picked'                                                                      
                                    onChange={(e)=>setReportMethod(e.target.value)}>
                                 </Form.Check>
                                </Form.Group>                             
                                </Col>                         
                               <Col md={8} className='mt-3'><h5> Report Dustbin not Picked</h5></Col>                              
                            </Row>
                            </>
                            <>
                            <div className="dropdown-divider my-4"></div>
                            <Row>
                                <Col md={12} >
                                    <Form.Group controlId='locationAddress'>
                                    <Form.Control
                                    style={{height:'50px'}}
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
                                       
                            {error && <Message variant='danger'>{error}</Message>}
                         
                            <Button 
                               type='submit' 
                               variant='success'                               
                               block>
                               REPORT
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

export default ReportPickupScreen;