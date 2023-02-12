import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion"


const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    
      className='lg:px-[100px] px-[25px] flex justify-between items-center pt-[17px] lg:pt-[30px] bg-primary z-10 shadow-lg shadow-grey-900'>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
          }}
        className='font-satisfy font-vb text-secondary text-[28px] leading-[30px] lg:ml-0 ml-[20px] animate-pulse'><Link to='/'>David Abolade</Link></motion.p>
       

        <ul className='hidden lg:flex gap-x-[46px] text-white text-[14px] leading-[17px] font-m'>
          <motion.li 
          variants={itemVariants}
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] '><Link to='/about'>About Me</Link></motion.li>
          <motion.li 
          variants={itemVariants}
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] '><Link to='/projects'>Projects</Link></motion.li>
          <motion.li 
          variants={itemVariants}
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] '><Link to='/blog'>Blog</Link></motion.li>
          <motion.li 
          variants={itemVariants}
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] '><Link to='/contact'>Contact Me</Link></motion.li>
          <motion.li 
          variants={itemVariants}
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] '><a href="#">Resume</a></motion.li>  
      </ul>
      
      
      <motion.div
        variants={itemVariants} 
        className='lg:hidden flex flex-col items-center'
    >
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

        <motion.ul
        onClick={() => setToggle(false)}
        className={`${toggle ?'lg:flex' : 'hidden'} px-5 text-center text-secondary text-[25px] leading-[35px] font-m absolute right-0 top-20 w-2/5 mr-[5px]`}>
          <li className='mb-3'><Link to='/about'>About</Link></li>
          <hr className='bg-white h-[2px] border-0'/>
          <li className='mb-3'><Link to='/projects'>Projects</Link></li>
          <hr className='bg-white h-[2px] border-0'/>
          <li className='mb-3'><Link to='/blog'>Blog</Link></li>
          <hr className='bg-white h-[2px] border-0'/>
          <li className='mb-3'><Link to='/contact'>Contact</Link></li>
          <hr className='bg-white h-[2px] border-0'/>
          <li className='mb-3'><a href="#">Resume</a></li>  
      </motion.ul>

      </motion.div> 
        <Outlet />
      </motion.nav>
  )
}

export default Navbar;
