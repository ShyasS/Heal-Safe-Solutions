import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutFirstComp = () => {
    return (
        <div className='AboutFirstComp'>
            <Container>
                <Row style={{color:'white'}}>
                    <Col md={{span:6, offset:5}}>
                         <hr style={{height:'10px', width:'50px',backgroundColor:'#ff6363'}}/>
                         <h1>About Us</h1>
                     
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutFirstComp