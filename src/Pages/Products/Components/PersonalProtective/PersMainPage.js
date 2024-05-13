import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import PersFirstComp from './PersFirstComp'
const PersMainPage = () => {
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
            <PersFirstComp />
            <Container className='my-3'>
                <Row>
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 1 }} >
                            <Image style={{ height: '450px' }} src={require('../../../../Assests/Images/PersonalMainImg.jpg')} className='h-100  w-100' />
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
                            <h1>We ensure Provide the best quality personal safety equipment.</h1>
                            <p className='mt-4'>PPE refers to personal protective equipment. PPE may be clothing or equipment. These are mainly designed to protect the employee in the work site by reducing exposure to physical hazards, chemical and biological. NIOSH (National Institute for Occupational Safety and Health) states that business persons to ensure the worker's safety as well as a healthy environment to work. Here is the list of PPE.</p>
                            <ul className='mt-4'>
                                <li>Eye Protection</li>
                                <li>Head Protection</li>
                                <li>Hearing Protection</li>
                                <li>Respiratory Protection</li>
                                <li>Hand Protection</li>
                                <li>Body Protection</li>
                                <li>Foot Protection</li>
                            </ul>
                            <h3 style={{ fontWeight: '500' }}>Benefits of the PPE</h3>
                            <ul className='mt-4'>
                                <li>Avoids unnecessary injury caused to employees at the workplace</li>
                                <li>Reduce exposure to the chemical substance the employee</li>
                                <li>Help in preventing the spread of the infection and germs to others</li>
                                <li>The efficiency and productivity of the employees are improved</li>
                            </ul>
                        </Col>
                        <Col xs={{ span: 9, offset: 2 }} lg={{ span: 3, offset: 0 }}>
                            <div className='FireExtinguishersColImg1 my-3'>
                                <div className='ms-4'>
                                    <Image src={require('../../../../Assests/Images/FireExtinguishersImg2jpg.jpg')} className=' mt-5 ms-5 h-25 w-25' />
                                    <span className='mt-4' style={{ color: 'white' }}><h1 className='mt-5 ms-4'>{value}+</h1></span>
                                    <h5 className='text-white ms-2'>Satisfied clients</h5>
                                </div>
                            </div>
                            <div className='FireExtinguishersColImg1 mt-md-5'>
                                <div className='ms-4'>
                                    <Image src={require('../../../../Assests/Images/FireExtinguishersImg3jpg.jpg')} className=' mt-5 ms-5 h-25 w-25' />
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

export default PersMainPage