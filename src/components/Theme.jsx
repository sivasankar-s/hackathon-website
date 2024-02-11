import React from 'react'
import arvr from '../assets/arvr.jpg'

const Theme = ({pref}) => {
  return (
    <div ref={pref} className='mt-24 lg:mt-44 px-6 sm:px-16 '>
        <h1 className='font-orbitron text-2xl lg:text-6xl after:content-["―――"]  after:block text-center mb-12'>Theme</h1>

        <div className='flex flex-wrap justify-center'>

        <div className='lg:w-[400px] w-auto overflow-hidden p-3 gap-y-5 shadow-lg rounded-xl '>
            <h2 className='text-3xl mb-5 font-bold text-center'>AR / VR</h2>
            {/* <div className='rounded-xl overflow-hidden border-2 border-black'> */}
            <img src={arvr} className='w-full h-40 lg:h-60 object-cover  rounded-xl overflow-hidden' />
            {/* </div> */}
            <p className='mt-10 px-4 pb-8'>
            In the current tech landscape, AR/VR stands tall, a beacon of immersive potential.
From enhancing education to revolutionizing entertainment, the possibilities are vast.
Collaborative minds unite, fueled by the drive to redefine human interaction.
With each line of code and pixel crafted, new worlds come alive in virtual space.
Innovation knows no bounds as teams push the boundaries of perception.
In this hackathon, AR/VR pioneers embark on a journey to shape the future.
            </p>
        </div>

        </div>

        
    </div>
  )
}

export default Theme