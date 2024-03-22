import React from 'react'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faLocationDot,faClock,faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
const SubHeader = () => {
  return (
    <div>
              <div>
            <div>
                <Container className='TopHeader' fluid >
                    <Row className='TopRow'>
                        <Col lg={{span:4, offset:2}} md={7} xs={12}><FontAwesomeIcon icon={faEnvelope} id='HeaderFont'  className='ms-5 mt-4' /><span className='ms-1'>admin@healandsafe.in</span></Col>
                        <Col  md={3} xs={12}> <FontAwesomeIcon icon={faClock}  id='HeaderFont' className='mt-4'/><span className='ms-1'>Mon-Fri 9:00 am - 7:00 pm</span></Col>
                        {/* <Col className="faIcon" >
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '10px' }}  />
                            <FontAwesomeIcon icon={faPinterest} style={{ marginLeft: '10px' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '10px' }} />
                        </Col> */}
                    </Row>
                </Container>
            </div> 
            
    </div>
    </div>
  )
}

export default SubHeader;