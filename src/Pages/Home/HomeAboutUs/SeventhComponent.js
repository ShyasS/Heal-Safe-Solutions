import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SeventhComponent = () => {
  return (
    <div className='HomeSeventhComp'>
 <Container>
      <Row style={{color:'white',padding:'150px 0'}} >
        <Col  md={{span:7,offset:2}} xs={12}> <h1> For Fire safety & protective Equipments</h1></Col>
        <Col ><Button style={{padding:'10px 30px',borderRadius:'30px,',backgroundColor:'red'}} ><Link to='mailto:support@bytone.in'style={{textDecoration:'none', color:'white'}}>Contact Us</Link></Button></Col>
      </Row>
    </Container>
    </div>
  )
}

export default SeventhComponent