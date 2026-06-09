import React from 'react'
import './Experience.css'
import js from '../assets/js.png'
import python from '../assets/python.png'
import webdsgn from '../assets/webdsgn.png'

const Experience = () => {
  return (
    <div className='experience-page'>
      <h2>Experience</h2>
      <p>Certificate</p>
      <div className='certificates'>
        <a
          className='certificate-card'
          href='https://www.freecodecamp.org/certification/nikehallberg/scientific-computing-with-python-v7'
          target='_blank'
          rel='noreferrer'
        >
          <img src={python} alt='Scientific Computing with Python certificate' />
        </a>
        <a
          className='certificate-card'
          href='https://www.freecodecamp.org/certification/nikehallberg/javascript-algorithms-and-data-structures-v8'
          target='_blank'
          rel='noreferrer'
        >
          <img src={js} alt='JavaScript Algorithms and Data Structures certificate' />
        </a>
        <a
          className='certificate-card'
          href='https://www.freecodecamp.org/certification/nikehallberg/responsive-web-design'
          target='_blank'
          rel='noreferrer'
        >
          <img src={webdsgn} alt='Responsive Web Design certificate' />
        </a>
      </div>
    </div>
  )
}

export default Experience
