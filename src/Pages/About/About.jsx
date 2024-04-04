import React from 'react'
import './About.css'
import { BreadcrumbComponent, AboutDescription,AboutProvide } from '../../index'

function About() {
  return (
    <div className='about'>
      <div>
        <BreadcrumbComponent />
      </div>
      <div className='about-description-outer-div'>
        <AboutDescription />
      </div>
      <div className='about-provide-outer-div'>
        <AboutProvide />
      </div>
    </div>
  )
}

export default About