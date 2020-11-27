import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
   getOrderbinsDetails,
   deliverOrderbins  
} from '../actions/orderbinActions'

import {  
  ORDERBIN_DELIVERED_RESET
} from '../constants/orderbinConstants'

const PickupScreen = ({ match, history }) => {
const orderbinId = match.params.id

  //const [sdkReady, setSdkReady] = useState(false)
  const dispatch = useDispatch()

  const orderbinDetails = useSelector((state) => state.orderbinDetails)
  const { orderbin, loading, error } = orderbinDetails

//   const orderPay = useSelector((state) => state.orderPay)
//   const { loading: loadingPay, success: successPay } = orderPay

  const orderbinDeliver = useSelector((state) => state.orderbinDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderbinDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
       // eslint-disable-next-line
    }


    if (!orderbin  || successDeliver) {
    //   dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDERBIN_DELIVERED_RESET })
      dispatch(getOrderbinsDetails(orderbinId))
      
    }
    
  }, [dispatch, history, userInfo, orderbinId, successDeliver, orderbin])



  const deliverHandler = () => {
    dispatch(deliverOrderbins(orderbin))

   // history.push('/admin/pickuplist')
    //dispatch({ type: PICKUP_DELIVERED_RESET })
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Row>
      <Col md={6}>
            {userInfo &&
              userInfo.isAdmin &&(
             <Link to='/admin/orderbinlist' className='btn btn-success my-3'>Back</Link>
            )}
     
      </Col>
      </Row>
      <h1>Orderbin ID: {orderbin._id}</h1>
      <Row>
        <Col md={8}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {orderbin.user.name}
              </p>
              <p>
                <strong>Phone: </strong>
                <a href={`tel:${orderbin.user.phone}`}> {orderbin.user.phone}</a>
              </p>             
                          
              <p>
                <strong>Location Address:</strong>
                 {orderbin.locationAddress}
                
              </p>
              {orderbin.isDelivered ? (
                <Message variant='success'>
                  Delivered
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
            <p>
                <strong>Bin Size: </strong>
                {orderbin.binSize}
              </p> 
            </ListGroup.Item>
            <ListGroup.Item>
              <p>
                <strong>Quantity: </strong>
                {orderbin.quantity}
              </p> 
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {orderbin.paymentMethod}
              </p>
              {orderbin.isPaid ? (
                <Message variant='success'>Paid</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>

            
        </ListGroup>



        </Col>
        <Col md={4}>
       <Card>
            <ListGroup variant='flush'>         
            {loadingDeliver && <Loader />}
            {userInfo &&
              userInfo.isAdmin &&
              orderbin.isPaid &&
              !orderbin.isDelivered && (
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
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PickupScreen
