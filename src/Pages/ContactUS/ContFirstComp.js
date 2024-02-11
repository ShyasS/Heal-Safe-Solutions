import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ContFirstComp = () => {
  return (
<div className='AboutFirstComp'>
    <Container>
        <Row className="pt-md-5" style={{color:'white'}}>
            <Col md={{span:4, offset:5}}>
                 <hr class="ContactHR" />
                 <h1 className='ContactTitle'>Talk to an Expert!</h1>
                 <p  className="ContactPara" >Whether you have queries about our Fire Protection Services or need expert help for your enterprise, consult with our business experts by telephone orE-Mail, and we will be sure to back to you as soon as possible. </p>
                
                 <Col md={{span:5, offset:0}}>
                 <p className=' pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe - Fire Fighting Training</p>
                 </Col>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default ContFirstComp