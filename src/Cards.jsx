import React from 'react'
import blos from './blogimg.jpeg'
const Cards = (props) => {
  return (
    <div className='card'>
      <section className='col-left'>
        <img className='card-img' src={blos} alt='bolgimage'></img>
      </section>
      <section className='col-right'>
        <span className='card-country'>{props.item.country}</span>
        <a href='{props.item.googleMapLink}'>view on google maps</a>
        <h3 className='card-country-title'>{props.item.title}</h3>
        <h4 className='card-country-date'>{props.item.date}</h4>
        <p>{props.item.description}</p>
      </section>
    </div>
  )
}

export default Cards
