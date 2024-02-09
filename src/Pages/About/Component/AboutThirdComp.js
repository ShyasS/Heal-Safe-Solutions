import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import SkillsBar from '../../../Components/SkillsBar/SkillsBar';
const AboutThirdComp = () => {
  return (
    <div className='AboutThirdMain'>
        <Container>
      <Row className='text-white py-md-5'>
        <Col md={5}>
        <hr class="mt-5" style={{height:'10px', width:'50px',backgroundColor:'#DD3333'}}/>
        <h3>Our Fire Safety skills and work experience in Safety Projects</h3>

        <p>Determined to stay ahead in the combative market, we provide free demos for the safety product and equipment. Our pillars for the business's success and growth are our infrastructures and motivated employees.</p>
         <Col xs={{span:6, offset:4}} md={{span:6, offset:0}} >
          <SkillsBar/>
          </Col> 
         </Col>
        <Col md={{span:6, offset:1}} className='mt-5'>
            <Image className='h-100 w-100' src={require('../../../Assests/Images/AboutThirdImg2.jpg')}/>
           </Col>
      </Row>
    </Container>
    </div>
  )
}

export default AboutThirdComp