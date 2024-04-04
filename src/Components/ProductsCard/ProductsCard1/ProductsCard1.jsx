import React, { useId } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductsCard1.css'
import { Style } from 'react-style-tag';

const ProductsCard1 = React.forwardRef(function ProductsCard1({ productName = "", brandName = "", productImage = "", currentPrice = "", offerPrice = "", tags = [""], manufacturedBy = "", productKey, stockDisplay = false, ...props }, ref) {
  const id = useId()
  return (
    <Card style={{ width: '14.5rem' }} className='product-card' key={productKey}>
      <Card.Header className='product-card-tags'>
        {tags.map((index) => (
          <div key={useId()}>
            {(index === 'Hot' || index === '14%') ? <div className='product-tag' style={{ backgroundColor: "#f74b81" }}>{index}</div> : ''}
            {(index === 'Sale') ? <div className='product-tag' style={{ backgroundColor: "#67bcee" }}>{index}</div> : ''}
            {(index === 'New') ? <div className='product-tag' style={{ backgroundColor: "#3bb77e" }}>{index}</div> : ''}
          </div>
        ))}
      </Card.Header>
      <Card.Img variant="top" src={`${productImage}`} />
      <Card.Body>
        <div className='product-brand'>{brandName}</div>
        <div className='product-card-title-rating-manufacturer'>
          <Card.Title className='product-card-title'>{productName}</Card.Title>
          <div className='product-card-rating-div'>
            <div className='product-card-rating-image-div'>
              <img src="src/assets/5-star-review.jpg" alt="" className='product-card-rating' />
            </div>
            <div className='product-card-total-ratings'>
              (90)
            </div>
          </div>
          <div className='product-card-manufactured-by'>By <span className='product-card-span'>{manufacturedBy}</span></div>
        </div>
        {(!stockDisplay) ? (
          <div className='product-card-price-add-btn'>
            <div>
              {(offerPrice) ? (
                <div className='product-card-price'>
                  <div className='product-card-offer-price'>
                    {offerPrice}
                  </div>
                  <div className='product-card-current-price-1'>
                    <s>{currentPrice}</s>
                  </div>
                </div>
              ) :
                (<div className='product-card-price'>{currentPrice}</div>)}
            </div>
            <Button className='product-card-add-btn' ><i className='bx bx-cart-alt'></i> Add</Button>
          </div>
        ) : (
          <div>
            <div className='product-card-price-2'>{currentPrice}</div>
            <div className='product-card-stock'>
              <div className='product-stock-total'>
                <div className='product-stock-remaining'>

                </div>
              </div>
              <div className='stock-num'>
                Sold: 90/120
              </div>
            </div>
            <Button className='add-to-cart'><i className='bx bx-cart-alt add-to-cart-icon'></i> Add to Cart</Button>
          </div>
        )}


      </Card.Body>
    </Card>
  )
})

export default ProductsCard1