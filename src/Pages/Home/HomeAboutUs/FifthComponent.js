import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const FifthComponent = () => {
    // const data = [
    //     {
    //         id: 1,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg1.png')
    //         },
    //         title: "Quick & Easy"
    //     },
    //     {
    //         id: 2,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg2.png')
    //         },
    //         title: "No-Obligation"
    //     },
    //     {
    //         id: 3,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg3.png')
    //         },
    //         title: "Efficient & Accurate"
    //     },
    //     {
    //         id: 4,
    //         image: {
    //             png: require('../../../Assests/Images/Home-FifthLeftImg4.png')
    //         },
    //         title: "Fast & Accurate"
    //     }
    // ]

    // const [detail, setDetail] = useState([])
    return (
        <div className="HomeFifthLeftComp">
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-lg-5 col-xl-6 col-md-5' >
                        <h2 class=" p-5" style={{ color: 'white' }}>WHY CHOOSE US?</h2>
                        <h2 class=" p-2" style={{ color: 'white' }}>People choose us for our quality craftsmanship!</h2>                   
                        </div>  
                            <div className='col-lg-3 col-xl-2 col-md-3 my-3' >
                                <Card id='HomeFifthCardComp' border="primary" >
                                    <Card.Img variant="top" src={require('../../../Assests/Images/Home-FifthLeftImg1.png')} style={{ height: '60px', width: '60px', margin: ' 10px 50px' }} />
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>Quick & Easy</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card id='HomeFifthCardComp' border="primary" >
                                    <Card.Img variant="top" src={require('../../../Assests/Images/Home-FifthLeftImg2.png')} style={{ height: '60px', width: '60px', margin: ' 6px 50px' }} />
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>Efficient & Accurate</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                </div>
                                <div  className='col-lg-4 col-md-4 my-3'  >
                                <Card border="primary" id='HomeFifthCardComp2'  >
                                    <Card.Img variant="top" id="HomeFifthImage" src={require('../../../Assests/Images/Home-FifthLeftImg3.png')} />
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>No-Obligation</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card border="primary" id='HomeFifthCardComp2'>
                                    <Card.Img variant="top" id="HomeFifthImage" src={require('../../../Assests/Images/Home-FifthLeftImg4.png')}/>
                                    <Card.Body>
                                        <Card.Title style={{ margin: '20px 0' }}><h5>Fast & Accurate</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                </div>
                              
                            </div>             
            </div>
        </div>
    )
}

export default FifthComponent