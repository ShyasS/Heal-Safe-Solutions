import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
const AboutFourthComp = () => {
    const [detail, setDetail] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
    });
    const HandleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setDetail({
            ...detail,
            [name]: value
        })
    }

    const HandleSubmit=()=>{
        setDetail('')
    }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="4">
                        <h6><Image src={require('../../../Assests/Images/AboutSecondImg4.jpeg')} /><span className='ms-3'>LETS TALK</span></h6>
                        <h1>Have an upcoming project?</h1>
                        <Row>
                            <Col>
                                <input type="text" class="form-control mt-md-5" value={detail.name} name="name" onChange={HandleChange} id="Name" placeholder="Name" />
                                <input type="email" class="form-control mt-md-4" value={detail.email} name="email" onChange={HandleChange} id="Name" placeholder="Email" />
                                {/* <input type="text" class="form-control" value={detail.message} name="message" onChange={HandleChange} id="Name" placeholder="Message" /> */}

                            </Col>
                            <Col>
                                <input type="text" class="form-control mt-md-5" value={detail.website} name="website" onChange={HandleChange} id="Name" placeholder="Your Website" />
                                <input type="number" class="form-control mt-md-4" value={detail.phone} name="phone" onChange={HandleChange} id="Name" placeholder="phone" />

                            </Col>
                            <div class="form-floating">
                                <textarea type="text" class="form-control mt-md-4" value={detail.message} name="message" onChange={HandleChange} placeholder='Message' id="floatingTextarea2" style={{ height: "100px" }}></textarea>

                            </div>
                            <Button style={{ width: '150px', padding: '10px 20px', backgroundColor: '#f5c542', borderColor: '#f5c542', margin: '20px 20px', borderRadius: '0px' }} onClick={HandleSubmit}>SUBMIT NOW</Button>
                        </Row>
                    </Col>
                    <Col xs={12} md="auto" >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: '45px', width: '50px' }} src={require('../../../Assests/Images/AboutFourthImg.1jpg.png')} />
                            <Card.Body>
                                <Card.Title>Tirupur office
                                </Card.Title>
                                <Card.Text>
                                    87/1, E.B.Colony,<br />
                                    1st street, Gandhi Nagar, <br /> Tirupur - 641 603
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: '45px', width: '50px' }} src={require('../../../Assests/Images/AboutFourthImg.2jpg.png')} />
                            <Card.Body>
                                <Card.Title>Email us
                                </Card.Title>
                                <Card.Text>
                                    admin@healandsafe.in<br /> sales.cbe@healandsafe.in
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: '45px', width: '50px' }} src={require('../../../Assests/Images/AboutFourthImg.3jpg.png')} />
                            <Card.Body>
                                <Card.Title>Call us
                                </Card.Title>
                                <Card.Text>
                                    73392 53111 / 0421-4252101
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={{ span: 10, offset: 0 }} lg={{ span: 5, offset: 0 }}  >
                        <Image src={require('../../../Assests/Images/AboutFourthImg.jpg')} className='h-100  w-100' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutFourthComp