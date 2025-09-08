import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const [ isServicesDrpDownOpen, setIsServicesDrpDownOpen ] = useState(false);
  return (
    <div className='fixed top-0 w-full bg-white border-1 border-b-black p-4 flex justify-evenly items-center'>
      <div className='flex items-center gap-2'>
        <img src='/logo.png' alt='logo' className='w-12 h-12'/>
        <p className='font-bold text-4xl'>leo9</p>
      </div>
      <div className='flex items-center gap-7 font-medium'>
        <Link >Work</Link>
        <Link onMouseEnter={() => setIsServicesDrpDownOpen(true)} onMouseLeave={()=> setIsServicesDrpDownOpen(false)}>Services ●</Link>
        <Link>Clients</Link>
        <Link>About ●</Link>
        <Link>Knowledge</Link>
        <button className='font-bold text-white bg-black px-9 py-3 rounded-md'>Contact</button>
      </div>
      {isServicesDrpDownOpen? (
            <div className="absolute mt-2 top-10 flex space-x-4 bg-white shadow-lg p-4 rounded-xl z-50">
              <div className="bg-pink-100 p-4 rounded-lg hover:scale-105 transition">
                <h3 className="font-bold">Design.</h3>
                <p className="text-sm text-gray-600">Handcraft the user experience.</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-lg hover:scale-105 transition">
                <h3 className="font-bold">Technology.</h3>
                <p className="text-sm text-gray-600">Leverage the power of code.</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg hover:scale-105 transition">
                <h3 className="font-bold">Marketing.</h3>
                <p className="text-sm text-gray-600">Creative strategies for brands.</p>
              </div>
            </div>
          ): null}
    </div>
  )
}

export default Navbar
