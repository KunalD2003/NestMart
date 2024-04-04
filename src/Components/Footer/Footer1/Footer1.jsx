import React from 'react'
import { SubscribeInputBtn } from '../../../index.js'
import FooterSubscriptionSideImage from '../../../assets/Footer-subscription-side-image.png'
import './Footer1.css'

function Footer1() {
  return (
    <div className='footer-subscription'>
      <div className='footer-subs-content-section'>
        <div className='footer-subs-text'>
          <h2 className='footer-subs-heading'>Stay home & get your daily needs from our shop</h2>
          <p className='footer-subs-subHeading'>Start Your Daily Shopping with <span className='span-text-footer-1'>Nest Mart</span></p>
        </div>
        <div>
          <SubscribeInputBtn />
        </div>
      </div>
      <div className='footer-subs-side-image'>
        <img src={FooterSubscriptionSideImage} alt="" className='subscription-img'/>
      </div>
    </div>
  )
}

export default Footer1