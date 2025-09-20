import React, { useState } from 'react'

const ArrayState = () => {

    const [list,setList] = useState([])
    const [count,setCount] = useState(1)
    const add =()=>{
        let name = `item ${count}`
        setList((prev)=>{
            return[...prev,name]
        })

        setCount((prev)=>{
            return prev+1
        })
        
    }
  return (
    <div>
      <h1>8.Array inside the state</h1>
      <div className="container">
        <div className="content">
            <div className="color" style={{backgroundColor:'red', padding:'10px 10px',borderRadius:'10px',color:'black'}}>     
            <h2>add list </h2>
            <button onClick={add}>Add</button>
            <ul>
               {
                list.map((value,index)=><li key={index}>{value}</li>)
               }
            </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ArrayState
