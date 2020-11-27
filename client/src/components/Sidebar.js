import React from 'react';
import {ListGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import Message from './Message';

const Sidebar = () => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, error } = userLogin


    const dispatch=useDispatch()
        const logoutHandler =()=>{
            dispatch(logout())
        }
    return (
        <>                         
              <ListGroup className="sidebar" style={{height:'100vh', backgroundColor:'black'}}>
              {userInfo ? (
                <Link to='/profile' id='username'>
                        <ListGroup.Item variant='success'>                        
                           <i className="fas fa-user"> </i> {userInfo.name}
                           {/* <Button className='m-2' variant='light'>Edit Profile </Button> */}
                        </ListGroup.Item>
                </Link>
              ):(
                  <Message>{error}</Message>
              )}
                    
                    <Link to='/myrefeerals'>
                        <ListGroup.Item variant='success'>
                        <i className="fas fa-hand-holding-usd"></i> My referral earnings 
                        </ListGroup.Item>
                    </Link>
                    <Link to='/allblogs'>
                        <ListGroup.Item variant='success'>
                        <i className="far fa-lightbulb"></i> Proper Waste Management Tips
                        </ListGroup.Item>
                    </Link>
                    <Link to='/allblogs'>
                        <ListGroup.Item variant='success'>
                        <i className="fas fa-recycle"></i> Recycle Tips
                        </ListGroup.Item>  
                    </Link>  
                    <Link>      
                        <ListGroup.Item variant='success' onClick={logoutHandler}>
                        <i className="fas fa-power-off"></i> Log out
                        </ListGroup.Item>
                    </Link>
                 </ListGroup>                     
                
         
        </>
    );
};

export default Sidebar;