import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-end   text-sm gap-4 lg:text-lg sm:gap-10 font-medium font-orbitron p-3'>
      {/* absolute top-0 right-0 left-0 */}
      <Link to='/' className="font-semibold navunderline">Home</Link>
      <Link to='/contact' className=' font-semibold navunderline'>Contact</Link>
      <Link to='/register' className=' font-semibold navunderline'>Register</Link>
    </div>
  )
}

export default Navbar