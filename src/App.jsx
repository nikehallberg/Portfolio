import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import About from './about/About.jsx'
import Contacts from './contacts/Contacts.jsx'
import Experience from './experience/Experience.jsx'
import Home from './home/Home.jsx'
import Projects from './projects/Projects.jsx'
import Navigation from './navigation/Navigation.jsx'

const App = () => {
  return (
    <div className='navBar'>
      <Navigation />
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
      </div>
    </div>
  )
}

export default App