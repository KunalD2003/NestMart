import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar3.css'

function Navbar3() {
  const navMenu3 = [
    {
      name: 'Home',
      isActive: true,
      isDropdown: false,
      to : '/'
    },
    {
      name: 'About',
      isActive: false,
      isDropdown: false,
      to : '/about'
    },
    {
      name: 'Shop',
      isActive: false,
      isDropdown: false,
      to : '/about'
    },
    {
      name: 'Vendors',
      isActive: false,
      isDropdown: false,
      to : '/about'
    },
    {
      name: 'MegaMenu',
      isActive: false,
      isDropdown: true,
      to : '/about'
    },
    {
      name: 'Blog',
      isActive: false,
      isDropdown: false,
      to : '/about'
    },
    {
      name: 'Pages',
      isActive: false,
      isDropdown: false,
      to : '/about'
    },
    {
      name: 'Contact',
      isActive: false,
      isDropdown: false,
      to : '/about'
    },
  ]
  return (
    <div className='navbar-3'>
      <div className='left-side-nav-3'>
        <div className='category-selection-div'>
          <div className='browse-icon-div'>
            <i className='bx bx-grid-alt browse-icon'></i>
            <div className='browse-title'>Browse</div>
          </div>
          <div className='browse-catogories'>
            <div className='nav-categories-3'>All Categories</div>
            <i className='bx bx-chevron-down dropdown-icon'></i>
          </div>
        </div>
        <div className='nav-links-div'>
          <div className='hot-deals-div'>
            <i className='bx bxs-hot'></i>
            <NavLink className='hot-deals'>Hot Deals</NavLink>
          </div>
          {navMenu3.map((index) => (
            <div className='nav-item-3' key={index.name}>
              <NavLink className={`nav-link-3 ${index.isActive ? 'nav-active' : ''}`} to = {`${index.to}`}>{index.name}</NavLink>
              {index.isDropdown ? <i className='bx bx-chevron-down dropdown-icon'></i> : ''}
            </div>
          ))}
        </div>
      </div>
      <div className='right-side-nav-3'>
        <div className='nav-support-icon-div'>
          <i className='bx bx-support nav-support-icon'></i>
        </div>
        <div className='nav-support-content'>
          <div className='nav-support-contact'>
            <h3>1900 - 888</h3>
          </div>
          <div className='nav-support-title'>
            24/7 Support Center
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar3