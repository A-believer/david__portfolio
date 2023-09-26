import React from 'react'
import Subheading from '../components/Subheading'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

export default function About() {

    const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className='text-white lg:px-[100px] px-[40px] items-center justify-center gap-y-2 py-10'>
          
          <Subheading text="About" id={`about`} />


          <p className='md:text-xl text-base  font-sans tracking-tight flex flex-col py-10'>
            <span>Welcome to a world where pixels come to life and design meets code!</span>
            <span>I'm <span className='text-secondary font-lobster font-black tracking-widest text-2xl'><b className='text-3xl'>D</b>avid</span>
            , a passionate <span className='font-bold text-secondary underline underline-offset-4'>frontend web developer</span> with a knack for turning digital dreams into reality. With a palette of tools ranging from basic <b className='font-bold text-secondary underline underline-offset-4'>HTML</b>, <b className='font-bold text-secondary underline underline-offset-4'>CSS</b>, and <b className='font-bold text-secondary underline underline-offset-4'>Javascript</b> to frameworks and libraries like <b className='font-bold text-secondary underline underline-offset-4'>Tailwind</b>, <b className='font-bold text-secondary underline underline-offset-4'>React</b> and <b className='font-bold text-secondary underline underline-offset-4'>Next JS</b> at my fingertips. I craft immersive user experiences that leave a lasting impression. Whether it's responsive layouts that dance across screens or interactive interfaces that spark curiosity, I thrive on pushing the boundaries of web technology. Join me on a journey through my digital playground, where innovation knows no bounds, and every click tells a story. Let's make the web a more beautiful and functional place together, one line of code at a time.
        </span>
        
      </p> 
    </motion.section>
  )
}
