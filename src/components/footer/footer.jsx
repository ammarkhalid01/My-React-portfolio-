import React from 'react';
import './footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className='footers'>
    <img src={Wave} alt='erorr' style={{width:"100%"}}/>
      <div className='footer-content'>
        <span className='foter-mail'>ammarkhalid574@gmail.com</span>
        <div className='footer-icons'>
            <a href='https://www.instagram.com/ammar_khalid02/' target='blank'>
            <Insta className="icons-f" color='white' size='3rem'/>
            </a>

            <a href='https://www.facebook.com/profile.php?id=100090680370416' target='blank'>
            <Facebook className="icons-f" color='white' size='3rem'/>
            </a>

            <a href='https://github.com/CodeofCat' target='blank'>
            <Github className="icons-f" color='white' size='3rem'/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
