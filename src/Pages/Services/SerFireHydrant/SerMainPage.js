import React from 'react'
import SerFirstComp from './SerFirstComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import SerFireCard from './SerFireCard';
const SerMainPage = () => {
  return (
    <div>
        <SerFirstComp/> 
        <div className='mt-5'>
                <Container>
                    <Row>
                        <Row>
                            <Col xs={12} md={{ span: 10, offset: 1 }} className='mt-5' >
                                <h2 style={{ fontWeight: '550' }}>FIRE HYDRANT PROJECTS</h2>
                                <Image style={{ height: '450px' }} src={require('../../../Assests/Images/Serv-FireMainImg.jpg')} className='h-100  w-100' />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} className='mt-5' md={{ span: 10, offset: 1 }}>
                                <p className='mt-5'>Fire Hydrant projects are related to fire protection services, in which water has to be supplied at sufficient pressure through the pipeline for preventing the spreading of the building and to save human life. Its an emergency equipment and safety measure need for the building to provide a water source for the fire authorities during the fire.</p>
                                <p>Fire hydrant projects are to be operated even if the structure collapses. The connections to the pipes are tapped with hydrant wrenches and standpipes which are connected to the fire trucks. The pressure of the hydrant pipe work is kept at 6 Kg/CM2 constantly. When the fire bursts in the building the water pump through the AC motor, pressure for the water switches off it automatically.</p>
                               
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h1 className='text-center' style={{ padding: '7px', backgroundColor: '#FF3E3E' }}>PROJECT WORKS</h1>
                                   <SerFireCard/>
                            </Col>

                        </Row>
                    </Row>
                </Container>
            </div>
    </div>
  )
}

export default SerMainPage