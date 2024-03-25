import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SertThirdCard = () => {
  const data = [
    {
        id: 1,
        image: {
          png: require('../../../Assests/Images/SerThirdImg1.jpeg')
        },
       
    },
    {
        id: 2,
        image: {
          png: require('../../../Assests/Images/SerThirdImg2.jpeg')
        },
       
    },
    {
        id: 3,
        image: {
          png: require('../../../Assests/Images/SerThirdImg3.jpeg')
        },
       
    },
    {
        id: 4,
        image: {
          png: require('../../../Assests/Images/SerThirdImg4.jpeg')
        },
       
    },
    {
        id: 5,
        image: {
          png: require('../../../Assests/Images/SerThirdImg5.jpeg')
        },
       
    },
    {
        id: 6,
        image: {
          png: require('../../../Assests/Images/SerThirdImg6.jpeg')
        },
       
    },
    {
        id: 7,
        image: {
          png: require('../../../Assests/Images/SerThirdImg7.jpeg')
        },
       
    },
    {
        id: 8,
        image: {
          png: require('../../../Assests/Images/SerThirdImg8.jpeg')
        },
       
    },
    {
        id: 9,
        image: {
          png: require('../../../Assests/Images/SerThirdImg9.jpeg')
        },
       
    },
    {
        id: 10,
        image: {
          png: require('../../../Assests/Images/SerThirdImg10.jpeg')
        },
       
    },
    {
        id: 11,
        image: {
          png: require('../../../Assests/Images/SerThirdImg11.jpeg')
        },
       
    },
    {
        id: 12,
        image: {
          png: require('../../../Assests/Images/SerThirdImg12.jpeg')
        },
       
    },
    {
        id: 13,
        image: {
          png: require('../../../Assests/Images/SerThirdImg13.jpeg')
        },
       
    },
    {
        id: 14,
        image: {
          png: require('../../../Assests/Images/SerThirdImg14.jpeg')
        },
       
    },
    {
        id: 15,
        image: {
          png: require('../../../Assests/Images/SerThirdImg15.jpeg')
        },
       
    },
    {
        id: 16,
        image: {
          png: require('../../../Assests/Images/SerThirdImg16.jpeg')
        },
       
    },
    {
        id: 17,
        image: {
          png: require('../../../Assests/Images/SerThirdImg17.jpeg')
        },
       
    },
    {
        id: 18,
        image: {
          png: require('../../../Assests/Images/SerThirdImg18.jpeg')
        },
       
    },
    {
        id: 19,
        image: {
          png: require('../../../Assests/Images/SerThirdImg19.jpeg')
        },
       
    },
    {
        id: 20,
        image: {
          png: require('../../../Assests/Images/SerThirdImg20.jpeg')
        },
       
    },
    {
        id: 21,
        image: {
          png: require('../../../Assests/Images/SerThirdImg21.jpeg')
        },
       
    },
    {
        id: 22,
        image: {
          png: require('../../../Assests/Images/SerThirdImg22.jpeg')
        },
       
    },
    {
        id: 23,
        image: {
          png: require('../../../Assests/Images/SerThirdImg23.jpeg')
        },
       
    },
    {
        id: 24,
        image: {
          png: require('../../../Assests/Images/SerThirdImg24.jpeg')
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
                 <Col key={val.id}>
                     <Card style={{ width: '18rem'}} className='my-2'>
                         <Card.Img variant="top" style={{ height: '18rem'}} src={val.image.png} />            
                     </Card>
                     </Col>
          
             )}
               </Row>
               </Container>
 </div>
  )
}

export default SertThirdCard