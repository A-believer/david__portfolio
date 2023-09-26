import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <nav
      className='font-bold lg:px-[100px] px-[25px] flex justify-between items-center py-[17px] lg:py-[30px]  bg-primary z-10 shadow-lg shadow-grey-900 sticky top-0'>
      <p
        className='bg-primary font-satisfy font-vb text-secondary md:text-5xl text-3xl leading-[30px] lg:ml-0 ml-[20px] animate-pulse'>DA</p>
       

      <div className='hidden lg:flex gap-x-[46px] text-white text-[14px] leading-[17px] font-m bg-primary'>
        <a
          href='#about'
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] bg-primary'>About</a>
        <a
          href='#projects'
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] bg-primary'>Projects</a>
        <a 
          href='#contact'
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] bg-primary'>Contact Me</a>
        <a 
          href='https://drive.google.com/file/d/1PgmmVqsmeFdMzCl_-6YrZS_80YY2Ai5z/view?usp=drive_link'
          className='hover:underline underline decoration-transparent hover:decoration-secondary underline-offset-[5px] bg-primary'
          download
          target='_blank'
        >Resume</a>  
      </div>
      
      
      <div
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

        <div
        onClick={() => setToggle(false)}
          className={`${toggle ? 'lg:flex' : 'hidden'} px-5 text-center text-white text-[25px] leading-[35px] font-m absolute left-0 top-[81px] w-full py-10`}>
          <a href='#about' className='pb-5'>About</a>
          <hr className='bg-secondary h-[2px] border-0 mx-28 mb-10'/>
          <a href='#projects' className='pb-5'>Projects</a>
          <hr className='bg-secondary h-[2px] border-0 mx-28 mb-10'/>
          <a href='#contact' className='pb-5'>Contact Me</a>
          <hr className='bg-secondary h-[2px] border-0 mx-28 mb-10'/>
          <a  href='https://drive.google.com/file/d/1PgmmVqsmeFdMzCl_-6YrZS_80YY2Ai5z/view?usp=drive_link'  className='pb-5' download target='_blank'>Resume</a> 
          <hr className='bg-secondary h-[2px] border-0 mx-28'/>
      </div>
      </div> 
      </nav>
  )
}

export default Navbar;
