import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-2'>
        <img src="./public/assets/logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-500 to bg-red-500 text-xs text-white px-2.5 py-1.5 rounded-2xl'>
            Hosterr is hiring
        </button>
        </div>
        <ul className='hidden lg:flex justify-between items-center font-lato text-gray-700 gap-6'>
          
        <li><a href="#">Plans</a></li>
        <li> <a href="#">Find-Domain</a></li>
        <li> <a href="#">Why-Hosterr</a></li>

          
        </ul>
        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
          <a className='text-gray-700' href="#">sign in</a>
          <button className='rounded-md px-4 py-3 bg-yellow-400 hover:bg-yellow-600 text-white'>join waitlist</button>
        </div>
        <div className='lg:hidden'>
        <FaBars />
        </div>
        </div>
  )
}

export default Header