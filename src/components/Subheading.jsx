import React from 'react'

const Subheading = ({text, id}) => {
  return (
    <h1 id={id} className='font-poppins font-vb lg:text-[35px] text-[30px] text-white md:leading-[52px] leading-[48px] underline decoration-secondary underline-offset-[12px] lg:mt-[20px] mt-[10px]'>{ text }</h1>
  )
}

export default Subheading;
