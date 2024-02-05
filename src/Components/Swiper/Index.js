import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CustomArrow from '../Swiper/CustomArrow'
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Index = () => {
  return (
      <div>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require('../../Assests/Images/Image1.jpg')}/></SwiperSlide>
        <SwiperSlide><img src={require('../../Assests/Images/Image2.jpg')}/></SwiperSlide>
        <SwiperSlide><img src={require('../../Assests/Images/Image3.jpg')}/></SwiperSlide>
        <SwiperSlide><img src={require('../../Assests/Images/Image4.jpg')}/></SwiperSlide>
        <CustomArrow/>
      </Swiper>  
      </div>
  )
}

export default Index;