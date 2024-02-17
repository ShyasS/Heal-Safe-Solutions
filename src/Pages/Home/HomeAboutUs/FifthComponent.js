import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const FifthComponent = () => {
    // const data = [
    //     {
    //         id: 1,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg1.png')
    //         },
    //         title: "Quick & Easy"
    //     },
    //     {
    //         id: 2,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg2.png')
    //         },
    //         title: "No-Obligation"
    //     },
    //     {
    //         id: 3,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg3.png')
    //         },
    //         title: "Efficient & Accurate"
    //     },
    //     {
    //         id: 4,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg4.png')
    //         },
    //         title: "Fast & Accurate"
    //     }
    // ]

    // const [detail, setDetail] = useState([])
    return (
        <div className="HomeFifthLeftComp">
            <Container >
                <Row>
                    <Col md={{ span: 3, offset: 1 }}>
                        <h6 class="d-flex justify-content-center p-5" style={{ color: 'white' }}>WHY CHOOSE US?</h6>
                        <h1 class="d-flex justify-content-center p-2" style={{ color: 'white' }}>People choose us for our quality craftsmanship!</h1>

                        <Row xs={1} sm={2} lg={2} md={2} className='g-4'>
                            <Col className='g-4'>
                                <Card id='HomeFifthCardComp' border="primary" >
                                    <Card.Img variant="top" src={require('../../../Assests/Images/Home-FifthLeftImg1.png')} style={{ height: '60px', width: '60px', margin: ' 10px 50px' }} />
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>Quick & Easy</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card id='HomeFifthCardComp' border="primary" >
                                    <Card.Img variant="top" src={require('../../../Assests/Images/Home-FifthLeftImg2.png')} style={{ height: '60px', width: '60px', margin: ' 6px 50px' }} />
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>Efficient & Accurate</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='g-4' >
                                <Card border="primary" id='HomeFifthCardComp2'  >
                                    <Card.Img variant="top" id="HomeFifthImage" src={require('../../../Assests/Images/Home-FifthLeftImg3.png')} />
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>No-Obligation</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card border="primary" id='HomeFifthCardComp2'>
                                    <Card.Img variant="top" id="HomeFifthImage" src={require('../../../Assests/Images/Home-FifthLeftImg4.png')}/>
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>Fast & Accurate</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{ span: 7, offset: 1 }} xs={7} id='HomeFifthlastimg' className='me-0 ' >
                        <Image src={require('../../../Assests/Images/Home-FifthImg2.jpg')} fluid />
                        <Image src={require('../../../Assests/Images/Home-FifthImg1.jpg')} fluid />
                        <Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FifthComponent