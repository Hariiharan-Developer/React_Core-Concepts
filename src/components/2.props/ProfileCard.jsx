import React from 'react'
import './ProfileCard.css'
import ProfileData from './ProfileData'
import PropObj from './PropObj'
const ProfileCard = () => {
    const data = {
        name:'hariharan',
        education:'bsc-cs',
        course:'full stack developer (MERN)',
        experience:'fresher',
        location:'coimbatore',

    }
    const name = 'hariharan'
    const role = 'full stack dev'
  return (
    <div>
      <h1>2.Prop's Examples : with profile card</h1>
      <ProfileData name ={name} role={role} location={'coimbatore'}/>
      <PropObj data={data}/>
    </div>

  )
}

export default ProfileCard
