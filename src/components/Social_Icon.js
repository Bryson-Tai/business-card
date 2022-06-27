import React from 'react'
import Images from '../images'

const SocialIcon = ({social}) => {
  return (
    <div className='socialIcon'>
        <img src={Images.twitter} alt='twitter' className={social}/>
        <img src={Images.facebook} alt='facebook' className={social}/>
        <img src={Images.instagram} alt='instagram' className={social}/>    
        <img src={Images.github} alt='github' className={social}/>
    </div>
  )
}

export default SocialIcon