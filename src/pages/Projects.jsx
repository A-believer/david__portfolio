import React from 'react'
import proData from '../assets/data'
import Footer from '../components/Footer'
import Subheading from '../components/Subheading'

const Projects = ({text}) => {
  return (
    <section className='px-[25px] md:px-[100px] text-white'>
      <Subheading text="Projects" />
      <div className='w-full grid lg:grid-cols-3 md:grid-cols-1 mx-auto my-20'>
        {proData.map((item, idx) => (
          <div className='w-[350px] h-[300px] rounded-xl my-8' key={item.id + idx}>
            <a href={item.link} target="_blank" className=''>
              <img src={item.img} alt="" className='rounded-t-xl' />
              <div className='bg-secondary'>
                <p className='bg-secondary'>{item.title}</p>
               
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects