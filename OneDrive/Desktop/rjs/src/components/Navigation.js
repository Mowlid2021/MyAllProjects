import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './home/Home'
import CourseProject from './courseProject/CourseProject'
import Post from './postProject/Post'
import EHeader from './EProject/EHeader'

function Navigation({ setUser }) {
  return (
    <div>
        <div className="titleNave">
          <span className='logo'> Mowlid's Logo </span>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/EHeader" >EHeader</NavLink>
          <NavLink to="/Post" >PostProject</NavLink>
          <NavLink to="/courseProject" >CourseProject</NavLink>
          <span className='logOut' onClick={()=> setUser("")}>LogOut</span>
        </div> 
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/EHeader' element={<EHeader />}/>
            <Route path='/Post' element={<Post />}/>
            <Route path='/CourseProject' element={<CourseProject />}/>
        </Routes>
    </div>

  )
}

export default Navigation