import React from 'react'
import Subheading from "../components/Subheading"


const Blog = ({text}) => {
  return (
    <section className='mx-[25px] md:mx-[100px]'>
      <Subheading text="Blog" />
      <div className="flex justify-center items-center h-screen overflow-hidden text-[35px] text-white underline decoration-secondary underline-offset-[12px] decoration-[5px]">Coming Soon...</div>
    </section>
  )
}

export default Blog