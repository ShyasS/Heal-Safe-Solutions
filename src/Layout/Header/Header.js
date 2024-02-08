import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faLocationDot,faClock,faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div>
                <Container className='TopHeader' fluid >
                    <Row className='TopRow'>
                        <Col md={7}><FontAwesomeIcon icon={faEnvelope} id='HeaderFont'  className='ms-5 mt-4' />admin@healandsafe.in | <span className='ms-2'><FontAwesomeIcon icon={faLocationDot} style={{color:'#DD3333;'}}  id='HeaderFont'  /> x87/1, EB Colony,1st Street, Gandhi Nagar, Tiruppur - 641 603</span></Col>
                        <Col  md={4}> <FontAwesomeIcon icon={faClock}  id='HeaderFont' className='mt-4'/>Mon-Fri 9:00 am - 7:00 pm</Col>
                        <Col className="faIcon" >
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '10px' }}  />
                            <FontAwesomeIcon icon={faPinterest} style={{ marginLeft: '10px' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '10px' }} />
                        </Col>
                    </Row>
                </Container>
            </div>  
            <div>
                <Navbar  expand="lg" className='Main2ndHeader' >
                    <Container >
                        <Navbar.Brand href="#home" className='col-lg-3'> <img src={require('../../Assests/Images/Icon.png')} style={{ height: '80px'}} /></Navbar.Brand> 
                        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls=" justify-content-end responsive-navbar-nav" />
                        <Navbar.Collapse className='HeaderOpt' id=" justify-content-end responsive-navbar-nav">
                            <Nav className='MainNav'>
                                <Link to={'/'} className='navlink' id="Navlink" href="#home">Home</Link>
                                <Link to={'/aboutus'} className='navlink ms-5' id="Navlink" >About Us</Link>
                                <Link className='navlink ms-5' id="Navlink">Our Products</Link>
                                <Link className='navlink ms-5' id="Navlink" href="#Integrations">Our Services</Link>
                                <Link className='navlink ms-5' id="Navlink" href="#Resources">Contact</Link>
                            </Nav>       
                        </Navbar.Collapse>
                        <FontAwesomeIcon icon={faPhoneVolume} id="NavCall" /><span className='ms-3' id='NavText' > Feel Free To Call Us! <br/>73392 53111</span>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Header