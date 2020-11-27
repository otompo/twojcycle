import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { pickupMyOrders } from '../actions/pickupActions'
import {USER_UPDATE_PROFILE_RESET} from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
  const[name, setName]= useState('')
    // const[email, setEmail]= useState('')
    const[phone, setPhone]= useState('')
    const[password, setPassword]= useState('')
    const[confirmPassword, setConfirmPassword]= useState('')
    const[message, setMessage]= useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const pickupListMy = useSelector((state) => state.pickupListMy)
  const { loading: loadingOrders, error: errorOrders, pickups } = pickupListMy


  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (!user || !user.name || success) {
        dispatch({type:USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails('profile'))
        dispatch(pickupMyOrders())
    
      } else {
        setName(user.name)
        setPhone(user.phone)
      }
    }
    // eslint-disable-next-line
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, phone, password }))
    }
  }

  return (
    <>
    <Row  >
      <Col md={4} className='my-5'>
        <Card >
          <Card.Body>
            <Card.Title>
              <h2>User Profile</h2>
            </Card.Title>
            <Card.Text>
            {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {/* {loading && <Loader />} */}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="phone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder='Enter Phone' 
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    ></Form.Control>
                </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' className='btn btn-success' size='lg' block>
            Update
          </Button>
        </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      
      </Col>
      <Col md={8} className='my-5'>
        <h2>My Pickups</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>DATE</th>                
                <th>LOCATION</th>
                <th>DELIVERED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {pickups.map((pickup, counter) => (
                <tr key={pickup._id}>
                  <td>{counter+1}</td>
                  <td>{pickup._id}</td>
                  <td>{pickup.createdAt.substring(0, 10)}</td>
                  <td>{pickup.locationAddress}</td>
                 
                  {/* <td>
                    {pickup.isPaid ? "Yes" : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td> */}
                  <td>
                    {pickup.isDelivered ? "Yes" : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/pickups/${pickup._id}`}>
                      <Button className='btn btn-sm' variant='info' onClick='details'>
                        Details <i className='fas fa-eye'></i> 
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
   
    </>
  )
}

export default ProfileScreen
