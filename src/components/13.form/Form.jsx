import React, { useState } from 'react'

const Form = () => {

    const [name,setName] = useState('')
    const [submitName,setSubmitName] = useState('')
    const [fname,setFname] = useState('')
    const [femail,setFemail] = useState('')
    const [fpassword,setFpassword] = useState('')
    const [user,setUser] = useState('')
    const [userInfo,setUserInfo] = useState({})
  
    
    const submit = ()=>{
      event.preventDefault()
     setSubmitName(name)
    }
   

    //multipile form submit function :

    const submitted =(e)=>{
      e.preventDefault()
      setUser(fname)
    }

    //usimg obj submit :
    const userSubmit =(e)=>{
      e.preventDefault()
      console.log(userInfo)
    }

    //handle submit :

    const handleSubmit =(e)=>{
      const uName = e.target.name 
      const value = e.target.value

      setUserInfo((previos)=>{return{...previos,[uName]:value}})
    }
  return (
    <div>
    <h1>13.Form example</h1>
    <div className='container'>
        <div className="content">
            <form action="" onSubmit={submit}>
                <input type="text" placeholder='enter name'  onChange={(event)=>setName(event.target.value)}/>
                <button type='submit'>submit</button>
               { submitName &&<p> hello ! {submitName}</p>}
               
            </form>
             
        </div>
    </div>
    <hr/>
    <h1>multiple input fields</h1>
    <div className="container">
      <div className="content">
        <form action="" onSubmit={submitted}>
    <label htmlFor="">Enter your name <input onChange={(e)=>setFname(e.target.value)} type='text' placeholder='jhon doe' /></label><br/>
    <label htmlFor="">Enter your email <input onChange={(e)=>setFemail(e.target.value)} type='email' placeholder='jhondoe@gmail.com' /></label><br/>
    <label htmlFor="">Enter your password <input onChange={(e)=>setFpassword(e.target.value)} type='password' placeholder='jhondoe' /></label><br/>
    <button type='submit'>submit</button>
    {user &&  <p>hello {user} !!!</p>}
        </form>
      </div>
    </div>

    <hr/>
    <h1>using obj for multiple input</h1>
    <div className="container">
      <div className="content">
        <form action="" onSubmit={userSubmit}>
          <input name='uname'  type="text"  placeholder='enter name' onChange={handleSubmit}/><br/>
          <input name='uemail'  type="text" placeholder='enter email' onChange={handleSubmit}/><br/>
          <input name='upassword'  type="text" placeholder='password' onChange={handleSubmit}/><br/>
          <button>submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Form
