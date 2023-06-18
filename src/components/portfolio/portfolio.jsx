import React from 'react';
import './portflio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Sidebar from '../../img/1.png';
import HOC from '../../img/2.png';
import MusicApp from '../../img/3.png';
import Ecommerce from '../../img/4.png';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='portfolios' id='portfolio'>
    <span className='porthead1'  style={{color: darkMode? "white": ""}}>Resent Projects</span>
    <span className='porthead2'>Portfolio</span>

    <Swiper 
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolios-slide'
    >
        <SwiperSlide>
            <img src={Sidebar} alt='erorr' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce} alt='erorr' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={HOC} alt='erorr' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MusicApp} alt='erorr' />
        </SwiperSlide>
    </Swiper>
      
    </div>
  )
}

export default Portfolio
