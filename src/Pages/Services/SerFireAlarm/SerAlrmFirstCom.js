import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SerAlrmFirstCom = () => {
  return (
    <div className='AboutFirstComp'>
    <Container>
        <Row className="pt-md-5" style={{color:'white'}}>
            <Col md={{span:5, offset:5}}>
                 <hr class="SerAlarmHR" />
                 <div style={{marginLeft:'-90px'}}> 
                 <h1 class="SerAlarmTitle">Fire Alarm Projects</h1>
                 </div>
                 <Col md={{span:5, offset:0}}>
                 <p className=' pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe - Fire Alarm Projects</p>
                 </Col>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default SerAlrmFirstCom