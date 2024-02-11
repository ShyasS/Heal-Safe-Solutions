import React,{useState} from 'react';
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

const Header = () => {
    const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    return (
        <div>
            <div>
                <Container className='TopHeader' fluid >
                    <Row className='TopRow'>
                        <Col md={7} xs={10}><FontAwesomeIcon icon={faEnvelope} id='HeaderFont'  className='ms-5 mt-4' />admin@healandsafe.in | <span className='ms-2'><FontAwesomeIcon icon={faLocationDot} style={{color:'#DD3333;'}}  id='HeaderFont'  /> x87/1, EB Colony,1st Street, Gandhi Nagar, Tiruppur - 641 603</span></Col>
                        <Col  md={4} xs={9}> <FontAwesomeIcon icon={faClock}  id='HeaderFont' className='mt-4'/>Mon-Fri 9:00 am - 7:00 pm</Col>
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
                                <Link href="#" className='navlink ms-5' id="Navlink">Our Products
                                  <div class="dropdown_menu1">
                <ul class="ul1">
                  <Link to={'/fireExtinguisher'}><li class="li1">Fire Extinguisher </li></Link> 
                  <Link to={'/firehydrants'}><li class="li1">Fire Hydrants</li></Link> 
                  <Link to={'#'}><li class="li1">Fire Alarms</li>  </Link> 
                  <div class="dropdown_menu2">   
                  <ul class="ul2">
                  <Link to={'/AddressableFireSystem'}><li class="li1">- Addressable Fire Alarm System</li></Link> 
                  <Link to={'/ConventionalMainpage'}><li class="li1">- Conventional Fire Alarm System</li></Link> 
                  </ul>
                   </div>
                  <Link to={'/PersonalProtective'}><li class="li1">Personal Protective<br/>Equipments</li></Link> 
                </ul>
              </div>
            </Link>
                                <Link className='navlink ms-5' id="Navlink" href="#Integrations">Our Services
                                <div class="dropdown_menu1">
                <ul class="ul1">
                  <Link to={'/FireHydrantProjects'}><li class="li1">Fire Hydrant Projects </li></Link> 
                  <Link to={'/FireAlarm'}><li class="li1">Fire Alarm Projects</li></Link> 
                  <Link to={'/FireFightingTraining'}><li class="li1">Fire Fighting Trainings</li></Link> 
                  <Link to={'/FireAidTraining'}><li class="li1">Fire Aid Trainings</li></Link> 
                </ul>
              </div></Link>
                                <Link to={'/ContactUs'} className='navlink ms-5' id="Navlink" href="#Resources">Contact</Link>
                            </Nav>       
                        </Navbar.Collapse>
                        <Col md={8} xs={6} lg={2}> 
                        <FontAwesomeIcon icon={faPhoneVolume} id="NavCall" /><span className='' id='NavText' > Feel Free To Call Us! <br/><span className='ms-5'>73392 53111</span></span>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Header