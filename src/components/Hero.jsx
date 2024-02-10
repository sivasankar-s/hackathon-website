import React from 'react'

const Hero = ({pref}) => {
  return (
    <div ref={pref} className='bg-zinc-800 flex relative mt-20 lg:mt-14 pt-14 gap-y-10  lg:gap-y-0 flex-col h-[70vh] lg:h-[95vh] items-center justify-center '>
      <p className='absolute top-3 left-1 lg:left-4 text-xs lg:text-lg p-1.5 font-semibold bg-yellow-500 rounded-lg lg:p-3'>No Fee for Idea Registration</p>
        <div className='text-center'>
        <h1 className='font-bold text-4xl lg:text-9xl lg:mt-12 text-white  font-orbitron'>Crackathon 2.0</h1>
        <h1 className='font-bold text-4xl mt-5 lg:text-7xl  lg:mt-10 text-white  font-orbitron'>2024</h1>
        </div>
        <div className='text-center'>
        <h1 className='font-bold text-2xl lg:text-4xl mt-12 lg:mt-32 text-white '>March 14, 15</h1> 
        <h3 className='font-semibold text-xl flex text-center lg:text-3xl mt-5 lg:mt-6 text-white'>M. Kumarasamy College of Engineering, Karur</h3>
        </div>
    </div>
  )
}

export default Hero