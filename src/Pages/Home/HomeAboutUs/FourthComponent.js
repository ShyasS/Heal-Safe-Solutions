import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FourthComponent = () => {
    const data = [
        {
            id: 1,
            image: {
                png: require('../../../Assests/Images/Home-FourthImg1.jpg')
            },
            title: "Fire Extinguishers"
        },
        {
            id: 2,
            image: {
                png: require('../../../Assests/Images/Home-FourthImg2.jpg')
            },
            title: "Personal Protective Equipments"
        },
        {
            id: 3,
            image: {
                png: require('../../../Assests/Images/Home-FourthImg3.png')
            },
            title: "General Safety Protection"
        },
        {
            id: 4,
            image: {
                png: require('../../../Assests/Images/Home-FourthImg4.png')
            },
            title: "Emergency Lights"
        },
        {
            id: 5,
            image: {
                png: require('../../../Assests/Images/Home-FourthImg5.png')
            },
            title: "Fire Hydrants"
        },
        {
            id: 6,
            image: {
                png: require('../../../Assests/Images/Home-FourthImg6.jpg')
            },
            title: "Safety Footwear"
        }
    ]

    const [product, setProduct] = useState(data)
    return (
        <div className='HomeFourthMain'>
            <h2 class=" text-center pt-3" style={{ color: 'white' }}>WHAT WE DO?</h2>
            <h3 class=" text-center pt-3" style={{ color: 'white' }}>Leading Fire Protection Services</h3>
            <Container>
            <Row id="RowFourthComp" xs={1} sm={3} xl={3} lg={2} md={2}  className='g-lg-4 g-md-4 grid gap-0 column-gap-3  position-relative py-2 px-5 ms-lg-5 py-5 ' >
    {
                product.map((val) =>
                    <Col key={val.id} className="p-2 g-col-6">
                        <Card id="CarddSize">
                            <Card.Img variant="top" src={val.image.png} />
                            <Card.Body>
                                <Card.Title>{val.title}</Card.Title>
                            </Card.Body>
                            
                        </Card>
                        </Col>
             
                )}
                  </Row>
                  </Container>
        </div>
        

    )
}

export default FourthComponent