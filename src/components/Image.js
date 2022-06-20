import React from 'react'

const Image = ({profile}) => {
  return (
    <div>
        <img src={profile} alt="Profile" className='profile'/>
    </div>
  )
}

export default Image