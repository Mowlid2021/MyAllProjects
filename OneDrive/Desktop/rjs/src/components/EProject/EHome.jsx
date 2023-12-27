import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import About from './About'

function EHome() {
  return (
    <div>
        <div>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/About">About</NavLink>
        </div>
        <Routes>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/About' element={<About />}/>
        </Routes>
    </div>
  )
}

export default EHome