import React from 'react'

const MidDesc = ({title, desc}) => {
  return (
        <div className='desc-box'>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>     
  )
}

export default MidDesc