import React from 'react'
import { useParams } from 'react-router-dom'

const RoutePara = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>user</h1>
      <p>user id is <b>{id}</b></p>
    </div>
  )
}

export default RoutePara
