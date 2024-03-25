import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const PersFirstComp = () => {
  return (

<div className='AboutFirstComp '  >
<Container >
    <Row className="pt-5 mx-auto" style={{color:'white'}}>
    <hr id="AboutHr" className='mx-auto'  />
        <Col className='d-flex justify-content-center' lg={12}  >
             <h1 className=''>Personal Protective Equipments</h1>
             </Col>
             <p className='d-flex justify-content-center'>Get your self protected from head to toe</p>
             <Col className='mx-auto' lg={12} >
             <p className='mt-4 pt-4 text-center py-3 mx-auto  w-50' style={{backgroundColor:'#545050'}}>BT Safe  - Personal Protective Equipments</p>
             </Col>  
    </Row>
</Container>
</div>
  )
}

export default PersFirstComp