import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listOrders} from '../actions/orderActions'


const OrderListScreen = ({history}) => {

    const dispatch = useDispatch()
    
    const orderList = useSelector((state)=>state.orderList)
    const{loading, error, orders} =orderList

    const userLogin = useSelector((state)=>state.userLogin)
    const{userInfo} =userLogin

   


    useEffect(()=>{  
              
            if(userInfo && userInfo.isAdmin){
                dispatch(listOrders())
            }else{
                history.push('/')
            }
    
    },[dispatch, history, userInfo])


    return (
        <>
            <h1>Orders</h1>
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
            : (
                <Table striped responsive  hover bordered className='table-sm'>
                    <thead>
                        <tr>
                        <th>#</th>        
                        <th>ID</th>        
                        <th>USER</th>        
                        <th>DATE</th>        
                        <th>TOTAL</th>        
                        <th>PAID</th> 
                        <th>DELIVERED</th> 
                        <th>ACTIONS</th> 
                        </tr>       
                                            
                    </thead>
                    <tbody>
                        {orders.map((order, counter)=>(
                            <tr key={order._id}>
                               <td>{counter+1}</td>
                               <td>{order._id}</td>
                               <td>{order.user && order.user.name}</td>
                               <td>{order.createdAt.substring(0,10)}</td>
                               <td>Gh&#8373;{order.totalPrice}</td>
                              
                               <td>{order.isPaid
                                ?(order.paidAt.substring(0,10))
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>{order.isDelivered
                                ?(order.deliveredAt.substring(0,10))
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>

                                <LinkContainer to={`/orders/${order._id}`}>
                                    <Button variant='success' className='btn-sm' onClick='details'>
                                    DETAILS <i className='fas fa-eye'></i>
                                    </Button>
                                </LinkContainer>
                               
                               </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};

export default OrderListScreen;