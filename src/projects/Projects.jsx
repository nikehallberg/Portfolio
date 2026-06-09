import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-page'>
      <h2>Projects</h2>
      <p>Projects.</p>
      <ul className='projects-carousel'>
        <li data-acc-name="1">
          <h2>Page 1</h2>
        </li>
        <li data-acc-name="2">
          <h2>Page 2</h2>
        </li>
        <li data-acc-name="3">
          <h2>Page 3</h2>
        </li>
        <li data-acc-name="4">
          <h2>Page 4</h2>
        </li>
      </ul>
    </div>
  )
}

export default Projects
