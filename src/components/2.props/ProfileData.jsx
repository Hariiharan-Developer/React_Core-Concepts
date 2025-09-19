import React from 'react'

const ProfileData = (props) => {
    const {name,role,location} = props
  return (
    <>
    <div className='example'>
      <h2>Example 1 :</h2>
      <ol className='list'>
      <h2>Profile data</h2>
      <p>name : {name}</p>
      </ol>
    </div>
    <hr />

    <div className="example">
        <h2>Example-2</h2>
    <ol className='list'>
      <h2>Profile data</h2>
      <p>name : {name}</p>
      <p>role : {role}</p>
      <p>location : {location}</p>
      </ol>
    </div>
    <hr/>
    </>
  )
}

export default ProfileData
