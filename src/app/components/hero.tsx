import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex items-center max-w-screen-xl w-full p-4'>   
          <div className='flex flex-col gap-4 '>
              <h3 className='text-lg text-[#64ffda] '>Hi, my name is</h3>
              <h2 className='text-[#ccd6f6] text-[60px] font-bold leading-none	'>Nikhil Thakur.</h2>
              <h2 className='text-[#8892b0] text-[60px] font-bold leading-none	'>I Build Things For The Web!</h2>
              <span className='font-[20px] leading-[20px] text-[#8892b0] max-w-[400px] w-full block'>Im a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, Im focused on building accessible, human-centered products at Upstatement.</span>
              <Link href="#" className="w-[150px] text-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contact Me</Link>

          </div>
    </div>
  )
}

export default Hero
