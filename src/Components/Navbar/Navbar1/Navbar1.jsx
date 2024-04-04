import React, { useId, useState } from 'react'
import './Navbar1.css'
import { Link, NavLink } from 'react-router-dom'
import Globe from '../../../assets/globe.png'

function Navbar1() {
  const [navLinkCount, setnavLinkCount] = useState(1)
  const navMenu1 = [
    {
      name: 'About Us',
      to: '/about',
      key: 1
    },
    {
      name: 'My Account',
      to: '#',
      key: 2
    },
    {
      name: 'Wishlist',
      to: '#',
      key: 3
    },
    {
      name: 'Order Tracking',
      to: '#',
      key: 4
    }
  ]
  return (
    <nav className='navbar-1'>
      <div className='navMenu-1'>
        {navMenu1.map((index) => (
          <div key={useId()} className='nav-items'>
            <NavLink to={index.to} className="nav-link-1">{index.name}</NavLink>
            {(index.name != 'Order Tracking') ? <div className='nav-seperator'>|</div> : ""}
          </div>
        ))}
      </div>
      <div className='middle-title'>
        Get great devices up to 50% off <span className='nav-span'>View details</span>
      </div>
      <div className='left-side-nav-1'>
        <div className='nav-help-dial'>
          <div className='need-help'>Need Help? Call Us:</div>
          <div className='nav-dial'>+1800 900</div>
        </div>
        <div className='nav-seperator'>|</div>
        <div className='lang-change'>
          <img src={Globe} alt="" className='nav-globe' />
          <div className='lang'>
            English
            <i className='bx bx-chevron-down'></i>
          </div>
        </div>
        <div className='nav-seperator '>|</div>
        <div className='country-change'>
          <div className='lang'>
            USD
            <i className='bx bx-chevron-down'></i>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar1