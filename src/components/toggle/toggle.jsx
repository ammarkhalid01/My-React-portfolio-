import React from 'react';
import './toggle.css';

import Sun from '@iconscout/react-unicons/icons/uil-sun'; 
import Moon from '@iconscout/react-unicons/icons/uil-moon'; 

import { themeContext } from '../../context';
import { useContext } from 'react';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick= ()=>{
    theme.dispatch({type : 'toggles'});
  }

  return (
    <div className='toggles' onClick={handleClick}>
      <Moon />
      <Sun />
      <div className='toggle-btn'
      style = {darkMode? {left: '2px'} : {right: '2px'}}
      >
      </div>
    </div>
  )
}

export default Toggle;
