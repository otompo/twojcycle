import React from 'react';
import {Row, Col, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import profile from '../../src/img/profile.png'
import profile1 from '../../src/img/profile1.png'


const About = () => {
    return (
        <Row>
           <Col md={12}>
               <h1 className='text-center'>The Team</h1>
           </Col>
           
            <Col md={6}>
               {/* <Card  > */}
                <Image variant="top" src={profile} fluid  className='profile_image'/>               
                {/* </Card> */}
            </Col>
            <Col md={6}>
              <Row>
                  <Col md={12}>
                     <h1>Okyem Joseph</h1>
                  </Col>
                  <Col md={12}>
                  <article>                    
                   <h4> Co-founder | Product Owner</h4>
                   <p>
                                        
                    Okyem Joseph is responsible for all digital and technology functions for the company.
                    This includes e-commerce and online self-service, information technology 
                    and advanced analytics and data management.


                   </p>
                </article>
                   <Row className='my-2 social'>
                        <Col md={3}>
                        <Link to={{pathname: "https://web.facebook.com/okyem.kwesi"}} target="_blank" >
                            <i class="fab fa-facebook-f"></i>
                         </Link>
                        </Col>
                        <Col md={3}>
                        <Link to={{pathname: "https://twitter.com/KwesiOkyem"}} target="_blank" >
                        <i class="fab fa-twitter"></i>
                        </Link>
                        </Col>
                        <Col md={3}>
                        <Link to={{pathname: "https://www.instagram.com/okyemkwesi/"}} target="_blank" >
                            <i class="fab fa-instagram"></i>
                        </Link>
                        </Col>
                    </Row>
                  </Col>
              </Row>
               
            </Col>
            <Col md={6}>
               {/* <Card > */}
                <Image variant="top" src={profile1} fluid className='profile_image'  />               
                {/* </Card> */}
            </Col>
            <Col md={6}>
              <Row>
                  <Col md={12}>
                     <h1> Jennifer Baffoe </h1>
                  </Col>
                  <Col md={12}>
                  <article>                    
                     <h4>Co-founder | Business Owner</h4>
                   <p>
                                        
                    As Business Owner for 2J Cycle, Baffoe Jennifer leads the customer experience,
                    sales, marketing, revenue management, and sustainability services organizations 
                    of the company. Responsible for the company’s profitable growth strategy across 
                    all sales channels.
                   </p>
                   </article>
                   <Row className='my-2 social'>
                        <Col md={3}>
                        <Link to={{pathname: "https://www.facebook.com/jennibel.baffoe.3"}} target="_blank" >
                            <i class="fab fa-facebook-f"></i>
                         </Link>
                        </Col>
                        <Col md={3}>
                        <Link to={{pathname: "https://web.facebook.com/okyem.kwesi"}} target="_blank" >
                        <i class="fab fa-twitter"></i>
                        </Link>
                        </Col>
                        <Col md={3}>
                        <Link to={{pathname: "https://web.facebook.com/okyem.kwesi"}} target="_blank" >
                            <i class="fab fa-instagram"></i>
                        </Link>
                        </Col>
                    </Row>
                  </Col>
              </Row>
            </Col>          
        </Row>
    );
};

export default About;