import React from 'react'

import data from '../assets/data/data'

import './portfolio.scss'


function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="portfolio__title">{data.portfolio.title}</div>
      <div className="portfolio__content">{data.portfolio.text}</div>
    </div>
  )
}

export default Portfolio