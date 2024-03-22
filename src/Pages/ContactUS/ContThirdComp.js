import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ContThirdComp = () => {
  const data = [
    {
      id : 1,
      image : {
        png : require('../../Assests/Images/AboutFourthImg.1jpg.png')
      },
      title : "Office address",
      desc : "87/1, E.B.Colony, 1st street, Gandhi Nagar, Tirupur - 641 603"
    },
    {
      id : 2,
      image : {
        png : require('../../Assests/Images/AboutFourthImg.2jpg.png')
      },
      title : "Email us",
      desc : "87/1, E.B.Colony, 1st street, Gandhi Nagar, Tirupur - 641 603"
    },
    {
      id : 3,
      image : {
        png : require('../../Assests/Images/AboutFourthImg.3jpg.png')
      },
      title : "Call us",
      desc : "87/1, E.B.Colony, 1st street, Gandhi Nagar, Tirupur - 641 603"
    }
  ]
  const [product,setProduct] = useState(data)
  return (
<div className='mt-5'>
{/* <Container>
            <Row xs={10}  md={3}   className=' ContactThirdRow'>
    {
                product.map((val) =>
                    <Col key={val.id} xs={12} md={3} >
                        <Card className='Contact4Card' >
                            <Card.Img variant="top" className='Contact4Img' src={val.image.png}   />
                            <Card.Body>
                                <Card.Title className='text-center'>{val.title}</Card.Title>
                                <Card.Text className='text-center'>{val.desc}</Card.Text>
                            </Card.Body>
                
                        </Card>
                        </Col>
             
                )}
                  </Row>
                  </Container> */}

<div className='Cont3Cardd'>
<Container>
      <Row className='mx-auto' >
        {
            product.map((val)=>
            <Col xs={12} className='my-3' lg={4} md={6}key={val.id}>
              <Card style={{ width: '18rem',backgroundColor:'#010D14', color:'white'}}>
      <Card.Img variant="top" src={val.image.png} className='h-25 w-25' />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>{val.desc}</Card.Text>
      </Card.Body>
    </Card>
            </Col>
            )
        
      
}
      </Row>
    </Container>  
         
        </div>
        
 </div>
  )
}

export default ContThirdComp