import React from 'react';
import './nav.css'
import Toggle from '../toggle/toggle';
import { themeContext } from '../../context';
import { useContext } from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <nav className='navbar'>
      <div className='nav-leftside'>
        <h2 className='nav-name'>Ammar Khalid</h2>
        <Toggle />
      </div>
      <div className='nav-rightside'>
        <div className='nav-list'>
            <ul>
            <Link spy={true} to={'navbar'} smooth={true}>
                <li><a style={{ color: darkMode ? "white": ""}} href='abc.html'>HOME</a></li>
            </Link>
            <Link spy={true} to={'experience'} smooth={true}>
                <li><a style={{ color: darkMode ? "white": ""}} href='abc.html'>ABOUT</a></li>
                </Link>
                <Link spy={true} to={'services'} smooth={true}>
                <li><a style={{ color: darkMode ? "white": ""}} href='abc.html'>Services</a></li>
                </Link>
                <Link spy={true} to={'portfolio'} smooth={true}>
                <li><a style={{ color: darkMode ? "white": ""}} href='abc.html'>PORTFOLIO</a></li>
                </Link>
            </ul>
        </div>
        <Link spy={true} to={'contact'} smooth={true}>
        <button className='btn nav-btn'>Contact</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar; 


