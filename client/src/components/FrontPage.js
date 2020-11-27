import React from 'react'
import { Link  } from 'react-router-dom';
import {Row, Col, Button} from 'react-bootstrap'
import Typical from 'react-typical'
import Slider from './Slider';

const FrontPage = () => {
    return (
        
            <>
        <Row  className='frontpage'>
       
            <Col sm={6}  md={6} className='d-flex align-items-center justify-content-center  '>
                <Slider />
            </Col>

            <Col md={6} className='d-flex align-items-center justify-content-center animate_text'>
                <Row>
                    <Col md={6} className=''>
                    <h3 className='info_text'>         
                     Ready to begin your journey with us?                                        
                    </h3>
                    {/* <p ></p> */}
                    <Typical
                        steps={['Hello', 1000, 'Just a click away', 500]}
                        loop={Infinity}
                        wrapper="p"
                        className='text-center'                       
                    />
                    </Col>
                    <Col md={6}>
                     <Link to='/login'>                         
                        <Button variant="warning" size="lg" className='mt-5 button_signup' block>
                            SIGN-UP
                        </Button>
                     </Link>

                    </Col>
                </Row>
            </Col>
            
        </Row>
       </>
    );
};

export default FrontPage;