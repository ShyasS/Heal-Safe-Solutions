import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SerAlrmCard = () => {
  const data=[{
    image : {
      png : require('../../../Assests/Images/SerAlrmImg1.jpeg')
    }
  }]
  const [product,setProduct] = useState(data)
  return (
    <div className='mt-3 '>
    <Container>
         <Row  xs={1} sm={3} lg={2} md={1} className='g-4 ms-2 d-flex justify-content-center'>
 {
             product.map((val) =>
                 <Col key={val.id}>
                     <Card className='w-100 h-100' >
                         <Card.Img variant="top" src={val.image.png} />            
                     </Card>
                     </Col>
          
             )}
               </Row>
               </Container>
 </div>
  )
}

export default SerAlrmCard