import React from 'react'
import './HomeFeatureCategory.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { useId } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomeFeatureCategory() {
  const reduxDataStore = useSelector((state) => {
    return state.dataStore.home
  })
  const buttonRight = document.getElementById('slideRight');
  const buttonLeft = document.getElementById('slideLeft');

  const left = () => {
    document.getElementById('container').scrollLeft -= 200;
  };
  const Right = () => {
    document.getElementById('container').scrollLeft += 200;
  };
  function getRandomColor() {
    let color = "hsl(" + Math.random() * 360 + ", 100%, 97%)";
    return color;
  }

  const featuredCatNavigation = [
    {
      name: "Cake & Milk",
      to: '/products'
    },
    {
      name: "Coffes & Teas",
      to: '/products'
    },
    {
      name: "Pet Foods",
      to: '/products'
    },
    {
      name: "Vegetables",
      to: '/products'
    },
  ]

  return (
    <div className='container-feature-category'>
      <div className='featured-categories-section'>
        <div className='featured-categories-header'>
          <h3 className='featured-categories-title'>
            Featured Categories
          </h3>
          <div className='featured-categories-nav-menu'>
            {featuredCatNavigation.map((index) => (
              <NavLink className="featured-categories-nav-menu-items" to={index.to} key={useId()}>{index.name}</NavLink>
            ))}
          </div>
        </div>
        <div className='featured-categories-item-swipe-btn-container'>
          <button className="featured-categories-item-swipe-btn" id="slideLeft" type="button" onClick={left}>
            <i className='bx bx-left-arrow-alt featured-categories-item-swipe-icon'></i>
          </button>
          <button className="featured-categories-item-swipe-btn" id="slideRight" type="button" onClick={Right}>
            <i className='bx bx-right-arrow-alt featured-categories-item-swipe-icon'></i>
          </button>
        </div>
      </div>
      <div className='featured-categories-item' id="container">
        <div className="product-container" >
          {reduxDataStore.featuredCategories.map((index) => (
            <Card className="featured-categories-item-card" key={useId()} style={{backgroundColor: `${getRandomColor()}`}}>
              <NavLink><Card.Img variant="top" src={index.image} /></NavLink>
              <Card.Body>
              <NavLink><Card.Title className='featured-categories-item-card-title'>{index.title}</Card.Title></NavLink>
                <Card.Subtitle className="featured-categories-item-card-subtitle">{index.subtitle}</Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeFeatureCategory