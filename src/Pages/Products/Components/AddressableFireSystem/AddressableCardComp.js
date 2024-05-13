import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddressableCardComp = () => {
    const data = [
        {
            id: 1,
            image: {
                png: require('../../../../Assests/Images/AddressableFireImg1.webp')
            },
           
        },
        {
            id: 2,
            image: {
                png: require('../../../../Assests/Images/AddressableFireImg2.webp')
            },
            
        },
        {
            id: 3,
            image: {
                png: require('../../../../Assests/Images/AddressableFireImg3.webp')
            }
          
        },
        {
            id: 4,
            image: {
                png: require('../../../../Assests/Images/AddressableFireImg4.webp')
            }
           
        },
        {
            id: 5,
            image: {
                png: require('../../../../Assests/Images/AddressableFireImg5.webp')
            }
           
        }
    ]
    const [product, setProduct] = useState(data)

  return (
    <div className='mt-5'>
       <Container>
            <Row  xs={1} sm={3} xl={3} xxl={4} lg={3} md={2} className='g-4 ms-md-2 d-flex justify-content-center'>
    {
                product.map((val) =>
                    <Col key={val.id}>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={val.image.png} />            
                        </Card>
                        </Col>
             
                )}
                  </Row>
                  </Container>
    </div>
  )
}

export default AddressableCardComp