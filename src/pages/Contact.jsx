import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='h-screen w-auto sm:w-full bg-white flex flex-col '>

        <Navbar />
        <h1 className='mt-20 text-4xl lg:text-7xl font-orbitron text-center mb-20'>Contact</h1>

        <div className='bg-gray-950'>
        <div className='m-20 p-5 mx-6 lg:mx-16 bg-gray-500 '>
            
            <div className='flex flex-wrap gap-y-10 my-10 justify-center '>
                <div className='flex flex-col   lg:w-1/2 '>
                    <h3 className='text-2xl text-center font-bold mb-10'>Staff Coordinators</h3>

                    <div className='flex justify-center space-x-6'>
                    <div className='flex flex-col gap-y-5'>
                        <p className='text-lg font-bold'>Dr. Syed Musthafa </p>
                        <p className='text-lg font-bold'>A. Vijay </p>
                    </div>

                    <div className='flex flex-col gap-y-5'>
                        <Link className='text-lg font-semibold' to='tel:9787886643'>+91 9787886643</Link>
                        <Link className='text-lg font-semibold' to='tel:9942712798'>+91 9942712798</Link>
                    </div>
                    </div>
                    
                    
                </div>

                <div className='flex flex-col items-center lg:w-1/2'>
                    
                    <h3 className='text-2xl text-center font-bold mb-10'>Student Coordinators</h3>

                    <div className='flex justify-center space-x-6'>
                        <div className='flex flex-col gap-y-5'>
                            <p className='text-lg font-bold'>Nivesh G </p>
                            <p className='text-lg font-bold'>Nideesh A G </p>
                            <p className='text-lg font-bold'>Nivesh G </p>
                            <p className='text-lg font-bold'>Nideesh A G </p>
                        </div>

                        <div className='flex flex-col gap-y-5'>
                            <Link className='text-lg font-semibold' to='tel:9363354914'>+91 9363354914</Link>
                            <Link className='text-lg font-semibold' to='tel:7708076533'>+91 7708076533</Link>
                            <Link className='text-lg font-semibold' to='tel:9363354914'>+91 9363354914</Link>
                            <Link className='text-lg font-semibold' to='tel:7708076533'>+91 7708076533</Link>
                        </div>
                    </div>

                </div>
             
            

            </div>

            <h4 className='mt-10 text-lg font-semibold text-center'>Email: crackathon24@gmail.com</h4>
            <Link target='_blank' to='https://mkce.ac.in/' className='mt-4 text-lg font-semibold block text-center'>mkce.ac.in</Link>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact