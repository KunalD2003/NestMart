import React from 'react'
import './HomeFourCard.css'
import { HomeFourCardProduct } from '../../index'
import { useSelector } from 'react-redux'

function HomeFourCard() {
  const fourCardTitle = [
    {
      name: "Top Selling",
    },
    {
      name: "Trending Products",
    },
    {
      name: "Recently Added",
    },
    {
      name: "Top Rated",
    },
  ]

  const reduxProductDataBasic = useSelector((state) => {
    return state.dataStore.home.products.productBasic
  })
  fourCardTitle.map((index) => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "Trending Products") {
          arr.push(index)
        }
      })
    })
    console.log(arr);
  })
  return (
    <div className='home-four-card-container'>
      {fourCardTitle.map((index) => (
        <div className='home-four-card-individual-container'>
          <div className='home-four-card-title-div'>
            <h4 className='home-four-card-title'>{index.name}</h4>
            <div className='home-four-card-line-div'>

            </div>
          </div>
          <div className='home-four-card-products'>
            {reduxProductDataBasic.map((product) => (
              product.popularityType.map((popularity) => (
                (popularity === index.name) ? (
                  <HomeFourCardProduct productName={product.productName.Name} productImage={product.images.frontSide} currentPrice={product.price.currentPrice} offerPrice={product.price.offerPrice} key={product.id} />
                ) : ''
              ))
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeFourCard