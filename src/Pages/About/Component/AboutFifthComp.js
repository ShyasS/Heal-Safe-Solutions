import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
const AboutFifthComp = () => {
  return (
    <div className='AboutFifthComp'>

<Container>
      <Row className='text-white text-center'>
        <Col>
        <h2 className='mt-md-5' ><Image src={require('../../../Assests/Images/AboutSecondImg4.jpeg') } fluid/>WHO WE ARE?</h2>
        <h1  className='mt-md-5'>Have any upcoming project</h1>
        <p>Devotion, value, and hard work are the points that show our dedication towards the project taken for the safety measures. Our business is designed to provide protection to the clients living and business place for any kind of accidents.  We ensure to design a fire safety system that works fine based on the building design pattern, business type, and the number of people working there.</p>
        <h5  className='mt-md-5'>Professional Focusing On Safety!</h5>
        {/* <Button style={{borderRadius:'0px', padding:'10px 20px', backgroundColor:'#f7b707',borderColor:'#f7b707'}}>GET STARTED</Button> */}
    </Col>
      </Row>
    </Container>
       
    </div>
  )
}

export default AboutFifthComp