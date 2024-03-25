import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AboutSecondComp = () => {
  return (
    <div> 
 <Container>
      <Row>  
        <Col lg={5 } md={10} className='ms-md-5' >
        <Image src={require('../../../Assests/Images/AboutSecondImg1.jpeg')} fluid />
        </Col>
        <Col lg={5} md={8} className='ms-md-5'>
            <p><Image src={require('../../../Assests/Images/AboutSecondImg4.jpeg')} fluid/>WHO WE ARE?</p>
            <h1 style={{fontWeight: "600"}}>Fire Safety Equipment & Accessories</h1>
            <Col lg={9} >
            <p style={{fontSize:'15px'}}>We 'BT Safe' are one of India's leading suppliers of safety accessories and equipment. As we have been in the market for more than 2 decades we are keen to know what kind of build need, which kind of safety measures and product related to it.  Apart from supplying safety-related products, we conduct fire safety programs for the co-operated building, with the main aim of educating the mass people to exit the building without panicking about the situation. The reason we were able to sustain in the market is our quality of work and product, more our delivering the best safety measure equipment to client satisfaction.  </p>
            </Col>
        </Col>
      </Row>
      <Row>
        <Col lg={5} md={10} className='ms-md-5 mt-md-3'> 
        <Image src={require('../../../Assests/Images/AboutSecondImg2.jpeg')} fluid />
        </Col>
        <Col lg={{span:6,offset:0}} xs={12} className='row row-cols-3'  >
            <Col lg={4} md={6} className='mt-md-5 ms-md-4'>
       <p className='mt-md-5'><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Fire Extinguisher</p>
       <p><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Personal Protective Equipment</p>
       <p><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>General Safety Products</p>
       <p><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Industrial Emergency Lights</p>
       <p><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Fire Hydrant Accessories</p>
       <p><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Worker Safety Footwear</p>
       </Col>
       <Col lg={6} className="mt-md-5" xs={8}>
           <Image className='h-50 w-75 mt-5' src={require('../../../Assests/Images/AboutSecondImg3.jpeg')}/>
       </Col>
       <Link to={'/ContactUs'}><Button variant="warning"  className= 'ms-md-5'>Contact Now</Button></Link>
        </Col> 
       
      </Row>
    </Container>

    </div>
  )
}

export default AboutSecondComp