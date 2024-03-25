import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SerFireCard = () => {
    const data = [
        {
            id: 1,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg1.jpeg')
            },
           
        },
        {
            id: 2,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg2.jpeg')
            },
           
        },
        {
            id: 3,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg3.jpeg')
            },
           
        },
        {
            id: 4,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg4.jpeg')
            },
           
        },
        {
            id: 5,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg5.jpeg')
            },
           
        },
        {
            id: 6,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg6.jpeg')
            },
           
        },
        {
            id: 7,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg7.jpeg')
            },
           
        },
        {
            id: 8,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg8.jpeg')
            },
           
        },
        {
            id: 9,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg9.jpeg')
            },
           
        },
        {
            id: 10,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg10.jpeg')
            },
           
        },
        {
            id: 11,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg11.jpeg')
            },
           
        },
        {
            id: 12,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg12.jpeg')
            },
           
        },
        {
            id: 13,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg13.jpeg')
            },
           
        },
        {
            id: 14,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg14.jpeg')
            },
           
        },
        {
            id: 15,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg15.jpeg')
            },
           
        },
        {
            id: 16,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg16.jpeg')
            },
           
        },
        {
            id: 17,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg17.jpeg')
            },
           
        },
        {
            id: 18,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg18.jpeg')
            },
           
        },
        {
            id: 19,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg19.jpeg')
            },
           
        },
        {
            id: 20,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg20.jpeg')
            },
           
        },
        {
            id: 21,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg21.jpeg')
            },
           
        },
        {
            id: 22,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg22.jpeg')
            },
           
        },
        {
            id: 23,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg23.jpeg')
            },
           
        },
        {
            id: 24,
            image: {
                png: require('../../../Assests/Images/Serv-FireHydIMg24.jpeg')
            },
           
        },
    ]
    const [product,setProduct] = useState(data);
  return (
    <div className='mt-5'>
    <Container>
         <Row  xs={1} sm={3} lg={3} xl={3} xxl={4} md={2} className='g-2 ms-md-2'>
 {
             product.map((val) =>
                 <Col key={val.id} className='my-2'>
                     <Card style={{ width: '18rem'}}>
                         <Card.Img variant="top" style={{height:'18rem'}} src={val.image.png} />            
                     </Card>
                     </Col>
          
             )}
               </Row>
               </Container>
 </div>
  )
}

export default SerFireCard