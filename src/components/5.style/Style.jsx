import React from 'react'

const Style = () => {
   const Header = {
    backgroundColor:'yellow',
    borderRadius:'8px',
    textAlign:'center',
    color:'black',
    border:'2px solid white'
   }
  return (
    <div>
      <h1>5.style example </h1>
      <div className="container">
        <div className="content" style={{background:'orange'}}>

            <h4 style={{backgroundColor:'red',width:'100px',textAlign:'center',padding:'10px10px',borderRadius:'6px'}}>heading</h4>
            <p>inline style example in the heading</p>
        </div>
      </div>

      <div className="container">
        <div className="content" style={{background:"black"}}>
            <h1 style={Header}>heading</h1>
            <h2 style={Header}>heading</h2>
            <h3 style={Header}>heading</h3>
            <h4 style={Header}>heading</h4>
            <h5 style={Header}>heading</h5>
            <h6 style={Header}>heading</h6>
        </div>
      </div>
    </div>
  )
}

export default Style
