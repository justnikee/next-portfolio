import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex items-center justify-center'>   
          <div className='flex flex-col gap-4 justify-center items-center max-w-screen-xl w-full p-4'>
              <h3 className='text-lg text-[#64ffda]'>Hi, my name is</h3>
              <h2 className='text-[#ccd6f6] text-[74px] font-bold leading-[75px]	uppercase'>Nikhil Thakur.</h2>
        <h2 className='text-[#8892b0] text-[74px] font-bold leading-[71px]	uppercase'>I &nbsp;
          <span className='bg-[rgba(255,255,255,.15)] px-4 rotate-3 hover:rotate-0 rounded-sm inline-block transition-[0.2s] hover:text-black hover:bg-white '>Cook</span> Things For The Web!</h2>
        <span className='font-[20px] leading-[20px] text-[#8892b0] max-w-[600px] w-full block text-center mb-3 mt-3'>A frontend noobie developer with 1 year of experience in working with HTML,
          CSS, and JavaScript, eager to create visually appealing and
          interactive web pages, collaborate, and contribute to projects
          while embracing best practices.</span>
              <Link href="#" className="w-[150px] text-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contact Me</Link>

          </div>
    </div>
  )
}

export default Hero
