import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'


const App = () => {
    return (
      <main>
        <Navbar />
        <Hero />
        <About/>
        <Projects />
        <Contact/>
        <Footer/>
      </main>
      
  )
}

export default App