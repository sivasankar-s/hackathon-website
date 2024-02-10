import React from 'react'
import { Link } from 'react-router-dom'

const RegisterButton = ({pref}) => {
  return (
    <div ref={pref} className='flex justify-center mt-10'>
        <Link to='/'
        className='font-orbitron bg-yellow-500 py-5 px-10 text-xl font-semibold rounded-full'
        >
            Register Now
        </Link>
    </div>
  )
}

export default RegisterButton