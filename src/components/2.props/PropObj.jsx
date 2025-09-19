import React from 'react'

const PropObj = (props) => {
    const {data} = props
    const {name,course,education,location,experience} = data
  return (
    <div className='example'>

      <h2>Object - Prop ( Example-3) </h2>
      <ol className='list'>
      <p>name:{name}</p>
      <p>course:{course}</p>
      <p>education:{education}</p>
      <p>location:{location}</p>
      <p>experience:{experience}</p>
   </ol>
    </div>
  )
}

export default PropObj
