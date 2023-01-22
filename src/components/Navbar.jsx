import React from 'react'
import {  Routes, Route, Link, Outlet } from "react-router-dom";

// import Footer from './components/Footer'

const Navbar = () => {

  return (
    <main className='px-[100px] bg-primary w-full h-screen'>
      <nav className='flex justify-between items-center py-[30px] '>
      <ul className='font-satisfy font-vb text-secondary text-[20px] leading-[24px]'>
        <li><Link to='/'>david</Link></li>
      </ul>

      <ul className='flex gap-x-[46px] text-white text-[14px] leading-[17px] font-m'>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
        <li><a href="#">Resume</a></li>  
      </ul>
      <Outlet />
      </nav>
    </main>
      
  )
}

export default Navbar;
