import React from 'react'
import './About.css'
import icon from '../assets/icon.png'

const About = () => {
  return (
    <div className='about-page'>
      <h2>About Me</h2>
      <img src={icon} alt="About icon" />
      <p>This is the about page inside the portfolio app.</p>
    </div>
  )
}

export default About
