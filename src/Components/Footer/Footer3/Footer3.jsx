import React from 'react'
import Navlogo from '../../../assets/Nav-logo.svg'
import { NavLink } from 'react-router-dom'
import './Footer3.css'
import appStore from '../../../assets/app-store.jpg'
import googlePlay from '../../../assets/google-play.jpg'
import paymentMethod from '../../../assets/payment-method.png'

function Footer3() {
  const reachUs = [
    {
      title: 'Address',
      val: '5171 W Campbell Ave undefined Kent, Utah 53127 United States',
      isLink: false,
      className: 'bx bx-map',
    },
    {
      title: 'Call Us',
      val: '(+91) - 540-025-124553',
      isLink: false,
      className: 'bx bx-support',
    },
    {
      title: 'Email',
      val: 'sale@Nest.com',
      isLink: true,
      className: 'bx bx-paper-plane'
    },
    {
      title: 'Hours',
      val: '10:00 - 18:00, Mon - Sat',
      isLink: false,
      className: 'bx bx-stopwatch'
    },
  ]
  const footerNavItems = [
    {
      title: 'Company',
      items: [
        {
          name: 'About Us',
          to: '#'
        },
        {
          name: 'Delivery Information',
          to: '#'
        },
        {
          name: 'Privacy Policy',
          to: '#'
        },
        {
          name: 'Terms & Conditions',
          to: '#'
        },
        {
          name: 'Contact Us',
          to: '#'
        },
        {
          name: 'Support Center',
          to: '#'
        },
        {
          name: 'Careers',
          to: '#'
        },
      ]
    },
    {
      title: 'Account',
      items: [
        {
          name: 'Sign In',
          to: '#'
        },
        {
          name: 'View Cart',
          to: '#'
        },
        {
          name: 'My Wishlist',
          to: '#'
        },
        {
          name: 'Track My Order',
          to: '#'
        },
        {
          name: 'Help Ticket',
          to: '#'
        },
        {
          name: 'Shipping Details',
          to: '#'
        },
        {
          name: 'Compare products',
          to: '#'
        },
      ]
    },
    {
      title: 'Corporate',
      items: [
        {
          name: 'Become a Vendor',
          to: '#'
        },
        {
          name: 'Affiliate Program',
          to: '#'
        },
        {
          name: 'Farm Business',
          to: '#'
        },
        {
          name: 'Farm Careers',
          to: '#'
        },
        {
          name: 'Our Suppliers',
          to: '#'
        },
        {
          name: 'Accessibility',
          to: '#'
        },
        {
          name: 'Promotions',
          to: '#'
        },
      ]
    },
    {
      title: 'Popular',
      items: [
        {
          name: 'Milk & Flavoured Milk',
          to: '#'
        },
        {
          name: 'Butter and Margarine',
          to: '#'
        },
        {
          name: 'Eggs Substitutes',
          to: '#'
        },
        {
          name: 'Marmalades',
          to: '#'
        },
        {
          name: 'Sour Cream and Dips',
          to: '#'
        },
        {
          name: 'Tea & Kombucha',
          to: '#'
        },
        {
          name: 'Cheese',
          to: '#'
        },
      ]
    },
  ]


  return (
    <div className='footer-3'>
      <div className='footer-logo-reach'>
        <div className='footer-logo'>
          <div className='footer-logo-image-div'>
            <img src={Navlogo} alt="" className='footer-logo-img' />
          </div>
          <p className='footer-logo-para'>Awesome grocery store website template</p>
        </div>
        <div className='reach-section'>
          {reachUs.map((index) => (
            <div className='reach-item' key={index.title}>
              <div className='reach-title-section'>
                <i className={`${index.className} reach-title-icon `}></i>
                <div className='reach-title'>{index.title}: </div>
              </div>
              {index.isLink ? <NavLink className='reach-title email-link' to='mailto: sale@Nest.com'>{index.val}</NavLink> : <div className='reach-title'>{index.val}</div>}
            </div>
          ))}
        </div>
      </div>
      {footerNavItems.map((index) => (
        <div className='footer-nav-item' key={index.title}>
          <h4 className='footer-nav-item-title'>{index.title}</h4>
          <div className='footer-nav-item-list'>
            {index.items.map((footerNavItems) => (
              <NavLink to={footerNavItems.to} className='footer-nav-item-content' key={footerNavItems.name}>{footerNavItems.name}</NavLink>
            ))}
          </div>
        </div>
      ))}
      <div className='install-payment-div'>
        <h4 className='install-title'>Install App</h4>
        <div className='install-subtitle-img-div'>
          <p className='install-subtitle-para'>From App Store or Play Store</p>
          <div className='app-play-store-div'>
            <img src={appStore} alt="" className='app-play-store-img'/>
            <img src={googlePlay} alt="" className='app-play-store-img'/>
          </div>
        </div>
        <div className='footer-payment-div'>
          <p className='footer-payment-text'>Secured Payment Gateways</p>
          <img src={paymentMethod} alt="" className='footer-payment-img'/>
        </div>
      </div>
    </div>
  )
}

export default Footer3