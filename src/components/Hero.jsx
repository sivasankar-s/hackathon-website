import React from 'react'
import bg1 from '../assets/bg4.mp4'

const Hero = ({pref}) => {
  return (
    <div ref={pref} className=' flex relative mt-20 lg:mt-14 pt-14 gap-y-10  lg:gap-y-0 flex-col h-[70vh] lg:h-[95vh] items-center justify-center 
    
    '>


{/* <video className="absolute inset-0 object-cover  w-full h-full overflow-hidden"
        autoPlay
        loop
        muted>
          <source src={bg1} type='video/mp4' />

        

        </video> */}
     
     {/* <div className='bg-black w-full h-full opacity-75 absolute inset-0' /> */}

      <p className='absolute top-3 left-1 lg:left-4 text-xs lg:text-lg p-1.5 font-semibold bg-yellow-500 rounded-lg lg:p-3'>No Fee for Idea Submission</p>
        
        
        
        <div className='absolute  top-40 lg:top-20  text-center   '>
        <h1 className='font-bold text-4xl lg:text-9xl lg:mt-12 ani-text-sm ani-text  font-orbitron'>Crackathon 2.0</h1>
        <h1 className='font-bold text-4xl mt-5 lg:text-7xl  lg:mt-10  ani-text-sm ani-text  font-orbitron'>2024</h1>
        </div>

      

        <div className='absolute text-center top-1/2 '>
        <h1 className=' text-2xl lg:text-4xl mt-12 lg:mt-32 ani-text-sm ani-text font-russo'>March 14-15, 2024</h1> 
        <h3 className=' text-lg mx-4 lg:mx-0 flex text-center text-black lg:text-3xl mt-5 lg:mt-6 font-russo '>M. Kumarasamy College of Engineering, Karur</h3>
        </div>

        
    </div>
  )
}

export default Hero