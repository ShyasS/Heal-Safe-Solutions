import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ConvFirstComp = () => {
  return (
    <div className='AboutFirstComp'>
    <Container>
        <Row className="pt-md-5" style={{color:'white'}}>
            <Col md={{span:5, offset:5}}>
                 <hr class="ConvenHR" />
                 <div style={{marginLeft:'-190px'}}> 
                 <h1 className='ConvTitle'>Conventional Fire Alarm System</h1>
                 </div>
                 <Col md={{span:5, offset:0}}>
                 <p className='mt-4 pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe - Conventional Fire Alarm System</p>
                 </Col>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default ConvFirstComp