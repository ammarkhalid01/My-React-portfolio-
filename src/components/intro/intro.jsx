import React from 'react';
import './intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/mypic2.png';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='intro'>
      <div className='intro-leftside'>
        <div className='intro-name'>
            <span className='intros-1' style={{color: darkMode? "white": ""}}>MY NAME IS</span>
            <span className='intros-2'>AMMAR KHALID</span>
            <span className='intros-3'>I am a full-stack web developer. I have experience with both front-end and back-end development, as well as experience with a variety of programming languages. I am a quick learner and have a knack for problem-solving, which makes me an asset on any development team.</span>
        </div>
        <button className='btn intro-btn'>Hire Me</button>
        <div className='intro-sociallinks'>
        <a href='https://github.com/CodeofCat' target='blank'>
          <img className='introleft-img' src={Github} alt='erorr'/>
        </a>
        <a href='https://www.linkedin.com/in/ammar-khalid01/' target='blank'>
          <img className='introleft-img' src={LinkedIn} alt='erorr'/>
        </a>
        <a href='https://www.instagram.com/ammar_khalid02/' target='blank'>
          <img className='introleft-img' src={Instagram} alt='erorr'/>
        </a>
        </div>
      </div>
      <div className='intro-rightside'>
        <img className='introright-img-1 introright-img' src={Vector1} alt='erorr'/>
        <img className='introright-img-2 introright-img' src={Vector2} alt='erorr'/>
        <img className='introright-img-3 introright-img' src={Boy} alt='erorr'/>
        <div className='blur' style={{background: "rgb(238, 210, 255)"}}></div>
        <div className='blur' style={{background: "#c1f5ff", width: "21rem", height: "11rem", top: "17rem", left: "-9rem"}}></div>
      </div>
    </section>
  )
}

export default Intro;
