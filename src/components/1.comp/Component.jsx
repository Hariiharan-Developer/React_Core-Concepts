import React from 'react'
import './Component.css'
import Explanation from './Explanation'
import Hall from './Hall'
import Kitchen from './Kitchen'
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

export default Component
