import React from 'react'

const MidContact = ({icon,title}) => {
  return (
    <div>   
        <img src={icon} alt={title + ' logo'}/>
        <p>{title}</p>
    </div>
  )
}

export default MidContact