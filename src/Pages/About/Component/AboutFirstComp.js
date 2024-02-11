import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutFirstComp = () => {
    return (
        <div className='AboutFirstComp'>
            <Container>
                <Row className="pt-md-5" style={{color:'white'}}>
                    <Col md={{span:4, offset:5}}>
                         <hr id="AboutHr" />
                         <h1 className='Abouttext'>About Us</h1>
                         <Col md={{span:6, offset:0}}>
                         <p className='mt-4 pt-4 text-center py-3' style={{backgroundColor:'#545050',marginLeft:'-39px'}}>healandsafe -About</p>
                         </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutFirstComp