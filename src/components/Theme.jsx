import React from 'react'
import arvr from '../assets/arvr.jpg'

function FrontOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gradient-to-br from-purple-900 to-pink-600 overflow-hidden transition-all duration-100 delay-200 z-20 hover:opacity-0">
      <h1 className='text-4xl  text-white font-russo'>Open Theme</h1>
    </div>
  );
}

function BackOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
      <div className='flex flex-col'>
      <h3 className='text-xl mb-10'>Partcipants can choose any theme</h3>
      <h4 className='text-center'>Web development,  AI,  AR/VR,  etc.</h4>
      </div>
    </div>
  );
}

function FullCard() {
  return (
    <div className=" inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10">
      <div className='flex flex-col'>
      <h1 className='text-3xl  text-white font-russo text-center mb-4'>Open Theme</h1>
      <h3 className='text-xl mb-4 px-4'>Partcipants can choose any theme</h3>
      <h4 className='text-center'>Web development,  AI,  AR/VR,  etc.</h4>
      </div>
    </div>
  );
}

const Theme = ({pref}) => {

  let width = window.innerWidth;

  return (
    <div ref={pref} className='mt-24 lg:mt-44 px-6 sm:px-16 '>
        <h1 className='font-orbitron text-2xl lg:text-6xl after:content-["―――"]  after:block text-center mb-12  ani-text'>Theme</h1>

        <div className='flex flex-wrap justify-center'>

        <div className='lg:w-[400px] w-auto overflow-hidden  gap-y-5 shadow-lg rounded-xl '>
            {/* <h2 className='text-3xl mb-5 font-bold text-center'>AR / VR</h2>
            <img src={arvr} className='w-full h-40 lg:h-60 object-cover  rounded-xl overflow-hidden' />
            
            <p className='mt-10 px-4 pb-8'>
            In the current tech landscape, AR/VR stands tall, a beacon of immersive potential.
From enhancing education to revolutionizing entertainment, the possibilities are vast.
Collaborative minds unite, fueled by the drive to redefine human interaction.
With each line of code and pixel crafted, new worlds come alive in virtual space.
Innovation knows no bounds as teams push the boundaries of perception.
In this hackathon, AR/VR pioneers embark on a journey to shape the future.
            </p> */}

            {width > 768 ? 
              (
                <div className="relative h-40 lg:h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card ">
      <FrontOfCard />
      <BackOfCard />
    </div>
              )
              :
              (
                <div className="relative h-48 lg:h-60 rounded-2xl text-white  cursor-pointer transition-all duration-700 ">
      <FullCard />
    </div>
              )


          }




    

        </div>

        </div>

        
    </div>
  )
}

export default Theme