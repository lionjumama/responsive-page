import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-700'>
        <li>
          <a href="">Github</a>
          </li>

          <li>
          <a href="">Hacker-rank</a>
          </li>

          <li>
          <a href="">Instagram</a>
        </li>

      </ul>
      <div className='flex gap-2'>
        <img src="./public/assets/Help-Avatar.svg" alt="help" />
        <div >
          <p className='font-playfair font-thin'> Have any Question? </p>
          <a href="" className='font-lato font-medium'></a>
        </div>
      </div>
    </div>
    

  )
}

export default Footer