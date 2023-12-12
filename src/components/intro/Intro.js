import React from 'react'
import bg from  "../../assets/image.png"
import {Link} from "react-scroll"
import btnImg from "../../assets/hireme.png"
import "./intro.css"
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>
                Hello, 
            </span>
            <span>
                 I am <span className='introName'>Satyam Borade</span><br /> Web Developer.
            </span>
            <p className='introPara'>Passionate web developer creating interactive and user-friendly experiences. <br /> Transforming ideas into seamless digital solutions with flair.</p>
            <Link><button className="btn"><img src={btnImg} className="btnImg" alt="Hire me" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro