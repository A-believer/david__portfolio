import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'


const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Hero/>} />       
            <Route path='/about' element={<About/>} />       
            <Route path='/projects' element={<Projects/>} />       
            <Route path='/contact' element={<Contact/>} />       
            <Route path='/blog' element={<Blog/>} />             
        </Routes>
        <hr className='mx-[25px] md:mx-[100px] bg-secondary h-[2px] border-0'/>
        <Footer/>
      </Router>
      
  )
}

export default App