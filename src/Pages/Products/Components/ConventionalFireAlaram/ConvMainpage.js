import React from 'react'
import ConvFirstComp from './ConvFirstComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ConvCardComp from './ConvCardComp';
const ConvMainpage = () => {
  return (
    <div>
        <ConvFirstComp/>
        <div className='mt-5'>
                <Container>
                    <Row>
                        <Row>
                            <Col xs={12} md={{ span: 7, offset: 1 }} className='mt-5' >
                                <h2 style={{ fontWeight: '550' }}>Conventional Fire Alarm System</h2>
                                <Image style={{ height: '450px' }} src={require('../../../../Assests/Images/ConvMainImg.jpg')} className='h-100  w-100' />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} className='mt-5' md={{ span: 7, offset: 1 }}>
                                <p className='mt-5'>This type of system use one or more circuits, which are connected to sensor wires in parallel form. </p>
                                <h6 style={{ fontWeight: '600' }}>  Ideal Use Places</h6>
                                <ul>
                                    <li>Small Schools</li>
                                    <li>Restaurants.</li>
                                    <li>Stores.</li>
                                    <li>Apartments</li>
                                </ul>
                                <h6 style={{ fontWeight: '600' }}>Features</h6>
                                <ul>
                                    <li>In this system, we get information about only the specified circuits.</li>
                                    <li>They are wired in radial circuits.</li>
                                    <li>They are more economical compared to the addressable fire alarm system and best suited to smaller applications.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h1 className='text-center' style={{ padding: '7px', backgroundColor: '#FF3E3E' }}>AVAILABLE PRODUCTS</h1>
                                  <ConvCardComp/>
                            </Col>

                        </Row>
                    </Row>
                </Container>
            </div>
    </div>
  )
}

export default ConvMainpage