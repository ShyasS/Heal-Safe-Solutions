import React,{useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ConvCardComp = () => {
    const data = [
        {
            id: 1,
            image: {
                png: require('../../../../Assests/Images/ConvImg1.png')
            },
           
        },
        {
            id: 2,
            image: {
                png: require('../../../../Assests/Images/ConvImg2.png')
            },
            
        },
        {
            id: 3,
            image: {
                png: require('../../../../Assests/Images/ConvImg3.png')
            }
          
        },
        {
            id: 4,
            image: {
                png: require('../../../../Assests/Images/ConvImg4.png')
            }
           
        },
        {
            id: 5,
            image: {
                png: require('../../../../Assests/Images/ConvImg5.webp')
            }
           
        },
        {
            id: 6,
            image: {
                png: require('../../../../Assests/Images/ConvImg6.webp')
            }
           
        },
        {
            id: 7,
            image: {
                png: require('../../../../Assests/Images/ConvImg7.webp')
            }
           
        },
        {
            id: 8,
            image: {
                png: require('../../../../Assests/Images/ConvImg8.webp')
            }
           
        }
        
    ]
    const [product, setProduct] = useState(data)
  return (
    <div className='mt-5'>
    <Container>
         <Row  xs={1} sm={3} lg={4} md={2} className='g-4 ms-md-2'>
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

export default ConvCardComp