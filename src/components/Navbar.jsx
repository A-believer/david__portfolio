import React from 'react'
import { Link, Outlet } from "react-router-dom";

// import Footer from './components/Footer'

const Navbar = () => {

  return (
      <nav className='px-[100px] flex justify-between items-center py-[30px] bg-primary'>
        <ul className='font-satisfy font-vb text-secondary text-[30px] leading-[36px]'>
          <li><Link to='/'>david abolade</Link></li>
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
  )
}

export default Navbar;
