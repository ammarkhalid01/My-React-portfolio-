import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <div className='experiences' id='experience'>
        <div className='acievment'>
        <div className='circle'>3+</div>
        <span>Months</span>
        <span className='circle-orange'>Experience</span>
        </div>
        <div className='acievment'>
        <div className='circle'>10+</div>
        <span>Completed</span>
        <span className='circle-orange'>Projects</span>
        </div>
        <div className='acievment'>
        <div className='circle'>0+</div>
        <span>Companies</span>
        <span className='circle-orange'>Work</span>
        </div>
    </div>
  )
}

export default Experience;
