import React from 'react'

const MidContact = ({src,title}) => {
  return (
    <button>   
        <img src={src} alt={title + '-logo'}/>
        <p>{title}</p>
    </button>
  )
}

export default MidContact