import React from 'react'
import Subheading from "../components/Subheading"

const About = ({text}) => {
  return (
    <section className='mx-[25px] md:mx-[100px]'>
      <Subheading text="About" />
      <div className="flex justify-center items-center h-screen overflow-hidden text-[35px] text-white underline decoration-secondary underline-offset-[12px] decoration-[5px]">Coming Soon...</div>
    </section>
  )
}

export default About