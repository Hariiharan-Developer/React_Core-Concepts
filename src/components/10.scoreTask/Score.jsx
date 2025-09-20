import React, { useState } from 'react'

const Score = () => {
    
    const [score,setScore] = useState([
    Math.ceil(Math.random()*6)
    ])
  const changeScore = () => {
    const newScore = Math.ceil(Math.random() * 6) // generate new run
    setScore((prev) => [...prev, newScore])       // add to array
  }

    
  return (
    <div>
      <h1>Task 3 : Score board </h1>
      <div className="container">
        <div className="content">
            <h2>Score : {score.map((value,index)=>
        
                <p key={index}>{value} Run</p>

            )}</h2>
            <button onClick={changeScore} style={{background:'red',color:"black",fontSize:'18px',fontWeight:'500',borderRadius:'8px',border:'1px solid black'}}>Hit a Bat</button>
        </div>
      </div>
    </div>
  )
}

export default Score
