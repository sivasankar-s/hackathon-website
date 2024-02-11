import React from 'react'

const Hero = ({pref}) => {
  return (
    <div ref={pref} className=' flex relative mt-20 lg:mt-14 pt-14 gap-y-10  lg:gap-y-0 flex-col h-[70vh] lg:h-[95vh] items-center justify-center 
    bg-white lg:bg-[radial-gradient(#e5e7eb_6px,transparent_1px)] lg:[background-size:48px_48px] 
    bg-[radial-gradient(#e5e7eb_2px,transparent_1px)] [background-size:24px_24px] 
    '>
      <p className='absolute top-3 left-1 lg:left-4 text-xs lg:text-lg p-1.5 font-semibold bg-yellow-500 rounded-lg lg:p-3'>No Fee for Idea Registration</p>
        <div className='text-center'>
        <h1 className='font-bold text-4xl lg:text-9xl lg:mt-12 grad drop-shadow-xl   font-orbitron'>Crackathon 2.0</h1>
        <h1 className='font-bold text-4xl mt-5 lg:text-7xl  lg:mt-10 grad2   font-orbitron'>2024</h1>
        </div>
        <div className='text-center'>
        <h1 className='font-bold text-2xl lg:text-4xl mt-12 lg:mt-32 text-black '>March 14, 15</h1> 
        <h3 className='font-semibold text-lg mx-3 lg:mx-0 flex text-center lg:text-3xl mt-5 lg:mt-6 text-black'>M. Kumarasamy College of Engineering, Karur</h3>
        </div>
    </div>
  )
}

export default Hero