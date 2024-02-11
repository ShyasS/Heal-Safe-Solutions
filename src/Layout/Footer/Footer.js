import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot,faPhoneVolume,faEnvelope,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
const Footer = () => {
    return (
        <div id='MainFooter1'>
            <Container>
                <Row style={{ color: 'white' }}>
                    <Col md={3} xs={12}>
                        <img src={require('../../Assests/Images/Icon.png')} style={{ height: '70px', width: '150px', margin: '30px 0' }} />
                        <p>Safety begins with us! Standing up for Worker’s safety!</p>
                        <p>Our Branches: Coimbatore, Erode, Karur, Salem, Madurai.</p>
                        <p>Opening Hours: Mon – Fri 9:00 am to 7:00 pm</p>
                    </Col>

                    <Col md={3} xs={12}>
                        <h3 style={{ margin: '50px 0' }}>CONTACT INFO</h3>
                        <p style={{margin:'10px 0'}}><FontAwesomeIcon icon={faLocationDot} style={{margin:'0px 10px',color:'red'}}/>87/1, EB Colony,
                            1st Street, Gandi Nagar,
                            Tiruppur - 641 603.</p>
                         <p style={{margin:'10px 0'}}> <FontAwesomeIcon icon={faPhoneVolume} style={{margin:'0px 10px', color:'red'}}/>73392 53111 / 0421-4252101</p>   
                         <p style={{margin:'10px 0'}}> <FontAwesomeIcon icon={faEnvelope} style={{margin:'0px 10px',color:'red'}}/>admin@healandsafe.in / sales.cbe@healandsafe.in</p>   

                    </Col >
                    <Col  >
                        <h3  style={{ margin: '50px 0' }}>PRODUCTS</h3>
                        <p> <FontAwesomeIcon icon={faChevronRight} style={{margin:'0px 10px',color:'red'}}/>Fire Extinguisher</p>
                        <p> <FontAwesomeIcon icon={faChevronRight} style={{margin:'0px 10px',color:'red'}}/>Fire Hydrant Accessories</p>
                        <p><FontAwesomeIcon icon={faChevronRight} style={{margin:'0px 10px',color:'red'}}/>Personal Protective Equipments</p>
                        <p><FontAwesomeIcon icon={faChevronRight} style={{margin:'0px 10px',color:'red'}}/>Worker Safety Footwear</p>
                        <p><FontAwesomeIcon icon={faChevronRight} style={{margin:'0px 10px',color:'red'}}/>Industrial Emergency Lights</p>
                        <p><FontAwesomeIcon icon={faChevronRight} style={{margin:'0px 10px',color:'red'}}/>General Safety Products</p>
                    </Col>
                    <Col>
                    <Col style={{ margin: '50px 0', font:'30px' }}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '20px' }}  />
                            <FontAwesomeIcon icon={faPinterest} style={{ marginLeft: '20px' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '20px' }} />
                         <Col xs={12}>
                            <Button style={{padding:'10px 20px', backgroundColor:'grey',borderColor:"grey",margin:'30px 0'}}>Download catalogue</Button>
                            </Col>
                        </Col>
                      
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer