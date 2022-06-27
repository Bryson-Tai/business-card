import React from 'react'
import Images from '../images'

const SocialIcon = () => {
  return (
    <div className='socialIcon'>
        <img src={Images.twitter} alt='twitter'/>
        <img src={Images.facebook} alt='facebook'/>
        <img src={Images.instagram} alt='instagram'/>    
        <img src={Images.github} alt='github'/>
    </div>
  )
}

export default SocialIcon