import React from 'react';
import "./skills.css";
import Reactlogo from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import js from "../../assets/js.png";
function Skills() {
  return (
    <section id="skills">
        <span className="skillTitle">
            Skills I have
        </span>
        <span className='skillDesc'>Experienced front-end developer skilled in React.js, proficient in C++, adept at implementing data structures, and well-versed in database management. Passionate about crafting engaging and efficient web solutions.</span>
        <div className="skillBars">
            <div className="skillBar">
               <img src={js} alt="" className="skillBarImg" />
               <div className="skillBarText">
                <h2>Javascript</h2>
                <p>Passionate JavaScript developer creating dynamic web experiences with a focus on seamless user interactions and performance optimization.  </p>
               </div>
            </div>
            <div className="skillBar">
               <img src={Reactlogo} alt="" className="skillBarImg" />
               <div className="skillBarText">
                <h2>ReactJS</h2>
                <p>Skilled in Reactjs and work on complex projects. Have an experience of working on live swiggy data.  </p>
               </div>
            </div>
            <div className="skillBar">
               <img src={WebDesign} alt="" className="skillBarImg" />
               <div className="skillBarText">
                <h2>C++</h2>
                <p>Con work on object oriented languages like C/C++ and Java. I have solved around 400+ DSA questions on various coding platforms</p>
               </div>
            </div>
            <div className="skillBar">
               <img src={AppDesign} alt="" className="skillBarImg" />
               <div className="skillBarText">
                <h2>Databases</h2>
                <p>Have vast grip over databases such as MongoDB and SQL</p>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Skills