import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listContacts} from '../actions/contactActions'


const ContactListScreen = ({history}) => {

    const dispatch = useDispatch()    

    const contactList = useSelector((state)=>state.contactList)
    const{loading, error, contacts} =contactList

    const userLogin = useSelector((state)=>state.userLogin)
    const{userInfo} =userLogin

  


    useEffect(()=>{  
              
            if(userInfo && userInfo.isAdmin){
                dispatch(listContacts())
            }else{
                history.push('/')
            }
    // eslint-disable-next-line 
    },[dispatch, history, userInfo])


    return (
        <>
            <h1>Messages</h1>
          
            
            {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
            : (
                <Table striped responsive  hover bordered className='table-sm'>
                    <thead>
                        <tr>
                        <th>#</th>        
                        <th>NAME</th>        
                        <th>EMAIL</th>      
                        <th>SUBJECT</th>              
                        <th>DATE SEND</th>        
                        {/* <th>PAYMENT METHOD</th>         */}
                        {/* <th>PAID</th> 
                        <th>DELIVERED</th>  */}
                        <th>ACTIONS</th>  
                        </tr>       
                                            
                    </thead>
                    <tbody>
                        {contacts.map((contact, count)=>(
                            <tr key={contact._id}>
                                    <td>{count+1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.emailAddress}</td>
                                    <td>{contact.subject}</td> 
                                    <td>{contact.createdAt.substring(0,10)}</td>                                  
                                    <td>
                                    <LinkContainer to={`/contacts/${contact._id}`}>
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

export default ContactListScreen;