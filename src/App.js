import React from 'react'
import NavBar from './Component/Header/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Project from './Component/Project/Project'
import Services from './Component/Services/Services'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <>
   <NavBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/project' element={<Project />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contact' element={<Contact />} />
   </Routes>
    </>
  )
}

export default App