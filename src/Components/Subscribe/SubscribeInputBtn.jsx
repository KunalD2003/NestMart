import React from 'react'
import './Subscribe.css'

function SubscribeInputBtn({...props}) {
  return (
    <div className='subs-input-btn'>
      <div className='paper-plane-icon'>
        <i className='bx bx-paper-plane' style={{ color: "#7e7e7e" }}></i>
      </div>
      <input type="text" placeholder='Your email address' className='email-input'/>
      <button className='subscribe-email-submit-btn'>Subscribe</button>
    </div>
  )
}

export default SubscribeInputBtn