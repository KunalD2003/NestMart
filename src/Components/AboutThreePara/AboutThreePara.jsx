import React from 'react'
import './AboutThreePara.css'

function AboutThreePara() {
  const threePara = [
    {
      title: "Who we are",
      description: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
    {
      title: "Our history",
      description: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
    {
      title: "Our mission",
      description: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
  ]
  return (
    <div className='about-three-para'>
      {threePara.map((index) => (
        <div className='about-individual-para'>
          <h5 className='about-individual-para-title'>{index.title}</h5>
          <p className='about-individual-para'>{index.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutThreePara