import React from 'react'
import './About.css'
import { BreadcrumbComponent, AboutDescription, AboutProvide, AboutOurPerformance, AboutThreePara} from '../../index'

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
      <div className='about-our-performance-outer-div'>
        <AboutOurPerformance />
        <AboutThreePara />
      </div>
    </div>
  )
}

export default About