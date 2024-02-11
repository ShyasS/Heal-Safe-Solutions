import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SerFourthCard = () => {
  const data = [
    {
        id: 1,
        image: {
          png: require('../../../Assests/Images/SerFourthImg1.jpeg')
        },
       
    },
    {
        id: 2,
        image: {  
          png: require('../../../Assests/Images/SerFourthimg2.jpeg')
        },
       
    },
    {
        id: 3,
        image: {
          png: require('../../../Assests/Images/SerFourthimg3.jpeg')
        },
       
    },
    {
        id: 4,
        image: {
      
          png: require('../../../Assests/Images/SerFourthimg4.jpeg')
        },
       
    },
    {
        id: 5,
        image: {
       
          png: require('../../../Assests/Images/SerFourthImg5.jpeg')
        },
       
    },
    {
        id: 6,
        image: {
         
          png: require('../../../Assests/Images/SerFourthImg6.jpeg')
        },
       
    }
  ]
  const [product,setProduct] = useState(data);
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

export default SerFourthCard