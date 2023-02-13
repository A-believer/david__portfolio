import React from 'react'
import heroImg from '../assets/hero-img.png'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    <main className='flex justify-between lg:px-[100px] px-[25px]'>
      <div className='text-white font-lobster md:text-[75px] text-[50px]  md:leading-[90px] leading-[70px]  font-n tracking-wider mt-10'>
        <p>Hi there!</p>
        <p>I am <span className='font-pacifico font-vb text-secondary md:text-[100px]  md:leading-[110px] text-[70px] leading-[75px] animate-pulse'>D</span>avid,</p>

        <p>
           <Typewriter
            words={['Web Developer,', 'Software Engineer,', 'Problem Solver!']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
            
          />
        </p>
        <p className='capitalize md:w-3/5 w-full text-[16px] leading-[24px] text-[#cccccc] font-poppins my-[20px] mb-[10px]'>
          
          <Typewriter
            words={['Front-End Developer, Profficient and Efficient with modern Web Technologies!']}
            loop={1}
            cursor
            cursorStyle=''
            typeSpeed={75}
            deleteSpeed={55}
            delaySpeed={1000}
          />
        </p>

        <div className='flex gap-x-4 lg:mb-8 mb-4 justify-start'>
          
          <button className='text-[18px] leading-[22px] font-inter font-vb bg-secondary md:px-[50px] px-[25px] md:py-[20px] py-[8px] rounded-[5px] hover:translate-y-1 hover:scale-90 transition ease-in-out delay-150 shadow-lg'><Link to='/projects' className='bg-secondary hover:text-primary'>My Projects</Link></button>

          <button className='text-[18px] leading-[22px] font-inter font-vb bg-primary border border-secondary px-[50px] py-[17px] rounded-[5px] hover:text-secondary hover:translate-y-1 hover:scale-90 transition ease-in-out delay-150 shadow-lg'><Link to='/about' className=''>My Skills</Link></button>
        </div>
        
      </div>
      <div className='xl:w-[498px] xl:h-[388px] lg:w-[400px] lg:h-[300px] lg:block hidden mx-auto'>
        <img src={heroImg} alt="hero_img" className='w-full'/>
      </div>
    </main>
  )
}

export default Hero