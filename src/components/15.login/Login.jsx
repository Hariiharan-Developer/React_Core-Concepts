import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigated = useNavigate()

    const navigate = ()=>{
        navigated('../dashboard')
    }
  return (
    <div>
      <h1>Login form</h1>
      <button onClick={navigate}> login</button>
    </div>
  )
}

export default Login
