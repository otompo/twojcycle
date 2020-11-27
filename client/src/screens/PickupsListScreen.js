import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listPickups} from '../actions/pickupActions'


const PickupListScreen = ({history}) => {

    const dispatch = useDispatch()  

    const pickupList = useSelector((state)=>state.pickupList)
    const{loading, error, pickups} =pickupList
    
    const userLogin = useSelector((state)=>state.userLogin)
    const{userInfo} =userLogin

  useEffect(()=>{  
              
            if(userInfo && userInfo.isAdmin){
                dispatch(listPickups())
            }else{
                history.push('/')
            }
    
    },[dispatch, history, userInfo])


    return (
        <>
            <h1>Pickups</h1>
           
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
            : (
                <Table striped responsive  hover bordered className='table-sm'>
                    <thead>
                        <tr>
                        <th>#</th>        
                        <th>CUSTOMER</th>        
                        <th>PHONE NUMBER</th>        
                        <th>BIN SIZE</th>        
                        <th>LOCATION</th>        
                        <th>DATE</th>        
                        <th>PAYMENT METHOD</th>        
                        <th>PAID</th> 
                        <th>DELIVERED</th> 
                        <th>ACTIONS</th> 
                        </tr>       
                                            
                    </thead>
                    <tbody>
                        {pickups.map((pickup, count)=>(
                            
                            <tr key={pickup._id}>   
                            <td>{count+1}</td>                                                          
                               <td>{pickup.user && pickup.user.name}</td>
                               <td>{pickup.user && pickup.user.phone}</td>
                               <td>{pickup.binSize}</td>
                               <td>{pickup.locationAddress}</td>
                               <td>{pickup.createdAt.substring(0,10)}</td>
                               <td>{pickup.paymentMethod}</td>
                              
                               <td>{pickup.isPaid
                                ? (<i className='fas fa-check' style={{color:'green'}}></i>)
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>{pickup.isDelivered
                                ?(<i className='fas fa-check' style={{color:'green'}}></i>)
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>
                                <LinkContainer to={`/pickups/${pickup._id}`}>
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