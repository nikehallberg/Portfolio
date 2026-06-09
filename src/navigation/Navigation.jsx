import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <ul className='navigation'>
      <li className='nav'>
        <NavLink to='/' end>
          Home
        </NavLink>
      </li>
      <li className='nav'>
        <NavLink to='/about'>
          About
        </NavLink>
      </li>
      <li className='nav'>
        <NavLink to='/experience'>
          Experience
        </NavLink>
      </li>
      <li className='nav'>
        <NavLink to='/projects'>
          Projects
        </NavLink>
      </li>
      <li className='nav'>
        <NavLink to='/contact'>
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation
