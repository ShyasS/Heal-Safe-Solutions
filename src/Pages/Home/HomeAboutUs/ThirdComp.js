import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const ThirdComp = () => {
  return (
    <div>
        <Container className='BodyContainer' fluid >
      <Row>
        <Col md={{ span: 4, offset: 2 }} className='mt-4' >
          <h3 className="align-items-center">Step into the world <span style={{color:'#03ff28'}}> of limitless <br/> selling with Fusion </span></h3> 
          <Col className='mt-5'>
          <NavLink to='/'  >
          <h5>Food & Beverage <FontAwesomeIcon icon={faArrowRight} /> </h5>
          <p>Tools that connect the front of house with back of house and <br/> integrate everything that you need to run your restaurant into one <br/> dashboard</p> 
          <Button variant="success" style={{borderRadius:'30px' ,width:'100px'}} >Free trail</Button>
        </NavLink>
        </Col>
        </Col>
        </Row>
</Container>

    </div>
  )
}

export default ThirdComp