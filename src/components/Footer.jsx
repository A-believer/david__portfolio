import React from 'react'
import { FaCopyright, FaLinkedin, FaTwitter, } from "react-icons/fa"
import {SiGmail, SiGithub} from "react-icons/si"

const Footer = () => {
  return (
    <footer className='w-full px-sp py-[35px] absolute bottom-0 bg-primary flex flex-col justify-end items-end text-white gap-x-5'>
      <div className='flex justify-center items-center pb-2'>
        <p className='text-[20px] mr-2'><FaCopyright /></p>
        <p className='text-[16px] leading-[29px]'>2022 David Abolade</p>
      </div>

      <div className='flex gap-3 text-[20px]'>
        <p><a href="https://twitter.com/A_believer007" target="_blank"><FaTwitter/></a></p>
        <p><a href="https://www.linkedin.com/in/thedavid-ao/" target="_blank"><FaLinkedin/></a></p>
        <p><a href="mailto:https://davidabolade29@gmail.com" target="_blank"><SiGmail/></a></p>
        <p><a href="https://github.com/A-believer" ><SiGithub /></a></p>
        
      </div>
    </footer>
  )
}

export default Footer