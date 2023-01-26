import React from 'react'
import { FaCopyright, FaLinkedin, FaTwitter, } from "react-icons/fa"
import {SiGmail, SiGithub} from "react-icons/si"

const Footer = () => {
  return (
    <footer className='w-full px-[30px] md:px-[100px] my-4 lg:my-4 md:absolute md:bottom-0 flex justify-between items-center text-white'>
      <div className='flex gap-3 md:gap-10 text-[20px]'>
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:animate-pulse'><a href="https://twitter.com/A_believer007" target="_blank"><FaTwitter /></a></p>
        
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:animate-pulse'><a href="https://www.linkedin.com/in/thedavid-ao/" target="_blank"><FaLinkedin /></a></p>
        
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:animate-pulse'><a href="mailto:https://davidabolade29@gmail.com" target="_blank"><SiGmail /></a></p>
        
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:animate-pulse'><a href="https://github.com/A-believer" ><SiGithub /></a></p>
      </div>

      <div className='text-secondary'>
        <p className='text-[16px] leading-[29px]'><span className='text-[20px] mr-2'><FaCopyright /></span> 2022 David Abolade</p>
      </div>
    </footer>
  )
}

export default Footer