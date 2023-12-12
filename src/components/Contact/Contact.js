import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import insta from "../../assets/instagram.png"
import lin from "../../assets/Linkedin.png"
import twit from "../../assets/twitter.png"
import face from "../../assets/facebook-icon.png"

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contactSec">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form  className="contactForm" action="submit" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="text" className="email" placeholder='Your Email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/satyam-borade-049685203/" ><img className="link" src={lin} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/BoradeSatyam"><img className="link" src={twit} alt="" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/satyam_s_b/"><img  className="link" src={insta} alt="" /></a>
                    
                    <img className="link" src={face} alt="" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact