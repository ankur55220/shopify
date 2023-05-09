import React from 'react'
import './slider.css'
function Slider({blue,name,per}) {
  return (
    <div className='slider'>
        
        <div className="slider_top">
          
          <div className="slider_top_item">
            {name}
          </div>

          <div className="slider_top_quan">
            {`${per}%`}
          </div>
        </div>

        <div className="slider_bottom">

          {
            blue?
            <div className='slider_blue' style={{width:`${per}%`}}></div>
            :
            <div className='slider_orange' style={{width:`${per}%`}}></div>
          }
         
        </div>

    </div>
  )
}

export default Slider