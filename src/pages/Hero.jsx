import React from 'react'
// import Button from '../components/Button'
import heroImg from '../assets/hero-img.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <main className='flex justify-between items-center lg:px-[100px] px-[30px] sm:py-[20px] lg:mt-[40px] sm:mt-[20px]'>
      <div className='text-white font-lobster text-[75px]  leading-[90px]  font-n tracking-wider mt-20'>
        <p>Hi there!</p>
        <p>I am <span className='font-pacifico font-vb text-secondary text-[100px]  leading-[120px] animate-pulse'>d</span>avid,</p>
        <p>a <span className='font-pacifico font-vb text-secondary text-[100px]  leading-[120px] '>W</span>eb <span className='font-pacifico font-vb text-secondary text-[100px]  leading-[120px]'>D</span>eveloper</p>
        <p className='lg:w-full w-4/5 text-[16px] leading-[24px] text-[#cccccc] font-poppins mt-[20px] mb-[10px]'>Frontend Developer, Profficient and Efficicent with Mordern Web Technologies</p>

        <div className='flex gap-x-4 lg:mb-8 mb-4 justify-center'>
          <button className='text-[18px] leading-[22px] font-inter font-vb bg-secondary md:px-[50px] px-[30px] md:py-[20px] py-[10px] rounded-[5px]'><Link to='/projects' className='bg-secondary'>My Projects</Link></button>

          <button className='text-[18px] leading-[22px] font-inter font-vb bg-primary border border-secondary px-[50px] py-[20px] rounded-[5px]'><Link to='/about' className=''>My Skills</Link></button>
        </div>
        
      </div>
      <div>
        <img src={heroImg} alt="hero_img" className='xl:w-[498px] xl:h-[388px] lg:w-[400px] lg:h-[300px] lg:block hidden'/>
      </div>
    </main>
  )
}

export default Hero