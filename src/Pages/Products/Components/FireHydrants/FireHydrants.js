import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import FireHydFirstComp from './FireHydFirstComp';

const FireHydrants = () => {
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
      <FireHydFirstComp/>
            <Container>
                <Row>
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 1 }} >
                            <Image style={{ height: '450px' }} src={require('../../../../Assests/Images/FireHydrantsImg.jpeg')} className='h-100  w-100' />
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
                            <h1>Hydrant System</h1>
                            <p>Hydrant accessories play a vital role in the system of firefighting.  The main purpose for designing hydrant protection is to fight the spread of fire in huge proportions. They are designed in such a way that even if the structure gets collapses they get into the operation.</p>
                             <h6 style={{fontWeight:'600'}}>Types of Fire Hydrants</h6>
                            <ul>
                                <li>Dry Barrel - Contents Water Supply</li>
                                <li>Wet Barrel - Need a value to release the water let out</li>
                            </ul>
                            <h6 style={{fontWeight:'600'}}>List of Fire Hydrant Accessories</h6>
                            <ul>
                                <li>Fire Hose Reel Shutoff Nozzle</li>
                                <li>Shut Off Nozzle PVC</li>
                                <li>Hose Reel Shutoff Nozzle</li>
                                <li>Fire Hose Reel Shutoff Nozzle</li>
                                <li>Shut off Nozzles For Hose Reel</li>
                                <li>Hose Reel Shutoff Nozzle</li>
                                <li>Foldable Fire Buckets Stand</li>
                            </ul>
                        </Col>
                        <Col xs={{ span: 9, offset: 2 }} lg={{ span: 3, offset: 0 }}>
                            <div className='FireExtinguishersColImg1'>
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

export default FireHydrants