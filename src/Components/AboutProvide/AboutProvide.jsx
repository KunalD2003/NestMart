import React from 'react'
import './AboutProvide.css'

function AboutProvide() {
  const aboutProvideCard = [
    {
      title: "Best Prices & Offers",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-1.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      title: "Wide Assortment",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-2.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      title: "Free Delivery",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-3.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      title: "Easy Returns",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-4.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      title: "100% Satisfaction",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-5.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      title: "Great Daily Deal",
      imageLink: "https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-6.svg",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
  ]
  return (
    <div className='about-provide'>
      <div className='about-provide-title-div'>
        <h1 className='about-provide-title-div'>What we Provide?</h1>
        <div className='about-provide-title-underline-div'>
          <img src="https://nest-nextjs-13.vercel.app/_next/static/media/wave.a3d21cf0.png" alt="" className='about-provide-title-underline-div' />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default AboutProvide