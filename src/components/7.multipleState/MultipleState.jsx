import React, { useState } from 'react'
import './MultipleState.css'
const MultipleState = () => {
    const[color,setColor]=useState('white')
    const[model,setModel]=useState('activa')
    const[brand,setBrand]=useState('honda')
    const[year,setYear]=useState('2022')

    const [car,setCar] =useState({
        carColor:'white',
        carModel:'i20',
        carBrand:'hyundai',
        carYear:'2025'

    })
    const change = ()=>{
        setColor('red')
    }
    const onChange =()=>{
    //    setCar({carColor:'red'})
    setCar((prev)=>{
        return {...prev,carColor:'blue'}
    })
    }


  return (
    
    <div>
    
      <h1>7.(I) Multiple State Example</h1>
      <div className="container">
        <div className="content" >
            <div className="color" style={{background:'tomato',padding:'10px 20px',borderRadius:'8px'}}>
            <h2>Buy a scooter</h2>
            <p>color:{color}</p>
            <p>brand:{brand}</p>
            <p>model:{model}</p>
            <p>year:{year}</p>
        <button onClick={change} style={{backgroundColor:'black',borderRadius:'6px'}}>Change color</button>

            </div>
        </div>
      </div>
      <hr/>
      <h1>7.(II) State with object</h1>
      <div className="container">
        <div className="content" >
            <div className="color" style={{background:'tomato',padding:'10px 20px',borderRadius:'8px'}}>
            <h2>Buy a car</h2>
            <p>car_Color: {car.carColor}</p>
            <p>car_brand: {car.carBrand}</p>
            <p>car_model: {car.carModel}</p>
            <p>car_year: {car.carYear}</p>
        <button onClick={onChange} style={{backgroundColor:'black'}}>Change color</button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleState
