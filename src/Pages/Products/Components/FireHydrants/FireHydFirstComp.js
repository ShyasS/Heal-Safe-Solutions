import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FireHydFirstComp = () => {
  return (
    <div className='AboutFirstComp'>
    <Container>
        <Row className="pt-md-5" style={{color:'white'}}>
            <Col md={{span:4, offset:5}}>
                 <hr className="FireHydHR" />
                 <div style={{marginLeft:'-120px'}}> 
                 <h1 className='FireHydTtitle'>Fire Hydrant Accessories</h1>
                 <p className='FireHydPara'>Accessories For the Fire Hydrant</p>
                 </div>
                 <Col md={{span:6, offset:0}}>
                 <p className='mt-4 pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe - Fire Hydrant Accessories </p>
                 </Col>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default FireHydFirstComp