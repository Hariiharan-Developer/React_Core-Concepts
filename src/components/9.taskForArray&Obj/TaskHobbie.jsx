import React, { useState } from 'react'

const TaskHobbie = () => {
    const [count,setCount] = useState(1)
    const [bio,setBio]=useState(
        {
            name:'hari',
            age:25,
            collage:'srmv vas',
            course:'full stack',
            hobbie:['tv', 'reading', 'games' ,'travel'],
            hobbie2 :[]
        }
    )

   const addHobbies =()=>{
    let name =`hobbie ${count}`
   
    setBio((prev) => ({
  ...prev,
  hobbie2: [...prev.hobbie2, name]
}));

    setCount((prev)=> {
        return prev +1
    })
   }

    
  return (
    <div>
      <h1>Task -1</h1>
      <div className="container">
        <h4>displaying array field inside the object</h4>
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
      <hr/>

<h1>task -2</h1>

      <div className="container">
        <h4>add hobbies when clicking the buton</h4>
        <div className="content">
            <h3>Bio</h3>
            <p>name : {bio.name}</p>
            <p>age : {bio.age}</p>
            <p>collage : {bio.collage}</p>
            <p>course : {bio.course}</p>
            <button onClick={addHobbies}>Add Hobbies</button>
            <p>hobbies: {
                bio.hobbie2.map((prev,index)=>{
                    return <li key={index}>{prev}</li>
                })
                }</p>
        </div>
      </div>
    </div>
  )
}

export default TaskHobbie
