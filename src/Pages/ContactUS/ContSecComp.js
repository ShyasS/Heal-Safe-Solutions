import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
const ContSecComp = () => {
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
  return (
    <div className='ContMainDiv mt-5'>
             <Container>
      <Row xs={1} md={12}>
        {/* <Col xs={3} sm={3} md={3}> */}
        {/* <div className="">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7965327446627!2d77.31848897452144!3d11.128526052601545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907abb1cffc21%3A0xbb5f457ee5ab3833!2sHEAL%20%26%20SAFE%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1707557385948!5m2!1sen!2sin"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </div> */}

<div>

{/* <div className="googlemap">
        <iframe 
          className="google-iframe"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7965327446823!2d77.31848897452146!3d11.128526052601545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907abb1cffc21%3A0xbb5f457ee5ab3833!2sHEAL%20%26%20SAFE%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1707636553274!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
          frameBorder="0" 
          style={{border:0}} 
          allowFullScreen
          aria-hidden="false" 
          tabIndex="0" 
          />
      </div> */}
    </div>
        {/* </Col> */}
        <Col className='ContCol2Main' xs={10} lg={12} >
                        <h1>Get in touch</h1>
                        <Row>
                            <Col >
                                <input type="text" class="form-control mt-md-5" value={detail.name} name="name" onChange={HandleChange} id="Name" placeholder="Name" />
                                <input type="email" class="form-control mt-md-4" value={detail.email} name="email" onChange={HandleChange} id="Name" placeholder="Email" />
                                {/* <input type="text" class="form-control" value={detail.message} name="message" onChange={HandleChange} id="Name" placeholder="Message" /> */}

                            </Col>
                            <Col>
                                <input type="text" class="form-control mt-md-5" value={detail.website} name="website" onChange={HandleChange} id="Name" placeholder="Your Website" />
                                <input type="number" class="form-control mt-md-4" value={detail.phone} name="phone" onChange={HandleChange} id="Name" placeholder="phone" />

                            </Col>
                            <div class="form-floating">
                                <textarea type="text" class="form-control mt-md-4" value={detail.message} name="message" onChange={HandleChange} placeholder='Message' id="floatingTextarea2" style={{ height: "100px" }}></textarea>

                            </div>
                            <Button className='mx-auto' style={{ width: '150px', padding: '10px 20px', backgroundColor: '#f5c542', borderColor: '#f5c542', margin: '20px 20px', borderRadius: '0px' }}>SUBMIT NOW</Button>
                        </Row>
                    </Col>
        {/* <Col  lg={4} xs={10} style={{height:'550px'}} className="my-md-4">
           <Image src={require('../../Assests/Images/ContSecImg.png')} className='h-100 w-100'/>
        </Col> */}
      </Row>
    </Container>

    </div>
  )
}

export default ContSecComp