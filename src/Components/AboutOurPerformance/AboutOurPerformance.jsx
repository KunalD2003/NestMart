import React from 'react'
import './AboutOurPerformance.css'

function AboutOurPerformance() {
  return (
    <div className='about-our-performance'>
      <div className='about-our-performance-img-div'>
        <img src="https://nest-nextjs-13.vercel.app/assets/imgs/page/about-5.png" alt="" className='about-our-performance-img'/>
      </div>
      <div className='about-our-performance-text-div'>
        <h5 className='about-our-performance-subtitle'>Our performance</h5>
        <h1 className='about-our-performance-title'>Your Partner for e-commerce grocery solution</h1>
        <div className='about-our-performance-para-div'>
          <p className='about-our-performance-para'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
          <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
        </div>
      </div>
    </div>
  )
}

export default AboutOurPerformance