import React from 'react'

const Guidelines = ({pref}) => {
  return (
    <div ref={pref} className='mt-12 lg:mt-44 px-6 lg:px-16 '>
        <h1 className='font-orbitron text-2xl lg:text-6xl  text-center mb-12'>Guidelines</h1>

        <h3 className='font-orbitron text-xl lg:text-4xl  text-center mb-10'>Idea Submission</h3>
        <div className='flex justify-center mb-12 '>
          <ul className='list-disc leading-9 w-auto lg:w-1/2 '>
            <li>Team should have <span className='font-bold'>2-4 members</span></li>
            <li>No registration fee for idea submission</li>
            <li>Last date for idea submission <span className='font-bold'>6.3.24</span></li>
            <li>After submission of idea, if your project is shortlisted, you will receive mail</li>
            <li>The project should be done only in Final Hackathon</li>
            {/* <li></li> */}
          </ul>
          </div>

          <h3 className='font-orbitron text-xl lg:text-4xl  text-center mb-10'>Final Hackathon</h3>
          <div className='flex justify-center '>
          <ul className='list-disc leading-9 w-auto lg:w-1/2 '>
            <li>Selected teams should pay the registration fee - <span className='font-bold'>Rs. 550 per head</span></li>
            <li>Final hackathon will be take place on M. Kumarasamy College of Engineering, Karur, Tamilnadu - 639113</li>
            <li>In the Final hackathon, teams will be asked to perform or implement task given by judges.</li>
            <li>Food, refreshment and accomodation will be provided by us.</li>
            <li>Each team will be provided with rooms</li>
            <li>Teams should be assemble on the venue before <span className='font-bold'>9.30 AM</span></li>
            <li>If you need accomodation before 14.3.24, extra <span className='font-bold'>Rs. 100</span> will be added to registration fee</li>
            <li>Internet service will be provided, but you should bring your own VR accessories (If project is VR)</li>
          </ul>
          </div>

        {/* <div className='px-20'>
            
        </div> */}
    </div>
  )
}

export default Guidelines