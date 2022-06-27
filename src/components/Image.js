import React from 'react'

const Image = ({src}) => {
  return (
    <div>
        <img src={src} alt="Profile" className='profile'/>
    </div>
  )
}

export default Image