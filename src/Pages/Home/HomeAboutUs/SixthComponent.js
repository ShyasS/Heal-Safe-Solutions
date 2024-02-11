import React, { useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SixthComponent = () => {
    const data = [
        {
            id: 1,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg1.png')
            }
        },
        {
            id: 2,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg2.png')
            }
        },
        {
            id: 3,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg3.png')
            }
        },
        {
            id: 4,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg4.png')
            }
        },
        {
            id: 5,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg5.png')
            }
        },
        {
            id: 6,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg6.png')
            }
        },
        {
            id: 7,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg7.png')
            }
        },
        {
            id: 8,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg8.png')
            }
        },
        {
            id: 9,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg9.png')
            }
        },
        {
            id: 10,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg10.png')
            }
        },
        {
            id: 1,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg1.png')
            }
        },
        {
            id: 2,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg2.png')
            }
        },
        {
            id: 3,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg3.png')
            }
        },
        {
            id: 4,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg4.png')
            }
        },
        {
            id: 5,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg5.png')
            }
        },
        {
            id: 6,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg6.png')
            }
        },
        {
            id: 7,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg7.png')
            }
        },
        {
            id: 8,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg8.png')
            }
        },
        {
            id: 9,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg9.png')
            }
        },
        {
            id: 10,
            image: {
                png: require('../../../Assests/Images/Home-SixthImg10.png')
            }
        },
    ]

    const [product, setProduct] = useState(data)
    return (
        <div className='HomeSwiper'>
            <Swiper
                slidesPerView={5}
                spaceBetween={100}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                 modules={[Autoplay, Navigation]}
                className="mySwiper"
                style={{ width: '58%', height: '90px',}}
            >
                {
                    product.map((val) =>
                        <div key={val.id}>
                            <SwiperSlide style={{ width: '6rem' }}>
                                <Card style={{ width: '6rem' }}>
                                    <Card.Img variant="top" src={val.image.png} />
                                </Card>
                            </SwiperSlide>
                        </div>

                    )
                }
            </Swiper>

        </div>
    )
}

export default SixthComponent