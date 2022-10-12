import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'


export const Contact = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault(); 
  
      emailjs.sendForm('service_rkca56y', 'template_02wxkrk', form.current, 'LVAIqLhGG9tHaiAIm')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className="contact-form" id="Contact">
        <div className="w-left">
            <div className="span">
                <span 
                  style={{color:darkMode? 'white' : ''}}>
                    Get in touch
                </span>
                <span>Contact me</span>
            </div>
        </div> 
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thanks for contactin me!"}</span>
                <div
                  className="blur c-blur1"
                  style={{ background: "var(--purple)" }}
                ></div>
            </form>
        </div>
    </div>
  )
}
