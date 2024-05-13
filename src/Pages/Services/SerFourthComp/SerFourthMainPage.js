import React from 'react'
import SerFourthFirstComp from './SerFourthFirstComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import SerFourthCard from './SerFourthCard';
const SerFourthMainPage = () => {
  return (
    <div>
        <SerFourthFirstComp/> 
        <div className='my-3'>
                <Container>
                    <Row>
                        <Row>
                            <Col xs={12} md={{ span: 10, offset: 1 }} >
                                <h2 style={{ fontWeight: '550' }}>Best Fire Fighting Trainings by Heal and Safe</h2>
                                <Image style={{ height: '450px' }} src={require('../../../Assests/Images/SerFourthMainImg.jpeg')} className='h-100  w-100' />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} className='mt-5' md={{ span: 10, offset: 1 }}>
                                <p className='mt-5'>First aid training is a course that teaches individuals how to provide basic medical care in the event of an injury or illness. This training can be especially important in situations where professional medical help is not immediately available.</p>
                                <p>First aid training typically covers a wide range of topics, including how to assess and respond to emergencies, how to provide basic life support, and how to treat common injuries and illnesses. Some common topics that may be covered in first aid training include:</p>
                                <ol>
                                  <li> Cardiopulmonary resuscitation (CPR)</li>
                                  <li>Bleeding control</li>
                                  <li>Shock management</li>
                                  <li>Choking first aid</li>
                                  <li>Burns treatment</li>
                                  <li>Fracture and sprain management</li>
                                  <li> Heat stroke and heat exhaustion</li>
                                  <li>Hypothermia</li>
                                  <li>Poisoning</li>          
                                </ol>

                               <p>First aid training is typically provided by certified instructors who have a background in emergency medical care. These instructors will provide both theoretical and practical training, allowing participants to learn the necessary skills and knowledge, as well as practice applying them in simulated emergency situations.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <h1 className='text-center' style={{ padding: '7px', backgroundColor: '#FF3E3E',fontWeight:'550' }}>Training Sessions</h1>
                                   <SerFourthCard/>
                            </Col>

                        </Row>
                    </Row>
                </Container>
            </div>
    </div>
  )
}

export default SerFourthMainPage