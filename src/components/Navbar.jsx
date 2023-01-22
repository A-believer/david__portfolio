import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>david</Link></li>
      </ul>

      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
      <Outlet/>
    </nav>
  )
}

export default Navbar;
