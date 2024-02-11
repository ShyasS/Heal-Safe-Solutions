import React, { useState, useEffect } from 'react'
import AddressableFirstComp from './AddressableFirstComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import AddressableCardComp from './AddressableCardComp';
const MainPage = () => {
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
            <AddressableFirstComp />
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Row>
                            <Col xs={12} md={{ span: 8, offset: 1 }} className='mt-5' >
                                <h2 style={{ fontWeight: '550' }}>ADDRESSABLE FIRE ALARM SYSTEM</h2>
                                <Image style={{ height: '450px' }} src={require('../../../../Assests/Images/AddressableFireImgMain.jpg')} className='h-100  w-100' />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={11} className='mt-5' md={{ span: 7, offset: 1 }}>
                                <p className='mt-5'>They get operated digitally during the fire breakout. They are the fire protection system that has the ability to detect change in the atmosphere and pinpoint the exact location where the fire takes place.</p>
                                <h6 style={{ fontWeight: '600' }}>Features</h6>
                                <ul>
                                    <li>In this system, we can get information about the individual detectors.</li>
                                    <li>They allow an early ‘pre-alarm’ warning allowing the responsible person to investigate the potential alarms even before the system is getting activated.</li>
                                    <li>The alarm system function can be altered based on the need and requirements of different environments and locations.</li>
                                    <li>They are wired in the loop.</li>
                                    <li>They have an event log and real-time clock to record system events.</li>
                                    <li>In the larger addressable systems, sophisticated programming options are available that certain outputs can be operated only on specific events.</li>
                                    <li>They are costly when compared to the conventional equivalent.</li>
                                    <li>These systems are more efficient and significantly faster in the detection of fire.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h1 className='text-center' style={{ padding: '7px', backgroundColor: '#FF3E3E' }}>AVAILABLE PRODUCTS</h1>
                                   <AddressableCardComp/>
                            </Col>

                        </Row>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default MainPage