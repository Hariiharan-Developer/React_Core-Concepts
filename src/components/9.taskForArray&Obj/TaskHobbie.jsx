import React, { useState } from 'react'

const TaskHobbie = () => {
    const [bio,setBio]=useState(
        {
            name:'hari',
            age:25,
            collage:'srmv vas',
            course:'full stack',
            hobbie:['tv', 'reading', 'games' ,'travel']
        }
    )

    const hobbieInput =()=>{
        
    }

    const add = ()=>{

    }
  return (
    <div>
      <h1>Task -1</h1>
      <div className="container">
        <div className="content">
            <h3>Bio</h3>
            <p>name : {bio.name}</p>
            <p>age : {bio.age}</p>
            <p>collage : {bio.collage}</p>
            <p>course : {bio.course}</p>
            <p>hobbie : {bio.hobbie.map((prev,index)=>{ 
               return <li key={index}>{prev}</li>
            
        
            })}</p>

        </div>
      </div>
    </div>
  )
}

export default TaskHobbie
