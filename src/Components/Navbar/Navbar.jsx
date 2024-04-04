import React from 'react'
import {Navbar1,Navbar2,Navbar3} from '../../index.js'
import './Navbar.css'
function Navbar() {
  return (
    <header className='navbar'>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 className='sticked-navbar'/>
    </header>
  )
}

export default Navbar