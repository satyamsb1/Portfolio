import React from 'react'
import "./Work.css"
function Works() {
  return (
    <div className="project-cards-container" id="project">
      <div className="project-card">
        <h3>Animoto Clone</h3>
        <p>I employed React in the development of this project, enabling seamless navigation across diverse sections of the webpage. Utilizing React Router and Tailwind CSS contributed to an enhanced user experience..</p>
        <a href="https://animoto-clone-satyamsb1.vercel.app/" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>Food Mania App</h3>
        <p>Engineered a sophisticated food delivery web application leveraging ReactJS. Implemented custom routes with React-router and integrated live Swiggy API. Utilized React hooks and optimized the application for production using Parcel bundler. Technology stack includes JS, React, TailwindCSS, HTML, and JSX.</p>
        <a href="https://github.com/satyamsb1/React-WebSeries" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>Full Stack Blogging Website</h3>
        <p>Designed and implemented a dynamic Blogging Website, empowering users to publish and share their blogs. Utilized EJS for dynamic web pages alongside a comprehensive technology stack, including HTML, CSS, JS, Bootstrap, Node.js, and Express.js.</p>
        <a href="https://github.com/satyamsb1/Blogging-Website" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>Weather Application</h3>
        <p>Crafted a responsive web application delivering real-time weather updates for global locations. Leveraged the OpenWeather API platform to enable location-based searches. Employed a technology stack encompassing HTML, CSS, Bootstrap, JS, Node.js, Express.js, and API integration.</p>
        <a href="https://github.com/satyamsb1/weather-webapp" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  )
}

export default Works