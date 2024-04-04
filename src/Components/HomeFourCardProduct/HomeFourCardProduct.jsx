import React from 'react'
import './HomeFourCardProduct.css'

const HomeFourCardProduct = React.forwardRef(function HomeFourCardProduct({ productName = "", productImage = "", currentPrice = "", offerPrice = "", key }, ref) {
  return (
    <div class="card home-four-card-product-container">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={`${productImage}`} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body home-four-card-product-body">
            <h5 class="card-title home-four-card-product-title">{productName}</h5>
            <div className='home-four-card-product-rating-div'>
              <div className='home-four-card-product-rating-image-div'>
                <img src="src/assets/5-star-review.jpg" alt="" className='home-four-card-product-rating' />
              </div>
              <div className='home-four-card-product-total-ratings'>
                (5.0)
              </div>
            </div>
              {(offerPrice) ? (
                <div className='home-four-card-product-price'>
                  <div className='home-four-card-product-offer-price'>
                    {offerPrice}
                  </div>
                  <div className='home-four-card-product-current-price-1'>
                    <s>{currentPrice}</s>
                  </div>
                </div>
              ) :
                (<div className='home-four-card-product-price'>{currentPrice}</div>)}
          </div>
        </div>
      </div>
    </div >
  )
})

export default HomeFourCardProduct