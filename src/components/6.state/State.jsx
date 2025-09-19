import { useState } from 'react'

const State = () => {
  const [color,setColor] = useState('red')

  return (
    <div>
      <h1>6.state example</h1>
      <div className="container">
        <div className="content">
        <h2>what is your favourite color ?  {color}</h2>
        <button style={{fontSize:'18px'}} onClick={()=>setColor('black')}>Change Color</button>
        </div>
      </div>
    </div>
  )
}

export default State
