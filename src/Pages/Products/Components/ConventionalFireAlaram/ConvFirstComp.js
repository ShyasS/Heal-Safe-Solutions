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
                 <hr class="ms-5 mt-5" style={{height:'10px', width:'50px',backgroundColor:'red'}}/>
                 <div style={{marginLeft:'-190px'}}> 
                 <h1 className='py-5'>Conventional Fire Alarm System</h1>
                 </div>
                 <Col md={{span:5, offset:0}}>
                 <p className=' pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe - Conventional Fire Alarm System</p>
                 </Col>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default ConvFirstComp