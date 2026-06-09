import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <ul className='navigation'>
      <li className='nav'><Link to='/'>Home</Link></li>
      <li className='nav'><Link to='/about'>About</Link></li>
      <li className='nav'><Link to='/experience'>Experience</Link></li>
      <li className='nav'><Link to='/projects'>Projects</Link></li>
      <li className='nav'><Link to='/contact'>Contact</Link></li>
    </ul>
  )
}

export default Navigation
