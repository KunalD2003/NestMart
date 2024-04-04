import React from 'react'
import './AboutDescription.css'

function AboutDescription() {
  return (
    <div className='about-description'>
      <div className='about-description-img-div'>
        <img src="https://nest-nextjs-13.vercel.app/assets/imgs/page/about-1.png" alt="" className='about-description-img' />
      </div>
      <div className='about-description-title-para-div'>
        <div className='about-description-title-div'>
          <h1 className='about-description-title'>Welcome to Nest</h1>
        </div>
        <div className='about-description-para-div'>
          <div className='about-description-para'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptate sed at nobis possimus distinctio unde? Eius similique molestias, asperiores quod maiores aliquid ipsam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa repellat ipsa beatae laboriosam corrupti eos sequi?</p>
          </div>
          <div className='about-description-para'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro rem dolorem nesciunt at? Distinctio dignissimos magnam dolor eligendi, deserunt facere deleniti facilis odio repudiandae cupiditate delectus reiciendis? Suscipit repellendus quod amet perferendis facilis non, vero atque nam fugiat tempore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis officia deserunt temporibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDescription