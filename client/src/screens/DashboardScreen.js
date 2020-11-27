import React, {useEffect} from 'react';
import {Row, Col, Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import Meta from '../components/Meta';


const DashboardScreen = ({history}) => {
           

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(()=>{
            if(!userInfo){
                 history.push('/')   
            }

    }, [userInfo, history])



    return (
        <>
        <Meta title='2JCycle | Dashboard'/>
            <Row >
                 
                <Col md={4} className='my-5'>
                   <Sidebar/>
                </Col>
                     
                {/* ******************************* */}
                <Col  md={8} className='feature' >
                 <Row>
                    <Col md={4} className='py-5'>
                     <Link to='/requestpickup'>
                        <Card bg="success">
                            <Card.Body className='feature-wrap'>                            
                                <i className="fas fa-trash"></i>
                            </Card.Body>
                            <Card.Title>
                                Request a Pick up
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                    <Col md={4} className='py-5'>
                     <Link to='/reportpickup'>
                        <Card bg="success">
                            <Card.Body className='feature-wrap'>                            
                            <i class="fas fa-leaf"></i>
                            </Card.Body>
                            <Card.Title>
                               Report Clogged Dustbin
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                    <Col md={4} className='py-5'>
                     <Link to='/orderbin'>
                        <Card bg="success">
                            <Card.Body className='feature-wrap'>                            
                            <i class="fab fa-first-order-alt"></i>
                            </Card.Body>
                            <Card.Title>
                                 Order for bin
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                    {/* ************************ */}
                    <Col md={4} className='py-5'>
                     <Link>
                        <Card bg="success">
                            <Card.Body className='feature-wrap'>                            
                            <i class="fas fa-american-sign-language-interpreting"></i>
                            </Card.Body>
                            <Card.Title>
                                  My Referral 
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                    <Col md={4} className='py-5'>
                     <Link>
                        <Card bg="success">
                            <Card.Body className='feature-wrap'>                            
                            <i class="fas fa-broom"></i>
                            </Card.Body>
                            <Card.Title>
                            Commercial Cleaning
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                    <Col md={4} className='py-5'>
                     <Link>
                        <Card bg="success">
                            <Card.Body className='feature-wrap'>                            
                            <i class="fab fa-bitbucket"></i>
                            </Card.Body>
                            <Card.Title>
                            Community cleanup Exercise
                            </Card.Title>
                        </Card>
                     </Link>
                    </Col>
                 </Row>
                
                     
                </Col>
            </Row>
        </>
    );
};

export default DashboardScreen;