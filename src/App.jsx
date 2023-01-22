import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar  from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Navbar />}>
                <Route path='/' element={<Hero/>} />       
                <Route path='/about' element={<About/>} />       
                <Route path='/projects' element={<Projects/>} />       
                <Route path='/contact' element={<Contact/>} />       
                <Route path='/blog' element={<Blog/>} />             
            </Route>      
                 
        </Routes>      
    </BrowserRouter>
  )
}

export default App