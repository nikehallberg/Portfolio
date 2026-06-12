import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import qrkod from '../assets/qrkod.png'

const Navigation = () => {
  const [showQRPopup, setShowQRPopup] = useState(false)

  const handleQRClick = () => {
    setShowQRPopup(true)
  }

  const handleClosePopup = () => {
    setShowQRPopup(false)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowQRPopup(false)
    }
  }

  return (
    <>
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
        <li><img src={qrkod} className='qr-code' alt='QR Code' onClick={handleQRClick}></img></li>
      </ul>

      {showQRPopup && (
        <div className='qr-popup-backdrop' onClick={handleBackdropClick}>
          <div className='qr-popup'>
            <button className='close-btn' onClick={handleClosePopup}>✕</button>
            <img src={qrkod} alt='QR Code' className='qr-popup-img' />
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
