import React, {useId} from 'react'
import {SubscribeInputBtn} from '../../index.js'
import './HomeBanner.css'

const HomeBanner = React.forwardRef(function HomeBanner({title ="HomeBanner", subtitle = "subtitle here", className = '', coverImage = "", ...props}, ref) {
  const id = useId()
  return (
    <div className='home-banner-subscription' style={{background: `url(${coverImage}) no-repeat center center/cover`}} id={id}>
      <div className='home-banner-subs-content-section'>
        <div className='home-banner-subs-text'>
          <h2 className='home-banner-subs-heading' id={id}>{title}</h2>
          <p className='home-banner-subs-subHeading' id={id}>{subtitle}</p>
        </div>
        <div className='sub-btn'>
          <SubscribeInputBtn id={id}/>
        </div>
      </div>
    </div>
  )
})

export default HomeBanner