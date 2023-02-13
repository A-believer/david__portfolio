import React from 'react'
import proData from '../assets/data'
import Footer from '../components/Footer'
import Subheading from '../components/Subheading'

const Projects = ({text}) => {
  return (
    <section className='px-[25px] md:px-[100px] text-white'>
      <Subheading text="Projects" />
      <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 my-10'>
        {proData.map((item, idx) => (
          <div className='xl:w-[360px] lg:w-[300px] my-10' key={item.id + idx}>
            <a href={item.link} target="_blank" className=''>
              <img src={item.img} alt="" className='rounded-t-2xl' />
              <div className='bg-secondary p-4'>
                <p className='bg-transparent'>{item.title}</p>
                <ul className='bg-secondary flex gap-4 flex-wrap text-[12px] leading-[14px]'>
                  <li className='rounded-xl px-4 py-2'>{item.tags[1]}</li>
                  <li className='rounded-xl px-4 py-2'>{item.tags[2]}</li>
                  <li className='rounded-xl px-4 py-2'>{item.tags[3]}</li>
                  <li className='rounded-xl px-4 py-2'>{item.tags[4]}</li>
                  <li className='rounded-xl px-4 py-2'>{item.tags[5]}</li>
                  <li className='rounded-xl px-4 py-2'>{item.tags[6]}</li>
                </ul>
                <p className='bg-transparent'>{item.info}</p>
              </div>
            </a>
          </div>
        ))}


      </div>
    </section>
  )
}

export default Projects