import React, { useState, useEffect } from 'react'
import './styles.css'
const SkillsBar = () => {
    const [planning, setplanning] = useState(0);
    const [design,setDesign] = useState(0);
    const [Development,setDevelopment] = useState(0);
    const [Delivery,setDelivery] = useState(0);
    useEffect(()=>{
         if(planning < 85 ){
            setTimeout(()=>setplanning(prev=>prev+1),50)
         }
         if(design < 95 ){
            setTimeout(()=>setDesign(prev=>prev+1),50)
         }
         if(Development < 75 ){
            setTimeout(()=>setDevelopment(prev=>prev+1),50)
         }
         if(Delivery < 85 ){
            setTimeout(()=>setDelivery(prev=>prev+1),50)
         }

    },[planning,design,Development,Delivery])
    return (
        <div className='mt-5'>
            <h6>Planning</h6>
           <div className="progressbar w-25">
			  <div  style={{
				  height: "100%",
				  width: `${planning}%`,
				  backgroundColor: "#fcb900",
				  transition:"width 0.5s"
			  }}>
                <span className="progressPercent ms-5">{ planning }%</span>
              </div>
			  
            </div >
            <div className='mt-5'>
            <h6>Design</h6>
           <div className="progressbar w-25 ">
			  <div style={{
				  height: "100%",
				  width: `${design}%`,
				  backgroundColor: "#fcb900",
				  transition:"width 0.5s"
			  }}>
                <span className="progressPercent ms-5">{ design }%</span>
              </div>
			  
            </div>
            </div>
  <div className='mt-5'>
            <h6>Development</h6>
           <div className="progressbar w-25">
			  <div style={{
				  height: "100%",
				  width: `${Development}%`,
				  backgroundColor: "#fcb900",
				  transition:"width 0.5s"
			  }}>
                <span className="progressPercent ms-5">{ Development }%</span>
              </div>
			  </div>
            </div>
 <div className='mt-5'>
            <h6>Delivery</h6>
           <div className="progressbar w-25">
			  <div style={{
				  height: "100%",
				  width: `${Delivery}%`,
				  backgroundColor: "#fcb900",
				  transition:"width 0.5s"
			  }}>
  <span className="progressPercent ms-5">{ Delivery }%</span>
              </div>
			</div>
            </div>

        </div>
    )
}

export default SkillsBar