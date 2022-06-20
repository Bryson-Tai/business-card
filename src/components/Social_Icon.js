import React from 'react'
import Images from '../images'
import fb from '../img/facebook.png'

const SocialIcon = ({social}) => {
  return (
    <div>
        <img src={Images[0].twitter} alt='twitter' className={social}/>
        <img src={Images.facebook} alt='facebook' className={social}/>
        <img src={Images.instagram} alt='instagram' className={social}/>    
        <img src={Images.github} alt='github' className={social}/>
        <img src={fb} alt='github' className={social}/>
    </div>
  )
  console.log(fb)
}

export default SocialIcon