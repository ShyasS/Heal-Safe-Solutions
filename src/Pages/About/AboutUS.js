import React from 'react'
import AboutFirstComp from './Component/AboutFirstComp'
import AboutSecondComp from './Component/AboutSecondComp'
import AboutThirdComp from './Component/AboutThirdComp'
import SkillsBar from '../../Components/SkillsBar/SkillsBar'
import AboutFourthComp from './Component/AboutFourthComp'
import AboutFifthComp from './Component/AboutFifthComp'
import MainFooter from '../../Layout/Footer/MainFooter'

const AboutUS = () => {
  return (
    <div> 
          <div>
            <AboutFirstComp/>
          </div>
          <div style={{margin:'80px 0'}}>
            <AboutSecondComp/>
          </div>
          <div style={{margin:'80px 0'}}>
            <AboutThirdComp/>
          </div>
          <div style={{margin:'80px 0'}}>
            <AboutFourthComp/>
          </div>
          <div>
            <AboutFifthComp/>
          </div>


    </div>
  )
}

export default AboutUS