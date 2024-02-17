import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const FireExtinguishersFirstComp = () => {
    const [value, setValue] = useState(0);
    const [work, setWork] = useState(0);
    useEffect(() => {
        if (value < 600) {
            setTimeout(() => setValue(prev => prev += 25), 50)
        }
        if (work < 1500) {
            setTimeout(() => setWork(prev => prev += 25), 50)
        }
    }, [value, work])
    return (
        <div>
            <Container>
                <Row>
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 1 }}  >
                            <Image style={{ height: '450px' }} src={require('../../../Assests/Images/FireExtinguishers.jpg')} className='h-100  w-100' />
                        </Col>
                        <Col xs={12} lg={{ span: 4, offset: 0 }} className='text-white text-center '>
                            <div className='FireExtinguishersColImg h-100 w-100'>
                                <FontAwesomeIcon icon={faPhone} className='mt-5' style={{ fontSize: '40px', backgroundColor: 'yellow', borderRadius: '50%', padding: '10px', color: 'black' }} />
                                <h4 className='mt-5' >Have any questions? call <br /> us<span className="text-center ms-2" style={{ color: 'yellow' }} >today!</span> </h4>
                                <p style={{ color: 'yellow' }}>- - - - - - -</p>
                                <h2 className='mt-5' style={{ fontWeight: '600' }}>04214 252101</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={12} className='mt-5' lg={{ span: 7, offset: 1 }}>
                            <h1>Protect Everything From Fire</h1>
                            <p>Fire Extinguishers are one of the pre-dominate safety equipment in places like homes, offices, educational institutions, cars, etc.  Every fire extinguisher is designeofased to the need and requirements of the building.  In big companies like server racks, data centres, etc. fire extinguishers are important to avoid the big fire break-out. It is mandatory to have fire extinguishers in all commercial buildings by law.</p>
                            <ul>
                                <li>It helps prevent the catastrophic spread of fire, which avoids property damage</li>
                                <li>Mainly helps in prevent the small fire from getting out of control</li>
                                <li>As fire extinguishers are portable to move around that help to control the fire</li>
                            </ul>
                            <p>Having a fire extinguisher will not guarantee protection. The following measure has to be taken.</p>
                            <ul>
                                <li>Adequate maintenance is necessary for proper functioning</li>
                                <li>Train your staff on how to use the equipment</li>
                                <li>Before using the fire extinguisher read the first four safety tips</li>
                            </ul>
                        </Col>
                        <Col xs={{ span: 9, offset: 2 }} lg={{ span: 3, offset: 0 }}>
                            <div className='FireExtinguishersColImg1'>
                                <div className='ms-4'>
                                    <Image src={require('../../../Assests/Images/FireExtinguishersImg2jpg.jpg')} className=' mt-5 ms-5 h-25 w-25' />
                                    <span className='mt-4' style={{ color: 'white' }}><h1 className='mt-5 ms-4'>{value}+</h1></span>
                                    <h5 className='text-white ms-2'>Satisfied clients</h5>
                                </div>
                            </div>
                            <div className='FireExtinguishersColImg1 mt-md-5'>
                                <div className='ms-4'>
                                    <Image src={require('../../../Assests/Images/FireExtinguishersImg3jpg.jpg')} className=' mt-5 ms-5 h-25 w-25' />
                                    <span className='mt-4' style={{ color: 'white' }}><h1 className='mt-5 ms-4'>{work}+</h1></span>
                                    <h5 className='text-white ms-2'>Satisfied clients</h5>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Row>
            </Container>

        </div>
    )
}

export default FireExtinguishersFirstComp