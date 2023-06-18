import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='contacts' id='contact'>
      <div className='contact-leftside'>
        <div className='awesome'>
            <span className='contact-head1'  style={{color: darkMode? "white": ""}}>Get in Touch</span>
            <span className='contact-head2'>Contact Me</span>
        </div>
      </div>

      <div className='contact-rightside'>
        <form ref={form} onSubmit={sendEmail}>
            <input className='user' name='user-name' type='text' placeholder='Name'  required/>
            <input className='user' name='user-email' type='email' placeholder='Email'  required/>
            <textarea className='user' name='message' placeholder='Message' required />
            <input className='btn contact-btn' type='submit' />
            <span>{done && "Thanks for contacting Me!"}</span>
            {done && alert("Thanks for contacting Me!")}
        </form>
      </div>
    </div>
  )
}

export default Contact
