import React from 'react'
import one from '../assets/1st-prize.png'
import two from '../assets/2nd-place.png'
import three from '../assets/3rd-place.png'

const Prize = ({pref}) => {
  return (
    <div ref={pref} className='mt-24 lg:mt-44'>
        <h1 className='font-orbitron text-2xl lg:text-6xl after:content-["―――"] after:block  text-center mb-12'>Prize Amount</h1>

        <div className='flex flex-wrap justify-around gap-8'>

        <div className='flex flex-col justify-center items-center text-center'>
          <img src={one} className='w-56 h-56'/>
          {/* <div className=''> */}
          <h2 className='font-orbitron text-xl lg:text-3xl mt-3'>1st Prize</h2>
          <h2 className='font-orbitron text-xl lg:text-3xl'>Rs. 20,000</h2>
          {/* </div> */}
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
          <img src={two} className='w-56 h-56'/>
          {/* <div className=''> */}
          <h2 className='font-orbitron text-xl lg:text-3xl mt-3'>2nd Prize</h2>
          <h2 className='font-orbitron text-xl lg:text-3xl'>Rs. 12,000</h2>
          {/* </div> */}
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
          <img src={three} className='w-56 h-56'/>
          {/* <div className=''> */}
          <h2 className='font-orbitron text-xl lg:text-3xl mt-3'>3rd Prize</h2>
          <h2 className='font-orbitron text-xl lg:text-3xl'>Rs. 8,000</h2>
          {/* </div> */}
        </div>

        </div>

    </div>
  )
}

export default Prize