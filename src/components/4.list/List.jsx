import React from 'react'
import './List.css'
const List = () => {
    //1.Checking
    const arrayNum = [1,2,3,4,5,6,7,8,9,0]
    //2.checking
        const objCar = {
        car1: "bmw",
        car2: "ferari",
        car3: "benz",
        car4: "hyundai",
        car5: "skoda",
        };
    //3.checking
    const arrayObj = [
        {brand : 'bmw' , color : 'black'},
        {brand : 'benz' , color : 'silver'},
        {brand : 'vokesWagen', color : 'orange'},
        {brand : 'audi' , color: 'white'},
        {brand : 'skoda' , color : 'red'}
    ]
    //4.checking
    const mixedData = {
        name: 'hari',
        course: 'fullstack',
        education: 'graduate',
        key : ['frontend','backend','database'],
        location : 'tamilnadu'
    }
    //5.checking
    const singleObj = ['tamil','english']
   
  return (
    <div>
      <h2>4.List Example</h2>
      <div className="container">
        <div className="content">
            <h3>plain Array</h3>
        {arrayNum.map((number,index)=><li key={index}>{number}</li>)}
        <hr/>
        <h3>plain object</h3>
        {Object.values(objCar).map((key,value)=><li key={value}>{key}</li>)}
        <hr/>
        <h3>array inside object</h3>
        {arrayObj.map((data,index)=><li key={index}>im {data.brand}  {data.color} car</li>) }
        <hr/>
        <h3>mixed obj & array :</h3>
        {<li>name:{mixedData.name}</li>}
        {<li>course:{mixedData.course}</li>}
        {<li>education:{mixedData.education}</li>}
        <h4>skills:</h4>
        {mixedData.key.map((value,index)=><li key={index}>{value}</li>)}
        <hr/>
        {singleObj.map((value,index)=><li key={index}>{value}</li>)}
        </div>
      </div>
    </div>
  )
}

export default List
