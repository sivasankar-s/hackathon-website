import React from 'react'
import arvr from '../assets/arvr.jpg'

const Theme = ({pref}) => {
  return (
    <div ref={pref} className='mt-12 lg:mt-44 px-6 sm:px-16 '>
        <h1 className='font-orbitron text-2xl lg:text-6xl after:content-["―――"] after:block text-center mb-12'>Theme</h1>

        <div className='flex flex-wrap justify-center'>

        <div className='lg:w-[400px] w-auto overflow-hidden p-3 gap-y-5 shadow-lg rounded-xl '>
            <h2 className='text-3xl mb-5 font-bold text-center'>AR / VR</h2>
            {/* <div className='rounded-xl overflow-hidden border-2 border-black'> */}
            <img src={arvr} className='w-full h-40 lg:h-60 object-cover  rounded-xl overflow-hidden' />
            {/* </div> */}
            <p className='mt-10 px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod dictum sagittis. Donec nec urna lectus. Vestibulum turpis tortor, consequat vel ante ac, volutpat feugiat mi. Sed et tortor at leo pellentesque tempus id non erat. Praesent mollis magna sem, nec commodo justo posuere ac. In hac habitasse platea dictumst. Donec fringilla purus vitae malesuada commodo. Mauris et tortor efficitur tortor vestibulum porta. Aenean id consectetur orci. Aenean quis elit at enim sodales aliquet sodales non erat.
            </p>
        </div>

        </div>

        
    </div>
  )
}

export default Theme