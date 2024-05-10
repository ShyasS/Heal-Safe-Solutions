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
                {/* <Navbar  expand="lg" className='Main2ndHeader overflow-hidden' >
                    <Container >
                        <Row>
                            <Col lg={2} md={1} sm={12} xs={12} xl={2}>
                        <Navbar.Brand href="#home" > <img src={require('../../Assests/Images/Icon.png')} style={{ height: '80px'}} /></Navbar.Brand> </Col>
                        <Col lg={10} md={12} xs={12} sm={12} xl={8} className='d-flex justify-content-center justify-content-md-end'>
                        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls=" justify-content-md-end responsive-navbar-nav" />
                        <Navbar.Collapse className='HeaderOpt' id=" justify-content-md-end responsive-navbar-nav">
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
                        </Col>
                        <Col md={12} sm={9} xs={9} lg={3} xl={2}> 
                        <div className="d-flex justify-content-center"><FontAwesomeIcon icon={faPhoneVolume} id="NavCall" className="mt-lg-4 mt-md-2" /> <span className='' id='NavText' > Feel Free To Call Us! <span className='fs-5'>+917010677045,<span class='ms-lg-5'><br/>9600 251611</span></span></span></div>
                        </Col>
                        </Row>
                    </Container>
                </Navbar> */}


<div>
                <Container className='TopHeader' fluid >
                    <Row className='TopRow'>
                        <Col lg={{span:4, offset:1}} md={7} xs={12}><FontAwesomeIcon icon={faEnvelope} id='HeaderFont'  className='ms-5 mt-4' /><span className='ms-1'>support@bytone.in</span></Col>
                        <Col  md={3} xs={12}> <FontAwesomeIcon icon={faClock}  id='HeaderFont' className='mt-4'/><span className='ms-1'>Mon-Fri 9:00 am - 7:00 pm</span></Col>
                        {/* <Col className="faIcon" >
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '10px' }}  />
                            <FontAwesomeIcon icon={faPinterest} style={{ marginLeft: '10px' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '10px' }} />
                        </Col> */}
                          <Col lg={{span:2, offset:2}} className='mt-2' ><div className="d-flex justify-content-end"><FontAwesomeIcon icon={faPhoneVolume} id="NavCall" className="mt-lg-4" /> <span className='' id='NavText' > Feel Free To Call Us! <span className='fs-5'>+917010677045,<span class='ms-lg-5'><br/>+919600 251611</span></span></span></div></Col>
                    </Row>
                </Container>
                
            </div> 


                <Navbar expand="lg" className='Main2ndHeader '>
      <Container>
      <Navbar.Brand href="#home" ><Link to={'/'}> <img src={require('../../Assests/Images/Icon.png')} style={{ height: '80px'}} /></Link></Navbar.Brand> 
      <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls=" justify-content-md-end responsive-navbar-nav" />
      <Navbar.Collapse className='HeaderOpt' id=" justify-content-md-end responsive-navbar-nav">
                            <Nav className='MainNav mx-auto'>
                                <Link to={'/'} className='navlink' id="Navlink" href="#home">Home</Link>
                                <Link to={'/aboutus'} className='navlink ms-5' id="Navlink" >About Us</Link>
                                <Link to={'/client'} className='navlink ms-5' id="Navlink" >Our Clients</Link>
                                <Link href="#" className='navlink ms-5' id="Navlink">Our Products
                                  <div class="dropdown_menu1  ">
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
                      
      </Container>
    
    </Navbar>
            </div>


        //     <div>
           
        //         <div className='container-fluid Main2ndHeader' >
        //         <Navbar expand="lg" className='overflow-hidden'  >
        //             <div className='row mx-auto' >
        //                 <div className='col-lg-2 col-md-2'>
        //             <Navbar.Brand href="#home"><img src={require('../../Assests/Images/Icon.png')} style={{ height: '80px'}} /></Navbar.Brand> </div>
        //             <div className='col-lg-8 col-md-10  '>
        //             <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls=" d-flex justify-content-end responsive-navbar-nav" />
        //             <Navbar.Collapse className='HeaderOpt' id="d-flex justify-content-end  responsive-navbar-nav">
        //                 <Nav className='grid gap-5'>
        //                     <Link to={'/'} className='navlink' id="Navlink" href="#home">Home</Link>
        //                     <Link to={'/aboutus'} className='navlink' id="Navlink" >About Us</Link>
        //                     <Link href="#" className='navlink ' id="Navlink">Our Products
        //                       <div class="dropdown_menu1">
        //     <ul class="ul1">
        //       <Link to={'/fireExtinguisher'}><li class="li1">Fire Extinguisher </li></Link> 
        //       <Link to={'/firehydrants'}><li class="li1">Fire Hydrants</li></Link> 
        //       <Link to={'#'}><li class="li1">Fire Alarms</li>  </Link> 
        //       <div class="dropdown_menu2">   
        //       <ul class="ul2">
        //       <Link to={'/AddressableFireSystem'}><li class="li1">- Addressable Fire Alarm System</li></Link> 
        //       <Link to={'/ConventionalMainpage'}><li class="li1">- Conventional Fire Alarm System</li></Link> 
        //       </ul>
        //        </div>
        //       <Link to={'/PersonalProtective'}><li class="li1">Personal Protective<br/>Equipments</li></Link> 
        //     </ul>
        //   </div>
        // </Link>
        //                     <Link className='navlink ' id="Navlink" href="#Integrations">Our Services
        //                     <div class="dropdown_menu1">
        //     <ul class="ul1">
        //       <Link to={'/FireHydrantProjects'}><li class="li1">Fire Hydrant Projects </li></Link> 
        //       <Link to={'/FireAlarm'}><li class="li1">Fire Alarm Projects</li></Link> 
        //       <Link to={'/FireFightingTraining'}><li class="li1">Fire Fighting Trainings</li></Link> 
        //       <Link to={'/FireAidTraining'}><li class="li1">Fire Aid Trainings</li></Link> 
        //     </ul>
        //   </div></Link>
        //                     <Link to={'/ContactUs'} className='navlink' id="Navlink" href="#Resources">Contact</Link>
        //                 </Nav>       
        //             </Navbar.Collapse>
        //             </div>
        //                 <div className='col-md-2'> 
        //             <div className="d-flex justify-content-center"><FontAwesomeIcon icon={faPhoneVolume} id="NavCall" className="mt-lg-4 mt-md-2" /> <span className='' id='NavText' > Feel Free To Call Us! <span className='fs-5'>+917010677045,<span class='ms-lg-5'><br/>9600 251611</span></span></span></div>
        //             </div>
        //             </div>
        //     </Navbar>
        //         </div>
        // </div>
    )
}

export default Header