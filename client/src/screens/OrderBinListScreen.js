import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listOrders} from '../actions/orderbinActions'


const PickupListScreen = ({history}) => {
    const dispatch = useDispatch()  

    const orderbinList = useSelector((state)=>state.orderbinList)
    const{loading, error, orderbins} =orderbinList
    
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
            <h1>Order Bins</h1>
           
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
            : (
                <Table striped responsive  hover bordered className='table-sm'>
                    <thead>
                        <tr>
                        <th>#</th>        
                        <th>CUSTOMER</th>        
                        <th>PHONE NUMBER</th>        
                        <th>BIN SIZE</th>        
                        <th>QTY</th>        
                        <th>LOCATION</th>        
                        <th>DATE</th>        
                        <th>PAYMENT METHOD</th>        
                        <th>PAID</th> 
                        <th>DELIVERED</th> 
                        <th>ACTIONS</th> 
                        </tr>       
                                            
                    </thead>
                    <tbody>
                        {orderbins.map((orderbin, count)=>(
                            
                            <tr key={orderbin._id}>   
                            <td>{count+1}</td>                                                          
                               <td>{orderbin.user && orderbin.user.name}</td>
                               <td>{orderbin.user && orderbin.user.phone}</td>
                               <td>{orderbin.binSize}</td>
                               <td>{orderbin.quantity}</td>
                               <td>{orderbin.locationAddress}</td>
                               <td>{orderbin.createdAt.substring(0,10)}</td>
                               <td>{orderbin.paymentMethod}</td>
                              
                               <td>{orderbin.isPaid
                                ? (<i className='fas fa-check' style={{color:'green'}}></i>)
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>{orderbin.isDelivered
                                ?(<i className='fas fa-check' style={{color:'green'}}></i>)
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>
                                <LinkContainer to={`/orderbins/${orderbin._id}`}>
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

export default PickupListScreen;