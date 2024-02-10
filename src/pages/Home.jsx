import React, { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Dates from '../components/Dates'
import Prize from '../components/Prize'
import Theme from '../components/Theme'
import Guidelines from '../components/Guidelines'
import './Home.css'
import Footer from '../components/Footer'
import RegisterButton from '../components/RegisterButton'
import { useAnimation, useInView } from 'framer-motion'
import Reveal from '../Reveal'

const Home = () => {

  

  // useEffect(() => {
  //   if(){

  //   }
  // })

  return (
    <div className='h-screen w-auto sm:w-full bg-white flex flex-col '>
      <Navbar />

      <Reveal>
        <Hero />
        </Reveal>

        {/* <section className=''>
            <h1 className='text-white text-3xl'>Date for Submitting Ideas <span className='font-semibold'>06.03.2024</span></h1>
        </section> */}

      <Reveal>
        <Dates />
        </Reveal>
        <Reveal>
        <Prize />
        </Reveal>
        <Reveal>
        <Theme />
        </Reveal>
        <Reveal>
        <Guidelines />
        </Reveal>
        <Reveal>
        <RegisterButton />
        </Reveal>
        <Footer />

    </div>
  )
}

export default Home