import React, { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './PopularProducts.css'
import { ProductsCard1, HomePageNavbar } from '../../index.js'
import { useSelector } from 'react-redux'

function PopularProducts() {
  const reduxProductDataBasic = useSelector((state) => {
    return state.dataStore.home.products.productBasic
  })
  console.log(reduxProductDataBasic);
  const [productCardData, setproductCardData] = useState(reduxProductDataBasic)

  const popularProduct = () => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "Popular Products") {
          arr.push(index)
        }
      })
    })
    setproductCardData(arr)
    console.log(productCardData);
  }
  const featured = () => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "Featured") {
          arr.push(index)
        }
      })
    })
    setproductCardData(arr)
    // console.log(productCardData);
  }
  const popular = () => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "Popular") {
          arr.push(index)
        }
      })
    })
    setproductCardData(arr)
    // console.log(productCardData);
  }
  const newAdded = () => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "New added") {
          arr.push(index)
        }
      })
    })
    setproductCardData(arr)
    // console.log(productCardData);
  }

  const popularProductsNavigation = [
    {
      name: "All",
      to: '#',
      onclick: popularProduct
    },
    {
      name: "Featured",
      to: '#',
      onclick: featured
    },
    {
      name: "Popular",
      to: '#',
      onclick: popular
    },
    {
      name: "New added",
      to: '#',
      onclick: newAdded
    },
  ]

  return (
    <div className='popular-products-section'>
      <HomePageNavbar navMenu={popularProductsNavigation} title="Popular Products" />
      <div className='popular-products-items-container'>
        {productCardData.map((product) => (
          <ProductsCard1 productImage={`${product.images.frontSide}`} productName={`${product.productName.Name}`} brandName={`${product.brand}`} currentPrice={`${product.price.currentPrice}`} offerPrice={`${product.price.offerPrice}`} tags={product.cardTags} manufacturedBy={`${product.manufacturedBy}`} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default PopularProducts