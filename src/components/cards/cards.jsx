import React from 'react';
import './cards.css';


function Cards(props) {
  return (
    <div className='cards'>
      <img  className='card-img'src={props.emoji} alt='erorr'/>
      <span className='card-heading'>{props.heading}</span>
      <span className='card-para'>{props.para}</span>
      <button className='card-btn'>Learn More</button>
    </div>
  )
}

export default Cards;
