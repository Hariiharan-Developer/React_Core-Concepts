import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('page rendered')
            setCount((prev)=>prev+1)
    },[])
    const increase=()=>{
        setCount((prev)=>prev+1)
    }
 
  return (
    <div>
      <h2>12.use Effect</h2>
    <div className="container">
        <div className="content">
            <h3>Count :{count}</h3>
            <button onClick={increase}>Increase count</button>
        </div>
    </div>
    </div>
  )
}

export default UseEffect
