import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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
                <Row >
                    {/* <Col lg={4} xs={12} className="my-auto" > */}
                    <div className='text-center'>
                        <h6><Image src={require('../../../Assests/Images/AboutSecondImg4.jpeg')} /><span className='ms-3'>LETS TALK</span></h6>
                        <h1>Have an upcoming project?</h1>
                        {/* <Row> */}
                            {/* <Col>
                                <input type="text" class="form-control mt-md-5" value={detail.name} name="name" onChange={HandleChange} id="Name" placeholder="Name" />
                                <input type="email" class="form-control mt-md-4" value={detail.email} name="email" onChange={HandleChange} id="Name" placeholder="Email" />
                                {/* <input type="text" class="form-control" value={detail.message} name="message" onChange={HandleChange} id="Name" placeholder="Message" /> */}

                            {/* <Col>
                                <input type="text" class="form-control mt-md-5" value={detail.website} name="website" onChange={HandleChange} id="Name" placeholder="Your Website" />
                                <input type="number" class="form-control mt-md-4" value={detail.phone} name="phone" onChange={HandleChange} id="Name" placeholder="phone" />

                            </Col> */}
                            {/* <div class="form-floating">
                                <textarea type="text" class="form-control mt-md-4" value={detail.message} name="message" onChange={HandleChange} placeholder='Message' id="floatingTextarea2" style={{ height: "100px" }}></textarea>

                            </div> */}
                            <Link to='mailto:support@bytone.in'><Button style={{ width: '150px', padding: '10px 20px', backgroundColor: '#f5c549', borderColor: '#f5c542', margin: '20px 0px', borderRadius: '10px' }} onClick={HandleSubmit}>Contact Us</Button></Link>
                        {/* </Row> */}
                    {/* </Col> */}
                    </div>
                    <Row xs={12} lg={4} xl={3} xxl={3} md={12} className='my-2 d-flex justify-content-evenly gap-4' >
                        {/* <Row className="mx-auto">
                        <Col md={6} xs={12} lg={12} className='my-3 ' > */}
                        <Card id="CarddSize" style={{borderRadius:'20px'}} >
                            <Card.Img variant="top" style={{ height: '45px', width: '50px' }} className='ms-3' src={require('../../../Assests/Images/AboutFourthImg.1jpg.png')} />
                            <Card.Body>
                                <Card.Title>Company Details
                                </Card.Title>
                                <Card.Text>
                                        Bytone Global
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        
                        <Card id="CarddSize" style={{borderRadius:'20px',padding:'20px '}}>
                            <Card.Img variant="top" style={{ height: '45px', width: '50px' }} className='ms-3' src={require('../../../Assests/Images/AboutFourthImg.2jpg.png')} />
                            <Card.Body>
                                <Card.Title>Email us
                                </Card.Title>
                                <Card.Text>
                                support@bytone.in
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                       
                        <Card id="CarddSize" style={{borderRadius:'20px'}}>
                            <Card.Img variant="top" style={{ height: '45px', width: '50px' }} className='ms-3' src={require('../../../Assests/Images/AboutFourthImg.3jpg.png')} />
                            <Card.Body>
                                <Card.Title>Call us
                                </Card.Title>
                                <Card.Text>
                                +917010677045 / +919600 251611
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        </Row>
                    {/* </Col> */}
                    {/* <Col xs={{ span: 10, offset: 0 }} lg={{ span: 5, offset: 0 }}  >
                        <Image src={require('../../../Assests/Images/AboutFourthImg.jpg')} className='h-100  w-100' />
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default AboutFourthComp