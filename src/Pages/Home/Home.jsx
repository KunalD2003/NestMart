import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { HomeBanner, HomeFeatureCategory, ThreeCard, PopularProducts, HomeDailyBestSales, HomeFourCard } from '../../index.js'
import HomeCoverImg1 from '../../assets/Home/Home-Banner-1.png'
import HomeCoverImg2 from '../../assets/Home/Home-Banner-2.png'
import { useSelector } from 'react-redux'


function Home() {
  

  return (
    <div className='Home-page'>
      <div className='Home-container'>
        <div className='Home-Banner-Crousel-Container'>
          <Carousel>
            <Carousel.Item>
              <HomeBanner coverImage={HomeCoverImg1} title="Don't miss amazing on grocery deals" subtitle="Sign up for the daily newsletter" />
            </Carousel.Item>
            <Carousel.Item>
              <HomeBanner coverImage={HomeCoverImg2} title="Fresh Vegetables with Big discount" subtitle="Save up to 50% off on your first order" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className='Home-container'>
        <HomeFeatureCategory />
      </div>
      <div className='Home-container three-card'>
        <ThreeCard coverImage='/src/assets/Home/Three-card-banner-1.png' title="Everyday Fresh & Clean with Our Products" subtitle="Sign up for the daily newsletter" />
        <ThreeCard coverImage='/src/assets/Home/Three-card-banner-2.png' title="Make your Breakfast Healthy and Easy" subtitle="Sign up for the daily newsletter" />
        <ThreeCard coverImage='/src/assets/Home/Three-card-banner-3.png' title="The best Organic Products Online" subtitle="Sign up for the daily newsletter" />
      </div>
      <div className='Home-container'>
        <PopularProducts />
      </div>
      <div className='Home-container'>
        <HomeDailyBestSales />
      </div>
      <div className='Home-container'>
        <div className='top-selling'>
          <HomeFourCard />
        </div>
      </div>
    </div>
  )
}

export default Home