import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ClientSecComp = () => {
    const data = [
        {
            id: 1,
            image: {
                png: require('../../Assests/Images/ClientUpd1.jpg')
            },
           
        },
        {
            id: 2,
            image: {
                png: require('../../Assests/Images/ClientUpdated2.jpg')
            },
            
        }
    ]
    const [product, setProduct] = useState(data)
  return (
    <div className='mt-5 my-5'>
       <Container>
            <Row  xs={1} sm={3} xl={3} xxl={4} lg={3} md={2} className='g-4 ms-md-2 d-flex justify-content-center'>
    {
                product.map((val) =>
                    <Col key={val.id}>
                        <Card style={{ width: '300px', height:'200px'}}>
                            <Card.Img variant="top" src={val.image.png}  />            
                        </Card>
                        </Col>
                )}
                  </Row>
                  </Container>
    </div>
  )
}

export default ClientSecComp;