import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const PersFirstComp = () => {
  return (
    <div className='AboutFirstComp'>
    <Container>
        <Row className="pt-md-5" style={{color:'white'}}>
            <Col md={{span:5, offset:5}}>
                <div className='ms-4'>
                 <hr class="ms-5 mt-5" style={{height:'10px', width:'50px',backgroundColor:'red'}}/>
                 </div>
                 <div style={{marginLeft:'-120px'}}> 
                 <h1 className='py-4'>Personal Protective Equipments</h1>
                 <p style={{marginLeft:'90px'}}>Get your self protected from head to toe</p>
                 </div>
                 <Col md={{span:6, offset:0}}>
                 <p className='mt-4 pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe -Personal Protective Equipments</p>
                 </Col>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default PersFirstComp