import React from 'react'
import SerAlrmFirstCom from './SerAlrmFirstCom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import SerAlrmCard from './SerAlrmCard';
const SerAlrmMainPag = () => {
  return (
    <div> 
           <SerAlrmFirstCom/>
           <div className='mt-5'>
                <Container>
                    <Row>
                        <Row>
                            <Col xs={12} md={{ span: 10, offset: 1 }} className='mt-5' >
                                <h2 style={{ fontWeight: '550' }}>FIRE ALARM PROJECTS BY HEAL AND SAFE</h2>
                                <Image style={{ height: '450px' }} src={require('../../../Assests/Images/SerAlrmMainImg.jpeg')} className='h-100  w-100' />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} className='mt-5' md={{ span: 10, offset: 1 }}>
                                <p className='mt-5'>Fire alarm projects involve the design, installation, and maintenance of fire alarm systems to detect and alert individuals to the presence of a fire. These systems are crucial for ensuring the safety of individuals and buildings by providing early warning of a fire, allowing people to evacuate and emergency responders to be notified.</p>
                                <p>Our company specializes in providing complete fire alarm solutions for a wide range of buildings, including commercial, industrial, and residential properties. We have a team of experienced and certified professionals who are trained in the latest fire alarm technologies and can design and install systems that meet the specific needs of each project.</p>
                                 <p>Our fire alarm systems include a variety of components, such as smoke detectors, heat detectors, manual pull stations, and alarm panels. These components work together to detect the presence of a fire and trigger an alarm to alert individuals to the danger. We also offer maintenance services to ensure that fire alarm systems are in good working order and ready to respond in the event of a fire.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h1 className='text-center' style={{ padding: '7px', backgroundColor: '#FF3E3E' }}>FIRE ALARM WORKS</h1>
                                   <SerAlrmCard/>
                            </Col>

                        </Row>
                    </Row>
                </Container>
            </div>

    </div>
  )
}

export default SerAlrmMainPag