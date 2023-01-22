import React from 'react'
// import Button from '../components/Button'
import heroImg from '../assets/hero-img.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <main className='bg-primary flex justify-between items-center px-[100px] py-[20px]'>
      <div className='text-white font-lobster text-[75px] leading-[90px] font-n'>
        <p>Hi,</p>
        <p>I am <span className='font-pacifico font-vb text-secondary text-[100px] leading-[120px]'>d</span>avid,</p>
        <p>Web Developer</p>
        <p className='text-[16px] leading-[24px] text-[#cccccc] font-poppins mt-[20px] mb-[10px]'>Frontend Developer, Profficient in React & Node</p>
        <button className='text-[18px] leading-[22px] font-inter font-vb bg-secondary px-[50px] py-[20px] rounded-[5px]'><Link to='/projects'>My Projects</Link></button>
      </div>
      <div>
        <img src={heroImg} alt="hero_img" className='w-[498px] h-[388px]'/>
      </div>
    </main>
  )
}

export default Hero