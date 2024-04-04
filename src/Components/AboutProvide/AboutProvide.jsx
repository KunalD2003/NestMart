import React from 'react'
import './AboutProvide.css'
import {useSelector} from 'react-redux'
import {AboutProvideCard} from '../../index'

function AboutProvide() {
  const aboutProvideData = useSelector((state) => {
    return state.dataStore.provide
  })
  console.log(aboutProvideData);
  return (
    <div className='about-provide'>
      <div className='about-provide-title-div'>
        <h1 className='about-provide-title'>What We Provide?</h1>
        <div className='about-provide-title-underline-div'>
          <img src="https://nest-nextjs-13.vercel.app/_next/static/media/wave.a3d21cf0.png" alt="" className='about-provide-title-underline-div' />
        </div>
      </div>
      <div className='about-provide-card-container'>
        {aboutProvideData.map((index) => (
          <AboutProvideCard title = {index.title} image = {index.imageLink} description = {index.description} cardKey={index.id}/>
        ))}
      </div>
    </div>
  )
}

export default AboutProvide