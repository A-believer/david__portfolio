import { Typewriter } from 'react-simple-typewriter'
import heroImage from "../assets/david.jpg"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};


const Hero = () => {

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
      className='text-white lg:px-[100px] px-[40px] md:h-[80vh] h-screen flex flex-col items-center justify-center gap-y-2'>
      <img src={heroImage} alt="profile picture" className='rounded-full w-40 h-40 border-4 border-secondary'/>
      <h1 className='font-poppins font-bold md:text-4xl text-3xl mt-5 md:self-auto self-start'>Hi there, </h1>
      <h1 className='font-poppins md:text-4xl text-2xl md:self-auto self-start'>My name is <span className='font-lobster text-secondary'>D</span>avid <span className='font-lobster text-secondary'>A</span>bolade</h1>

      <p className='font-lobster md:text-4xl text-3xl md:self-auto self-start mb-2'>
        <span>I am a </span>
        <span className='text-secondary underline'>
          <Typewriter
            words={['Web Developer', 'Software Engineer', 'Problem Solver', 'Civil Engineer']}
            loop={100}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>   
    </motion.section>
  )
}

export default Hero