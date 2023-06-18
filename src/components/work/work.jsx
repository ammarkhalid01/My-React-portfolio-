import React from 'react';
import './work.css';
import Fiver from '../../img/fiverr.png';
import Upwork from '../../img/Upwork.png';
import Spotify from '../../img/Shopify.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';


function Work() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
      <div className='awesome'>
        <span className='services-1' style={{ color: darkMode ? "white" : "" }}>Work For All These</span>
        <span className='services-2'>Brands & Clients</span>
        <span className='services-3'>
          I am available for freelancing Sites
          <br/>
          You Can Also Find Me on Freelancing Sites Very Soon
          <br/>
          Curently I am working on it.
        </span>
        <button className='btn service-btn'>Hire Now</button>
        <div className='blur service-blur1' style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className='work-rightside'>
        <motion.div className='work-mainCircle'
          whileInView={{ rotate: 0 }}
          initial={{ rotate: 45 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3, type: 'spring' }}
        >
          <div className='work-smallCircle circle1'>
            <img src={Upwork} alt='erorr' />
          </div>
          <div className='work-smallCircle circle2'>
            <img src={Fiver} alt='erorr' />
          </div>
          <div className='work-smallCircle circle3'>
            <img src={Amazon} alt='erorr' />
          </div>
          <div className='work-smallCircle circle4'>
            <img src={Spotify} alt='erorr' />
          </div>
          <div className='work-smallCircle circle5'>
            <img src={Facebook} alt='erorr' />
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Work
