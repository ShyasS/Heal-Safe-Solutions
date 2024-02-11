import React from 'react'
import SerThirdFirstComp from './SerThirdFirstComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import SertThirdCard from './SertThirdCard';
const SerThirdMainPage = () => {
  return (
    <div>
        <SerThirdFirstComp/>
        <div className='mt-5'>
                <Container>
                    <Row>
                        <Row>
                            <Col xs={12} md={{ span: 10, offset: 1 }} className='mt-5' >
                                <h2 style={{ fontWeight: '550' }}>Best Fire Fighting Trainings by Heal and Safe</h2>
                                <Image style={{ height: '450px' }} src={require('../../../Assests/Images/SerThirdMainImg.jpg')} className='h-100  w-100' />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} className='mt-5' md={{ span: 10, offset: 1 }}>
                                <p className='mt-5'>Fire fighting training is an important part of ensuring the safety and well-being of individuals and communities. Our company is proud to offer comprehensive fire fighting training programs to help individuals learn the skills and knowledge necessary to effectively respond to and manage fire emergencies.</p>
                                <p>Our fire fighting training programs are designed to provide participants with the necessary knowledge and hands-on experience to safely and effectively respond to and manage fire emergencies. Our programs cover a wide range of topics, including fire prevention, fire behavior, fire suppression techniques, and emergency response procedures</p>
                               <p>Our training programs are led by experienced and certified fire fighting professionals who have a wealth of knowledge and expertise in this field. They will provide participants with the necessary knowledge and hands-on training to effectively respond to and manage fire emergencies.</p>
                               <p>In addition to traditional classroom training, our fire fighting training programs also include hands-on practice sessions, where participants can apply the skills and techniques they have learned in a simulated fire environment. This allows participants to gain valuable experience in a controlled setting, helping them to feel more confident and prepared to respond to real-life fire emergencies.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h1 className='text-center' style={{ padding: '7px', backgroundColor: '#FF3E3E' }}>Our Training Sessions</h1>
                                   <SertThirdCard/>
                            </Col>

                        </Row>
                    </Row>
                </Container>
            </div>
    </div>
  )
}

export default SerThirdMainPage