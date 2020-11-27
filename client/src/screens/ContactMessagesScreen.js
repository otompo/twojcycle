import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  getContactsDetails,
} from '../actions/contactActions'


const ContactMessagesScreen = ({ match, history }) => {

const contactId = match.params.id

const dispatch = useDispatch()
  const contactDetails = useSelector((state) => state.contactDetails)
  const { contact, loading, error } = contactDetails
  
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
       // eslint-disable-next-line
  }
     
    dispatch(getContactsDetails(contactId))    
  }, [dispatch, history, userInfo, contactId])






  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Row>
      <Col md={6}>
      <Link to='/admin/contactlist' className='btn btn-success my-3'>Back</Link>

      </Col>
      </Row>
      <h1>Message ID: {contact._id}</h1>
      <Row>
        <Col md={8}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Message Details</h2>           
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Name: </strong>
                {contact.name}
              </p>             
            
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Email Address: </strong><br/>                
                <a href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</a>
              </p>             
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Subject:</strong><br/>
                  {contact.subject}
              </p>
            </ListGroup.Item>
                      
              
                            
                  <Card>
                  <Card.Body>
                    <Card.Title> <strong>Message Body:</strong></Card.Title>
                    <Card.Text>
                    {contact.messageBody}
                    </Card.Text>
                    <a href={`mailto:${contact.emailAddress}`}>
                        <Button variant="success">Replay</Button>
                    </a>
                  </Card.Body>
                </Card>
           
              {/* {pickup.isDelivered ? (
                <Message variant='success'>
                  Delivered
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )} */}
                  
        </ListGroup>



        </Col>
        <Col md={4}>
       <Card>
            {/* <ListGroup variant='flush'>         
            {loadingDeliver && <Loader />}
            {userInfo &&
              userInfo.isAdmin &&
              pickup.isPaid &&
              !pickup.isDelivered && (
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn btn-success'
                    block
                    onClick={deliverHandler}
                  >
                    Mark As Delivered
                  </Button>
                </ListGroup.Item>
              )}
            </ListGroup> */}
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ContactMessagesScreen
