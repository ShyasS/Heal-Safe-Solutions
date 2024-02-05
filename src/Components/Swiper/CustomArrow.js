import React from 'react'
import { useSwiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft,faCaretRight} from '@fortawesome/free-solid-svg-icons';
const CustomArrow = () => {
    const swiper = useSwiper();
  return (
    <div className = "swiper-nav-buttons">
        <button className = "leftbutt" onClick = {()=>swiper.slidePrev()}><FontAwesomeIcon icon={faCaretLeft} /></button>
        <button className = "RightButt"  onClick = {()=>swiper.slideNext()}><FontAwesomeIcon icon={faCaretRight} /></button>
    </div>
  )
}

export default CustomArrow