import React from 'react'
import './Component.css'
const Component = () => {
  return (
    <div className='content'>
        <div className="component">
            <h1> 1.Example For Components</h1>
            <p>Main Component</p>
            <h3>Name: Component</h3>
            <h3>This text & contents are Example of Components: </h3>
        <Explanation/>
        <h1>Hey who here ? inside my house</h1>
        <ol >
            <li> <Hall/></li>
            <li><Kitchen/></li>
        </ol>
       
        
        </div>
      
    </div>
  )
}

const Explanation = ()=>{
    return(
        <div className='explanation'>
        <h2>Name:Explanation</h2>
        <p>Component-1</p>
        <h4>The HALL & KITCHEN are the components those 2 components are mountend inside the Component Element</h4>
        </div>
    )
}



const Hall = ()=>{
    return(
        <div className='hall'>
        <h2>Name:Hall</h2>
        <p>Component-2</p>
        <p>Hello i'm HALL visit me , to spent time with family</p>
        </div>
    )
}

const Kitchen = ()=>{
    return(
        <div className='kitchen'>
        <h2>Name:Kitchen</h2>
        <p>Component-3</p>
        <p>helo this is kitchen , make a dining full the responce is mine</p>
        </div>
    )
}

export default Component
