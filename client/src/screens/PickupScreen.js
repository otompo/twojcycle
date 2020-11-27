import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  getPickupsDetails,
  deliverPickup  
} from '../actions/pickupActions'

import {  
  PICKUP_DELIVERED_RESET
} from '../constants/pickupConstants'

const PickupScreen = ({ match, history }) => {
const pickupId = match.params.id

  //const [sdkReady, setSdkReady] = useState(false)
  const dispatch = useDispatch()

  const pickupDetails = useSelector((state) => state.pickupDetails)
  const { pickup, loading, error } = pickupDetails

//   const orderPay = useSelector((state) => state.orderPay)
//   const { loading: loadingPay, success: successPay } = orderPay

  const pickupDeliver = useSelector((state) => state.pickupDeliver)
  const { loading: loadingDeliver, success: successDeliver } = pickupDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
       // eslint-disable-next-line
    }

    // const addPayPalScript = async () => {
    //   const { data: clientId } = await axios.get('/api/config/paypal')
    //   const script = document.createElement('script')
    //   script.type = 'text/javascript'
    //   script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    //   script.async = true
    //   script.onload = () => {
    //     setSdkReady(true)
    //   }
    //   document.body.appendChild(script)
    // }

    if (!pickup  || successDeliver) {
    //   dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: PICKUP_DELIVERED_RESET })
      dispatch(getPickupsDetails(pickupId))
      
    }
    
  }, [dispatch, history, userInfo, pickupId, successDeliver, pickup])

//   const successPaymentHandler = (paymentResult) => {
//     console.log(paymentResult)
//     dispatch(payOrder(orderId, paymentResult))
//   }

  const deliverHandler = () => {
    dispatch(deliverPickup(pickup))

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

      <Link to='/admin/pickuplist' className='btn btn-success my-3'>Back</Link>
              )}

      </Col>
      </Row>
      <h1>Pickup ID: {pickup._id}</h1>
      <Row>
        <Col md={8}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {pickup.user.name}
              </p>
              <p>
                <strong>Phone: </strong>{' '}
                <a href={`tel:${pickup.user.phone}`}> {pickup.user.phone}</a>
              </p>             
              <p>
                <strong>Bin Size: </strong>{' '}
                {pickup.binSize}
              </p>             
              <p>
                <strong>Address:</strong>
                <a href={`mailto:${pickup.user.email}`}> {pickup.locationAddress}</a>
                
              </p>
              {pickup.isDelivered ? (
                <Message variant='success'>
                  Delivered
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {pickup.paymentMethod}
              </p>
              {pickup.isPaid ? (
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
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PickupScreen
