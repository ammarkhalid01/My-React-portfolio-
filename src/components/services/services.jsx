import React from 'react';
import './services.css';
import Cards from '../cards/cards';
import HeartEmoji from '../../img/heartemoji.png';
import GlassEmoji from '../../img/glasses.png';
import HumbleEmoji from '../../img/humble.png';
import Resume from '../../img/Facebook.png';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration : 2, type: 'spring'}

  return (
    <div className='services' id='services'>
      <div className='awesome'>
        <span className='services-1' style={{ color: darkMode ? "white" : "" }}>My Awosome</span>
        <span className='services-2'>Services</span>
        <span className='services-3'>
        We make Websites by using machined Skills on my bio data and
          <br />
          We offeres this particular servivces.
        </span>
        <a href={Resume} download>
          <button className='btn service-btn'>Download CV</button>
        </a>
        <div className='blur service-blur1' style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className='card'>
        <motion.div className='card1'
          whileInView={{ left: '25rem' }}
          initial={{ left: '25%' }}
          transition={transition}
        >
          <Cards
            emoji={HeartEmoji}
            heading={'Front-End Web Development'}
            para={'HTML, CSS, Javascript, Boostrap, Jquery, React, Sass/Scss'}
          />
        </motion.div>

        <motion.div className='card2'
        whileInView={{ left: '4rem' }}
          initial={{ left: '25%' }}
          transition={transition}
        >
          <Cards
            emoji={GlassEmoji}
            heading={'Back-End Web Development'}
            para={'Node.js, MongoDB, Express.js, pug, EJS, Wordpress, Git'}
          />
        </motion.div>

        <motion.div className='card3'
        whileInView={{ left: '25rem' }}
          initial={{ left: '25%' }}
          transition={transition}
        >
          <Cards
            emoji={HumbleEmoji}
            heading={'Design'}
            para={'Web design, Figma, HTML, CSS, PhotoShop, Canva'}
          />
        </motion.div>
        <div className='blur service-blur2' style={{ background: "var(--purble)" }}></div>
      </div>
    </div>
  )
}

export default Services;
