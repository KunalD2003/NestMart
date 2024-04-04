import React, {useId} from 'react'
import './HomePageNavbar.css'

const HomePageNavbar =  React.forwardRef(function HomePageNavbar({navMenu = [],title = "", ...props},ref){
  return (
      <div className='popular-products-header'>
        <h3 className='popular-products-title'>
          {title}
        </h3>
        <div className='popular-products-nav-menu'>
          {navMenu.map((index) => (
            <div className="popular-products-nav-menu-items" key={useId()} onClick={index.onclick}>{index.name}</div>
          ))}
      </div>
    </div>
  )
})

export default HomePageNavbar