import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
const ThirdComp = () => {
  return (
    <Container style={{ marginTop: '100px' }} fluid >
      <Row >
        <Col xs={13} lg={{ span: 5, offset: 1 }} md={{span: 9, offset:2}} >
          <Image src={require('../../../Assests/Images/Home-AboutImg.jpg')} fluid />
        </Col>
        <Col xs={12} md={{ span: 4, offset: 0 }} className="xs-justify-content-center">
          <h6 style={{ color: 'red' }}>ABOUT US</h6><br />
          <h1>Heal & Safe Solutions</h1><br />
          <p>Heal & Safe Solution is one of the leading suppliers of safety equipment and accessories for the building as well as persons working under risk conditions.</p>
          <Row xs={4}>
            <Col xs={4} md={3}>
              <img src={require('../../../Assests/Images/Home-AboutIcon1.png')} style={{ height: '50px', width: '50px' }} /><h5>Fire Safety <br /> Products</h5></Col>
            <Col xs={7} md={3}  >
              <img src={require('../../../Assests/Images/Home-AboutImg2.png')} style={{ height: '50px', width: '50px' }} /><h5>Fire Safety <br /> Services</h5>
            </Col>
          </Row>
          <br />
          <p>Prime quality safety equipment and accessories are available at the best price with us. For co-operate building, we provide a fire training program. Our safety products include personal,  general, industrial and working purposes.</p>
          <br />
          <Button style={{ backgroundColor: '#EB003D', padding: '15px 35px', borderRadius: "30px" }}>Know More</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ThirdComp