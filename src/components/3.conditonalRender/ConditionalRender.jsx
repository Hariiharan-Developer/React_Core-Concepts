import React, { useState } from 'react'
import './ConditionalRender.css'
const ConditionalRender = () => {
    
    const [isDoorOpen,setIsDoorOpen] = useState(false)
    
  
  return (
    <div>
      <h2>3.conditonal rendering</h2>
      <div className="container">
      <div className="content">
        {isDoorOpen?<h2>door is open now</h2>:<h2>door closed</h2>}
        <button onClick={()=>setIsDoorOpen(true)}>Click to open the Door</button>
         <button onClick={()=>setIsDoorOpen(!isDoorOpen)}>Toggle</button>
        </div>
        </div>
        <hr/>
       
    </div>
  )
}

export default ConditionalRender
