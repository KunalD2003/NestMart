import React from 'react'
import Card from 'react-bootstrap/Card';
import './AboutProvideCard.css'
import { Link } from 'react-router-dom';

const AboutProvideCard = React.forwardRef(function AboutProvideCard({ title, image, description, cardKey, ...props }, ref) {
  return (
    <Card style={{ width: '19rem' }} className='about-provide-card' key={cardKey}>
      <Card.Img variant="top" src={`${image}`} className='about-provide-card-img' />
      <Card.Body className='about-provide-card-body'>
        <Card.Title className='about-provide-card-title'>{title}</Card.Title>
        <Card.Text className='about-provide-card-description'>
          {description}
        </Card.Text>
        <div className="about-provide-card-link-div">
          <Link to="#" className="about-provide-card-link">Read More</Link>
        </div>
      </Card.Body>
    </Card>
  )
})

export default AboutProvideCard