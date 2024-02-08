import React from 'react'
import Index from '../../Components/Swiper/Index'
import ThirdComp from './HomeAboutUs/ThirdComp'
import FourthComponent from './HomeAboutUs/FourthComponent'
import FifthComponent from './HomeAboutUs/FifthComponent'
import SixthComponent from './HomeAboutUs/SixthComponent'
import SeventhComponent from './HomeAboutUs/SeventhComponent'
import Footer from '../../Layout/Footer/Footer'
import SubFooter from '../../Layout/Footer/SubFooter'

const Home = () => {
  return (
    <div>
        <Index/>
        <div>
          <ThirdComp/>
        </div>
        <div>
          <FourthComponent/>
        </div>
        <div style={{marginTop:'70px'}}>
          <FifthComponent/>
        </div>
        <div style={{marginTop:'70px'}}>
          <SixthComponent/>
        </div>
        <div style={{marginTop:'70px'}}>
          <SeventhComponent/>
        </div>
        <div>
          <Footer/>
        </div>
        <div>
          <SubFooter/>
        </div>

    </div>
  )
}

export default Home