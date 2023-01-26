import React from 'react'
import { FaCopyright, FaLinkedin, FaTwitter, } from "react-icons/fa"
import {SiGmail, SiGithub} from "react-icons/si"

const Footer = () => {
  return (
    <footer className='w-full px-4 md:px-0 my-4 lg:my-4 md:absolute md:bottom-0 flex md:flex-col flex-row md:justify-end justify-between items-center text-white gap-x-5'>
      <div className='flex gap-3 text-[20px]'>
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'><a href="https://twitter.com/A_believer007" target="_blank"><FaTwitter /></a></p>
        
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'><a href="https://www.linkedin.com/in/thedavid-ao/" target="_blank"><FaLinkedin /></a></p>
        
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'><a href="mailto:https://davidabolade29@gmail.com" target="_blank"><SiGmail /></a></p>
        
        <p className='hover:text-secondary hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150'><a href="https://github.com/A-believer" ><SiGithub /></a></p>
      </div>

      <div className='flex justify-center items-center pb-2 text-secondary'>
        <p className='text-[20px] mr-2'><FaCopyright /></p>
        <p className='text-[16px] leading-[29px]'>2022 David Abolade</p>
      </div>
    </footer>
  )
}

export default Footer