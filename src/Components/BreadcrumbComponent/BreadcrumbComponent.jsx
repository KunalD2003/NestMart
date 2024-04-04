import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './BreadcrumbComponent.css'
import { NavLink } from 'react-router-dom';

function BreadcrumbComponent() {
  return (
    <div className='breadcrumb-component'>
      <div className='breadcrumb-link-div'>
        <NavLink className='breadcrumb-link' to="/">Home</NavLink>
      </div>
      <div className='breadcrumb-next-div'><i className='bx bx-chevron-right breadcrumb-next'></i></div>
      <div className='breadcrumb-link-div'>
        About
      </div>
    </div>
  )
}

export default BreadcrumbComponent