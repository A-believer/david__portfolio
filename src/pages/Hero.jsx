import React from 'react'
// import Button from '../components/Button'
import heroImg from '../assets/hero-img.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <main className='flex justify-between lg:px-[100px] px-[25px] md:py-[20px]'>
      <div className='text-white font-lobster md:text-[75px] text-[50px]  md:leading-[90px] leading-[70px]  font-n tracking-wider mt-10'>
        <p>Hi there!</p>
        <p>I am <span className='font-pacifico font-vb text-secondary md:text-[100px]  md:leading-[110px] text-[70px] leading-[75px] animate-pulse'>D</span>avid,</p>
        <p><span className='font-pacifico font-vb text-secondary md:text-[100px]  md:leading-[110px] text-[70px] leading-[75px] '>W</span>eb <span className='font-pacifico font-vb text-secondary md:text-[100px]  md:leading-[110px] text-[70px] leading-[75px]'>D</span>eveloper</p>
        <p className='capitalize md:w-3/4 w-full text-[16px] leading-[24px] text-[#cccccc] font-poppins my-[20px] mb-[10px]'>Front-end web Developer, Profficient and Efficicent with Modern Web Technologies</p>

        <div className='flex gap-x-4 lg:mb-8 mb-4 justify-start'>
          
          <button className='text-[18px] leading-[22px] font-inter font-vb bg-secondary md:px-[50px] px-[25px] md:py-[20px] py-[8px] rounded-[5px] hover:translate-y-1 hover:scale-90 transition ease-in-out delay-150 shadow-lg'><Link to='/projects' className='bg-secondary hover:text-primary'>My Projects</Link></button>

          <button className='text-[18px] leading-[22px] font-inter font-vb bg-primary border border-secondary px-[50px] py-[17px] rounded-[5px] hover:text-secondary hover:translate-y-1 hover:scale-90 transition ease-in-out delay-150 shadow-lg'><Link to='/about' className=''>My Skills</Link></button>
        </div>
        
      </div>
      <div>
        <img src={heroImg} alt="hero_img" className='xl:w-[498px] xl:h-[388px] lg:w-[400px] lg:h-[300px] lg:block hidden'/>
      </div>
    </main>
  )
}

export default Hero