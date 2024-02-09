import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FireExtenguishers = () => {
  return (
    <div className='AboutFirstComp'>
    <Container>
        <Row className="pt-md-5" style={{color:'white'}}>
            <Col md={{span:4, offset:5}}>
                 <hr class="ms-5 mt-5" style={{height:'10px', width:'50px',backgroundColor:'red'}}/>
                 <div style={{marginLeft:'-50px'}}> 
                 <h1 className='py-4'>Fire Extinguisher</h1>
                 <p>Essential life saving equipment in emergency situation <br/> and to extinguish fire at early stage.</p>
                 </div>
                 <Col md={{span:6, offset:0}}>
                 <p className='mt-4 pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe Extinguisher - Fire</p>
                 </Col>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default FireExtenguishers