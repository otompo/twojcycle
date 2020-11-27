import React from 'react';
import {Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <>
        <Row className='service'>
           <Col md={4} >
               <Card className="mt-5">
               <Link to='/login'>
                <Card.Body className='feature-wrap'>
                    <Card.Title className='feature'>                    
                     <i className="fas fa-trash"></i> 
                    </Card.Title>                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>                   

                </Card.Body>
                    </Link>
                </Card>
           </Col>  
           <Col md={4}>
               <Card className="mt-5">
                    <Link to='/login'>
                        <Card.Body className='feature-wrap'>
                            <Card.Title className='feature'>                   
                            <i class="fas fa-leaf"></i>
                            </Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
           </Col>  
           <Col md={4}>
               <Card className="mt-5 ">
                    <Link to='/login'>
                        <Card.Body className='feature-wrap'>
                        <Card.Title className='feature'>                   
                            <i class="fab fa-first-order-alt"></i>
                            </Card.Title>                    
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {/* <Button variant="success">Login</Button> */}
                        </Card.Body>
                    </Link>
                </Card>
           </Col>  
           <Col md={4}>
               <Card className="mt-5">
                    <Link to='/login'>
                        <Card.Body className='feature-wrap'>
                        <Card.Title className='feature'>                   
                            <i class="fas fa-american-sign-language-interpreting"></i>
                            </Card.Title>            
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {/* <Button variant="success">Login</Button> */}
                        </Card.Body>
                    </Link>
                </Card>
           </Col>  
           <Col md={4}>
               <Card className="mt-5">
                    <Link to='/login'>
                <Card.Body className='feature-wrap'>
                   <Card.Title className='feature'>                   
                   <i class="fas fa-broom"></i>
                    </Card.Title>
             
                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
                    </Link>
                </Card>
           </Col>  
           <Col md={4}>
               <Card className="mt-5">
                    <Link to='/login'>
                <Card.Body className='feature-wrap'>
                   <Card.Title className='feature'>                   
                      <i class="fab fa-bitbucket"></i>
                    </Card.Title>                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                </Card.Body>
                    </Link>
                </Card>
           </Col>  
          
        </Row>
        </>
    );
};

export default Services;