import React, {useEffect} from 'react'
//import {LinkContainer} from 'react-router-bootstrap'
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listPickups} from '../actions/reportbinActoins'


const ReportListScreen = ({history}) => {

    const dispatch = useDispatch()
    
    const reportList = useSelector((state)=>state.reportList)
    const{loading, error, reports} =reportList

    const userLogin = useSelector((state)=>state.userLogin)
    const{userInfo} =userLogin

  


    useEffect(()=>{  
              
            if(userInfo && userInfo.isAdmin){
                dispatch(listPickups())
            }else{
                history.push('/')
            }
    // eslint-disable-next-line 
    },[dispatch, history, userInfo])


    return (
        <>
            <h1>Reports</h1>
           
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
            : (
                <Table striped responsive  hover bordered className='table-sm'>
                    <thead>
                        <tr>
                        <th>#</th>        
                        <th>CUSTOMER</th>        
                        <th>PHONE NUMBER</th>      
                        <th>LOCATION</th>        
                        <th>REPORTS</th>        
                        <th>DATE</th>        
                        {/* <th>PAYMENT METHOD</th>         */}
                        {/* <th>PAID</th> 
                        <th>DELIVERED</th> 
                        <th>ACTIONS</th>  */}
                        </tr>       
                                            
                    </thead>
                    <tbody>
                        {reports.map((report, count)=>(
                            
                            <tr key={report._id}>   
                            <td>{count+1}</td>                                                          
                               <td>{report.user && report.user.name}</td>
                               <td>{report.user && report.user.phone}</td>                               
                               <td>{report.locationAddress}</td>
                               <td>{report.reportMethod}</td>
                               <td>{report.createdAt.substring(0,10)}</td>
                               {/* <td>{report.paymentMethod}</td> */}
                              
                               {/* <td>{report.isPaid
                                ? (<i className='fas fa-check' style={{color:'green'}}></i>)
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td>
                               <td>{report.isDelivered
                                ?(<i className='fas fa-check' style={{color:'green'}}></i>)
                               : (<i className='fas fa-times' style={{color:'red'}}></i>)}
                               </td> */}
                               {/* <td>
                                <LinkContainer to={`/reports/${report._id}`}>
                                    <Button variant='success' className='btn-sm' onClick='details'>
                                    DETAILS <i className='fas fa-eye'></i>
                                    </Button>
                                </LinkContainer>
                               
                               </td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};

export default ReportListScreen;