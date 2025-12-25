import { useState } from 'react'
import './App.css'
import NavbarComponent from './component/navbar/NavbarComponent'
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom'
import HomePage from './component/home/HomePage'
import Projects from './component/projects/Projects'
import About from './component/about/About'
import ContactSection from './component/contact/ContactSection'

function App() {


  return (
    <>
      <BRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="*"  element={<HomePage/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<ContactSection/>}/>
        </Routes>
      </BRouter>


    </>
  )
}

export default App
