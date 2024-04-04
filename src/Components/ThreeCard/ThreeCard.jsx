import React, {useId} from 'react'
import './ThreeCard.css'
import Button from 'react-bootstrap/Button';

const ThreeCard = React.forwardRef(function ThreeCard({ title = "HomeBanner", subtitle = "subtitle here", className = '', coverImage = "", ...props }, ref) {
  const id = useId()
  return (
    <div className='three-card-subscription' style={{ background: `url(${coverImage})`, backgroundSize: "100% 100%"}} id={id}>
      <div className='three-card-content-section'>
        <div className='three-card-text'>
          <h4 className='three-card-heading' id={id}>{title}</h4>
        </div>
        <div className='sub-btn'>
          <Button className='shop-now-btn'>Shop now<i className='bx bx-right-arrow-alt shop-now-btn-icon'></i></Button>
        </div>
      </div>
    </div>
  )
})

export default ThreeCard