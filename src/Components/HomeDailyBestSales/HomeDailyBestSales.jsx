import React, { useState } from 'react'
import { HomePageNavbar, ProductsCard1 } from '../../index'
import './HomeDailyBestSales.css'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux'

const HomeDailyBestSales = React.forwardRef(function HomeDailyBestSales({ navMenu = [] }, ref) {

  const reduxProductDataBasic = useSelector((state) => {
    return state.dataStore.home.products.productBasic
  })
  const [productCardData, setproductCardData] = useState(reduxProductDataBasic)

  const left1 = () => {
    document.getElementById('container1').scrollLeft -= 200;
  };
  const Right1 = () => {
    document.getElementById('container1').scrollLeft += 200;
  };

  const homeDailyBestSalesFeatured = () => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "Popular Products") {
          arr.push(index)
        }
      })
    })
    setproductCardData(arr)
    // console.log(productCardData);
  }

  const homeDailyBestSalesPopular = () => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "Daily Best Sales Popular") {
          arr.push(index)
        }
      })
    })
    setproductCardData(arr)
    // console.log(productCardData);
  }
  
  const homeDailyBestSalesNewAdded = () => {
    const arr = []
    reduxProductDataBasic.map((index) => {
      index.popularityType.map((popularityType) => {
        if (popularityType === "Daily Best Sales New Added") {
          arr.push(index)
        }
      })
    })
    setproductCardData(arr)
    // console.log(productCardData);
  }

  const bestSalesNavigation = [
    {
      name: "Featured",
      to: '#',
      onclick: homeDailyBestSalesFeatured
    },
    {
      name: "Popular",
      to: '#',
      onclick: homeDailyBestSalesPopular
    },
    {
      name: "New added",
      to: '#',
      onclick: homeDailyBestSalesNewAdded
    },
  ]
  return (
    <div className='daily-best-sales'>
      <HomePageNavbar navMenu={bestSalesNavigation} title="Daily Best Sales" />
      <div className='daily-best-sales-products-container'>
        <div className='daily-best-sales-title-card'>
          <h1 className='daily-best-sales-title'>Bring nature into your home</h1>
          <Button className='daily-best-sales-title-btn'>Shop now <i className='bx bx-right-arrow-alt daily-best-sales-right-icon'></i></Button>
        </div>
        <div className='product-item-swipe-btn-container'>
          <div className='product-item-swipe-btn-subcontainer'>
          <button className="product-item-swipe-btn" id="slideLeft" type="button" onClick={left1}>
            <i className='bx bx-left-arrow-alt product-item-swipe-icon'></i>
          </button>
          <button className="product-item-swipe-btn" id="slideRight" type="button" onClick={Right1}>
            <i className='bx bx-right-arrow-alt product-item-swipe-icon'></i>
          </button>
          </div>
        </div>
        <div className='product-item-container' id="container1">
          <div className="products" >
            {productCardData.map((product) => (
              <ProductsCard1 productImage={`${product.images.frontSide}`} productName={`${product.productName.Name}`} brandName={`${product.brand}`} currentPrice={`${product.price.currentPrice}`} offerPrice={`${product.price.offerPrice}`} tags={product.cardTags} manufacturedBy={`${product.manufacturedBy}`} key={product.id} stockDisplay={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

export default HomeDailyBestSales