import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion"



const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
      <nav className='lg:px-[100px] px-[25px] flex justify-between items-center py-[17px] lg:py-[30px] bg-primary'>
        <ul className='font-satisfy font-vb text-secondary text-[30px] leading-[36px] lg:ml-0 ml-[20px]'>
        <li><Link to='/'>David Abolade</Link></li>
        </ul>

        <ul className='hidden lg:flex gap-x-[46px] text-white text-[14px] leading-[17px] font-m'>
          <li><Link to='/about'>About Me</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/contact'>Contact Me</Link></li>
          <li><a href="#">Resume</a></li>  
      </ul>
      
      <AnimatePresence>
       <motion.div
        className='lg:hidden flex flex-col items-center'
        initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <Hamburger
          size={25}
          toggled={toggle}
          toggle={setToggle}
          direction="right"
          duration={0.5}
          distance="lg" 
          easing="ease-in"
          rounded
          label="Show menu"
          hideOutline={false}
            color="#ffffff"
            className='animate-ping'
        />

        <ul className={`${toggle ?'lg:flex' : 'hidden'} gap-x-[46px] text-secondary text-[25px] leading-[35px] font-m absolute right-0 top-20 text-right w-2/5 mr-[25px] gap-10 transition-transform ease-linear delay-1000 duration-1000`}>
          <li className='mb-3'><Link to='/about'>About Me</Link></li>
          <li className='mb-3'><Link to='/projects'>Projects</Link></li>
          <li className='mb-3'><Link to='/blog'>Blog</Link></li>
          <li className='mb-3'><Link to='/contact'>Contact Me</Link></li>
          <li className='mb-3'><a href="#">Resume</a></li>  
      </ul>

      </motion.div> 
      </AnimatePresence>
      



       
        <Outlet />
      </nav>
  )
}

export default Navbar;
