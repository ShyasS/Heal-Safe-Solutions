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
        <Col lg={6} xl={5} md={10} className='ms-xl-5' >
        <Image src={require('../../../Assests/Images/AboutSecondImg1.jpeg')} fluid />
        </Col>
        <Col lg={6} xl={5} md={8} className='ms-xl-5'>
            <h2><Image src={require('../../../Assests/Images/AboutSecondImg4.jpeg')} fluid/> WHO WE ARE?</h2>
            <h2 style={{fontWeight: "500" }}>Fire Safety Equipment & Accessories</h2>
            <Col lg={9} >
            <p style={{fontSize:'15px'}}>We 'BT Safe' are one of India's leading suppliers of safety accessories and equipment. As we have been in the market for more than 2 decades we are keen to know what kind of build need, which kind of safety measures and product related to it.  Apart from supplying safety-related products, we conduct fire safety programs for the co-operated building, with the main aim of educating the mass people to exit the building without panicking about the situation. The reason we were able to sustain in the market is our quality of work and product, more our delivering the best safety measure equipment to client satisfaction.  </p>
            </Col>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xl={5} md={10} className='ms-xl-5 mt-xl-3'> 
        <Image src={require('../../../Assests/Images/AboutSecondImg2.jpeg')} fluid />
        </Col>
        <Col lg={6} xl={6} md={10} xs={12} sm={12} className='row row-cols-3 grid gap-0 column-gap-3'>
            <Col lg={8} md={6} xs={12} sm={12} className='mt-xl-5 ms-xl-4 p-4 g-col-6 '>
       <h5 className='mt-md-5'><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Fire Extinguisher</h5>
       <h5><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Personal Protective Equipment</h5>
       <h5><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>General Safety Products</h5>
       <h5><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Industrial Emergency Lights</h5>
       <h5><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Fire Hydrant Accessories</h5>
       <h5><FontAwesomeIcon icon={faCircleCheck} style={{margin:'0px 10px',color:'#dbb407'}}/>Worker Safety Footwear</h5>
       <Link to={'/ContactUs'} ><Button variant="warning"  className= 'ms-md-5 mt-4'>Contact Now</Button></Link>
       </Col>
       {/* <Col lg={6} className="mt-md-5" xs={8}>
           <Image className='h-50 w-75 mt-5' src={require('../../../Assests/Images/AboutSecondImg3.jpeg')}/>
       </Col> */}
    
        </Col> 
       
      </Row>
    </Container>

    </div>
  )
}

export default AboutSecondComp