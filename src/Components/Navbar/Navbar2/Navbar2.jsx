import React from 'react'
import './Navbar2.css'
import NavLogo from '../../../assets/Nav-logo.svg'
import NavCompare from '../../../assets/Reload-sync-icon.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar2() {
  const [compareCount, setCompareCount] = useState('0')
  const navMenu2 = [
    {
      name: 'Compare',
      to: '#',
      isSvg: false,
      className: 'nav-compare-icon',
      count: compareCount,
      img: NavCompare
    },
    {
      name: 'Wishlist',
      to: '#',
      isSvg: true,
      className: 'bx bx-heart nav-icons-2',
      count: compareCount
    },
    {
      name: 'Cart',
      to: '#',
      isSvg: true,
      className: 'bx bx-cart nav-icons-2',
      count: compareCount
    },
    {
      name: 'Account',
      to: '#',
      isSvg: true,
      className: 'bx bx-user nav-icons-2',
      count: null
    },
  ]
  return (
    <div className='navbar-2'>
      <div className='nav-logo-div'>
        <img src="src/assets/Nav-logo.svg" alt="" className='nav-logo-img' />
      </div>
      <div className='search-nav-div'>
        <div className='nav-search-bar'>
          <button className='nav-category-btn'>All Categories</button>
          <input type="text" className='nav-search-input' placeholder='Search' />
          <button className='nav-search-btn'><i className='bx bx-search'></i></button>
        </div>
        <div className='left-side-nav-2'>
          {navMenu2.map((index) => (
            <div className='nav-item' key={index.name}>
              <div className='nav-icon-div'>
                {index.count ? <div className='nav-icon-counter'>{index.count}</div> : ''}
                {index.isSvg ? <i className={index.className}></i> : <img src={index.img} alt="" className={index.className}></img>}
              </div>
              <NavLink className='nav-link-2' to={index.to}>{index.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar2